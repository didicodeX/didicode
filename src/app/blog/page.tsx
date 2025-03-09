import Link from "next/link";
import { getAllPosts, Post } from "@/lib/posts";

export default function Blog() {
  const posts: Post[] = getAllPosts();

  return (
    <div className="mt-12">
      <header className="text-center mb-10">
        <h1 className="xl:text-4xl lg:text-3xl text-2xl mb-5 font-SpaceGrotesk font-extrabold">
          Didicodex — Le guide du développeur moderne
        </h1>
        <h2 className=" md:text-xl  lg:text-xl xl:text-2xl font-SpaceGrotesk">
          De la première ligne de code à tes projets les plus ambitieux, Didicodex
          est là pour t’aider à progresser. Articles, tutoriels et formations :
          découvre les clés pour devenir un développeur moderne et maîtriser les
          technologies du web.
        </h2>
      </header>
      <ul className="w-fit">
        {posts.map((post) => (
          <li key={post.slug} className="flex flex-col gap-y-2 p-4">
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-y-2 p-2"
            >
              <p className="text-slate-500">
                {post.metadata.date}
              </p>
              <h2 className="text-secondary-500 font-semibold">
                {post.metadata.title}
              </h2>
              <p>{post.metadata.intro}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
