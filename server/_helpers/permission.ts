import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Roles } from "../services/authenticationService";

const permission = (...permittedRoles: Roles[]) => {
  return (req: Request, res: Response, next: Function) => {
    const authToken = req.headers["authorization"] || "";

    const decoded = jwt.verify(authToken, process.env.JWT_SECRET as string);

    if (permittedRoles.includes(JSON.parse(decoded as string).role)) {
      next();
    } else {
      res.status(403).send();
    }
  };
};

export default permission;
