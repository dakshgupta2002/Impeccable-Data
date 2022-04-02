import 'dotenv/config'
import express from 'express';
import './config/db.js';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import insightifyRouter from './routers/insightifyRouter.js';

const app = express();
app.options('*', cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/insightify", insightifyRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen('3333', () => {
    console.log("Hello Backend");
});