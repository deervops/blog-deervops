import { PrismaClient } from '@prisma/client';

export default class PostModel {
  constructor(private prisma = new PrismaClient()) {}

  getAllPosts = async () => {
    const posts = await this.prisma.post.findMany()
    return posts
  }
}
