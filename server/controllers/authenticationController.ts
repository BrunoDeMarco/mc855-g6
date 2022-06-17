import express from "express";
import { authenticate } from "../services/authenticationService";

const authRouter = express.Router();

authRouter.post("/session", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  authenticate(username, password)
    .then((r) => {
      if (r.authenticated) {
        res.status(200).send(r.jwt);
      } else {
        res.status(401).send();
      }
    })
    .catch(() => res.status(500).send());
});

export default authRouter;
