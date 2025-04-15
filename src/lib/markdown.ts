import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export async function getMarkdown(fileName: string) {
  const filePath = path.join(process.cwd(), fileName)
  const fileContents = fs.readFileSync(filePath, "utf8")

  const { content, data } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()

  return {
    frontmatter: data,
    contentHtml,
  }
}
