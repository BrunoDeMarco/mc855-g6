import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const login = (username: string, password: string) => {

}

async function main() {
    try{
        const allUsers = await prisma.users.findMany();
    }catch(err){
        console.log(err);
    }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
