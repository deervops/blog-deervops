const { Router } = require("express");
import PostController from "../controller/postController";

const postRouter = Router();
const postController = new PostController();

postRouter.get("/", (req: Request, res: Response) => postController.getAllPosts);

// postRouter.post("/", (req: Request, res: Response) => postController.);

export default postRouter;
