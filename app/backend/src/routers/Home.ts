const { Router } = require("express");
import { Request, Response } from "express";

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {});

export default homeRouter;
