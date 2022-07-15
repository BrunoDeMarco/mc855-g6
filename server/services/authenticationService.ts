import { PrismaClient } from "@prisma/client";
import { sha256 } from "js-sha256";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export enum Roles {
  Admin,
  Common,
}

interface AuthenticationResponse {
  authenticated: boolean;
  jwt?: string;
}

export const authenticate = async (
  username: string,
  password: string
): Promise<AuthenticationResponse> => {
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
    if (foundUser) {
      return {
        authenticated: true,
        jwt: jwt.sign(
          { userId: foundUser?.user_id, role: foundUser?.role },
          process.env.JWT_SECRET as string,
          {
            expiresIn: 3600 * 24 * 7, // One week.
          }
        ),
      };
    }
  } catch (err) {
    console.log("Auth Error", err);
    return { authenticated: false };
  }

  return { authenticated: false };
};
