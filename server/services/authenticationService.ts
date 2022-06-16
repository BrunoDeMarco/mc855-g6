import { PrismaClient } from "@prisma/client";
import { sha256 } from "js-sha256";

const prisma = new PrismaClient();

export const authenticate = async (username: string, password: string) => {
  const hashedPassword = sha256(process.env.PASS_SALT + password);

  try {
    const foundUser = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
        },
        password: {
          equals: hashedPassword,
        },
      },
    });
    return !!foundUser;
  } catch (err) {
    return false;
  }
};
