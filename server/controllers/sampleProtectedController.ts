import express from "express";
import { Roles } from "../services/authenticationService";
import authorization from "../_helpers/authorization";
import permission from "../_helpers/permission";

const sampleProtectedRouter = express.Router();

sampleProtectedRouter.get("/protected", authorization, (req, res) => {
  res.status(200).send("This is protected content");
});

sampleProtectedRouter.get(
  "/forAdmin",
  authorization,
  permission(Roles.Admin),
  (req, res) => {
    res.status(200).send("This is admin protected content");
  }
);

sampleProtectedRouter.get(
  "/forCommon",
  authorization,
  permission(Roles.Common),
  (req, res) => {
    res.status(200).send("This is common protected content");
  }
);

export default sampleProtectedRouter;
