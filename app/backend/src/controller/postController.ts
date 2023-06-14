import PostService from "../service/postService";
import { Request, Response } from 'express';

export default class PostController {
  constructor(private postService = new PostService()) {}

  async getAllPosts (req: Request, res: Response) {
    const posts = await this.postService.getAllPosts();
    res.status(200).json(posts);
  };
}