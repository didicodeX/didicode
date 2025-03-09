import Link from "next/link";
import { getAllPosts, Post } from "@/lib/posts";

export default function Blog() {
  const posts: Post[] = getAllPosts();
  console.log("Articles récupérés :", posts); // 🔍 DEBUG

  return (
    <div className="mt-32">
      <h1 className="text-3xl mb-10 font-SpaceGrotesk font-black text-center">
        Didicodex — Le guide du développeur moderne
      </h1>
      <p></p>
      <ul>
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex flex-col gap-y-2 mb-4 p-4"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-y-2 p-2"
            >
              <h2 className="text-secondary-500 font-semibold">
                {post.metadata.title}
              </h2>
              <p className="text-gray text-sm">
                {post.metadata.date} - {post.metadata.author}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
