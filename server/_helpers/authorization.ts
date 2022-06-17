import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const authorization = (req: Request, res: Response, next: Function) => {
  const authToken = req.headers["authorization"]?.split(" ")[1] || "";

  try {
    jwt.verify(authToken, process.env.JWT_SECRET as string);
    next();
  } catch {
    res.status(403).send();
  }
};

export default authorization;
