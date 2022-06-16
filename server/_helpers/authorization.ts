import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const authorization = (req: Request, res: Response, next: Function) => {
  const authToken = req.headers["authorization"] || "";

  try {
    jwt.verify(authToken, process.env.JWT_SECRET as string);
  } catch {
    res.status(403).send();
  }

  next();
};

export default authorization;
