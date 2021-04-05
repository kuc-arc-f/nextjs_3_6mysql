var csrf = require('csrf');
var tokens = new csrf();
import prisma from '../../../libs/prisma'
import LibConst from '../../../libs/LibConst'
//
export default async function (req, res){
  try{
    var ret_arr = {ret:0, msg:""}
    if (req.method === "POST") {
      var data = req.body
 console.log(data);
      var token =data._token
//console.log(token)
      var CSRF_SECRET = LibConst.get_config().CSRF_SECRET
      if(tokens.verify(CSRF_SECRET, token) === false){
        throw new Error('Invalid Token, csrf_check');
      }
      const result = await prisma.task.create({
        data: {
          title: data.title,
          content: data.content,
//          authorId: 0,
        },
      })      
    }
    await prisma.$disconnect()
    res.json([]);
  } catch (err) {
      console.log(err);
      res.status(500).send(); 
      await prisma.$disconnect()   
  }   
};