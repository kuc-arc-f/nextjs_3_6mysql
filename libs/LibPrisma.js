import { PrismaClient } from "@prisma/client";

export default {
  get_client: function(client){
    try{
      const prisma = new PrismaClient();
      return prisma
    } catch (e) {
      console.log(e);
      throw new Error('error, get_client');
    }
  },    
}
