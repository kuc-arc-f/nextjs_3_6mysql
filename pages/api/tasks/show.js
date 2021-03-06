import LibPrisma from '../../../libs/LibPrisma'
//
export default async function (req, res){
  try{
    const prisma = LibPrisma.get_client()
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