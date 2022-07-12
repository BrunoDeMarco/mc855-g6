import { PrismaClient } from "@prisma/client";
import { sha256 } from "js-sha256";

const prisma = new PrismaClient();

export const createUser = async (username: string, password: string) => {
  const hashedPassword = sha256(process.env.PASS_SALT + password);

  try {
    const user = await prisma.users.create({
      data: { username, password: hashedPassword },
    });
    return user.user_id;
  } catch (err) {
    return -1;
  }
};
