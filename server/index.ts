import express from "express";
import authRouter from "./controllers/authenticationController";
import attendanceRouter from "./controllers/attendanceController";
import sampleProtectedRouter from "./controllers/sampleProtectedController";
import userRouter from "./controllers/userController";
import cors from "cors";

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRouter);
app.use(sampleProtectedRouter);

app.use("/user", userRouter);
app.use("/attendance", attendanceRouter);

app.listen(port, () => console.log(`Listening on port ${port}.`));
