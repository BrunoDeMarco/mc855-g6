import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const authorization = (req: Request, res: Response, next: Function) => {
  const authToken = req.headers["authorization"] || "";

  const decoded = jwt.verify(authToken, process.env.JWT_SECRET as string);

  if (decoded) {
    next();
  } else {
    res.status(403);
  }
};

export default authorization;
