import express from "express";
import authRouter from "./controllers/authenticationController";
import sampleProtectedRouter from "./controllers/sampleProtectedController";
import userRouter from "./controllers/userController";

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRouter);
app.use(sampleProtectedRouter);
app.use(userRouter);

app.listen(port, () => console.log(`Listening on port ${port}.`));
