import { Router } from "express";
import postRouter from "./routers/Posts";
import homeRouter from "./routers/Home";
import app from "./app";

const route = Router();

app.use(route);
app.use("/home", homeRouter);
app.use("/posts", postRouter);

app.listen(3001, () => "server running on port 3333");
