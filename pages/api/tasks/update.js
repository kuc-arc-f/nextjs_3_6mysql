var csrf = require('csrf');
var tokens = new csrf();
import prisma from '../../../libs/prisma'
import LibConst from '../../../libs/LibConst'
//
export default async function (req, res){
  try{
    var data = req.body
// console.log(data);
    var id = data.id
    var CSRF_SECRET = LibConst.get_config().CSRF_SECRET
    if(tokens.verify(CSRF_SECRET, data._token) === false){
      throw new Error('Invalid Token, csrf_check');
    }    
    const post = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title: data.title, content: data.content
      },
    })    
    var ret ={
      item: {}
    }
    await prisma.$disconnect()
    res.json(ret);
  } catch (err) {
      console.log(err);
      res.status(500).send();    
      await prisma.$disconnect()
  }   
};