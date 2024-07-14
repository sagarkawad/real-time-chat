import { db } from "@/server/index";
import { posts } from "@/server/schema";

export default async function getPosts() {
  try {
    const posts = await db.query.posts.findMany();
    console.log(posts);
    return { success: posts };
  } catch (e) {
    return { error: e };
  }
}
