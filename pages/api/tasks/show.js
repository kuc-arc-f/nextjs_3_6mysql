import prisma from '../../../libs/prisma'
//
export default async function (req, res){
  try{
// console.log(req.query );
    var id = req.query.id
    const post = await prisma.task.findUnique({
      where: { id: Number(id) },
    })
    var ret ={
      item: post
    }
    await prisma.$disconnect()
    res.json(ret);
  } catch (err) {
      console.log(err);
      res.status(500).send();    
      await prisma.$disconnect()
  }   
};