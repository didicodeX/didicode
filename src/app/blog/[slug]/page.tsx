import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Divider from "@/components/Divider";

interface ArticleProps {
  params: { slug: string };
}

export default async function Article({ params }: ArticleProps) {
  // Attendre la résolution de params (si c'est nécessaire)
  const { slug } = await Promise.resolve(params);
  
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${slug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="container">
      <div className="article" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <Divider/>
    </div>
  );
}