import Link from "next/link";
import { getAllPosts, Post } from "@/lib/posts";

export default function Blog() {
  const posts: Post[] = getAllPosts();

  return (
    <div className="mt-32">
      <header className="text-center mb-10">
        <h1 className="text-3xl mb-5 font-SpaceGrotesk font-black">
          Didicodex — Le guide du développeur moderne
        </h1>
        <p className="font-semibold text-lg">
          De la première ligne de code à tes projets les plus ambitieux, Didicodex
          est là pour t’aider à progresser. Articles, tutoriels et formations :
          découvre les clés pour devenir un développeur moderne et maîtriser les
          technologies du web.
        </p>
      </header>
      <ul className="w-fi">
        {posts.map((post) => (
          <li key={post.slug} className="flex flex-col gap-y-2 mb-4 p-4">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-y-2 p-2"
            >
              <h2 className="text-secondary-500 font-semibold">
                {post.metadata.title}
              </h2>
              <p>{post.metadata.intro}</p>
              <p className="text-slate-500 text-sm">
                {post.metadata.date}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
