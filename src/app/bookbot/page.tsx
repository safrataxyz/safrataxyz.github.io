import fs from "fs"
import path from "path"
import { remark } from "remark"
import html from "remark-html"
import matter from "gray-matter"

export default async function BookbotPage() {
  const filePath = path.join(
    process.cwd(),
    "src/app/bookbot/frontend-analysis.md",
  )
  const markdown = fs.readFileSync(filePath, "utf8")

  const { content } = matter(markdown)
  const fixedContent = content.replace(
    /\]\(\.\/assets\//g,
    "](/bookbot/assets/",
  )
  const processed = await remark().use(html).process(fixedContent)
  const contentHtml = processed.toString()

  return (
    <main className="mx-8 my-8">
      <div className="mx-auto max-w-prose prose dark:prose-invert">
        <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </main>
  )
}
