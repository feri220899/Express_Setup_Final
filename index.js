import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import userRouter from "./src/routes/user-router.js";

app.use('/user', userRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
