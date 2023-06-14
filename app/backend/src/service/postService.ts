import PostModel from "../model/postModel";

export default class PostService {
  constructor(private postModel = new PostModel()) {}

  getAllPosts = async () => {
    const posts = await this.postModel.getAllPosts();
    return posts;
  };
}
