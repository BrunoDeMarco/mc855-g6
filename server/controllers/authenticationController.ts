import express, { Router } from "express";
import authorization from "../_helpers/authorization";

const app = express();

app.get("/sem", authorization, (req, res) => {
  res.send("This is a route with authorization.");
});

app.get("/com", (req, res) => {
  res.send("This is a route WITHOUT authorization.");
});

app.listen(5000);
