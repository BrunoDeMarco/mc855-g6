import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Roles } from "../services/authenticationService";

const permission = (...permittedRoles: Roles[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers["authorization"]?.split(" ")[1] || "";

    const decoded = jwt.verify(authToken, process.env.JWT_SECRET as string);

    if (permittedRoles.includes(JSON.parse(JSON.stringify(decoded)).role)) {
      next();
    } else {
      res.status(403).send();
    }
  };
};

export default permission;
