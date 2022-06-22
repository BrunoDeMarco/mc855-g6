import express from "express";
import authRouter from "./controllers/authenticationController";
import sampleProtectedRouter from "./controllers/sampleProtectedController";

const app = express();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRouter);
app.use(sampleProtectedRouter);

app.listen(port, () => console.log(`Listening on port ${port}.`));
