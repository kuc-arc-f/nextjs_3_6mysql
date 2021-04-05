const {promisify} = require('util');
import prisma from '../../../libs/prisma'

//
export default async function (req, res){
  try{
    //console.log("uid=", req.query.uid)
    var items = []
    //
    const posts = await prisma.task.findMany({
//      where: { published: true },
    })
    var ret ={
      items: posts
    }   
    await prisma.$disconnect()
    res.json(ret);
  } catch (err) {
      console.log(err);
      res.status(500).send(); 
      await prisma.$disconnect()   
  }   
};