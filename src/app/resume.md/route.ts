import { getResumeMarkdown } from "@/lib/resume-markdown"

export const dynamic = "force-static"

export function GET() {
  return new Response(getResumeMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="jakub-safrata-resume.md"',
    },
  })
}
