import { RESUME_DATA } from "@/data/resume-data"

function educationMarkdown(html: string) {
  return html
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(
      /<a\b[^>]*\bhref=(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi,
      (_, _quote, href, text) => `[${text}](${href})`,
    )
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .trim()
}

/** Generate the download from the same content displayed on the resume page. */
export function getResumeMarkdown() {
  const resume = RESUME_DATA
  const sections = [
    `# ${resume.name}`,
    resume.about,
    `[${resume.location}](${resume.locationLink})`,
    [
      `[Website](${resume.personalWebsiteUrl})`,
      `[Email](mailto:${resume.contact.email})`,
      ...resume.contact.social.map(
        (social) => `[${social.name}](${social.url})`,
      ),
    ].join(" · "),
    "## About",
    resume.summary,
    "## Work Experience",
    ...resume.work.flatMap((work) => [
      `### [${work.company}](${work.link})`,
      `**${work.title}** · ${work.start} – ${work.end === "now" ? "Present" : work.end}`,
      work.description
        .trim()
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .join("\n\n"),
      `**Technologies:** ${work.techStack.join(", ")}`,
    ]),
    "## Education",
    ...resume.education.flatMap((education) => [
      `### [${education.school}](${education.link})`,
      `**${education.degree}** · ${education.start} – ${education.end}`,
      educationMarkdown(education.description),
    ]),
    "## Skills",
    resume.skills.map((skill) => `- [${skill.name}](${skill.link})`).join("\n"),
  ]

  return `${sections.join("\n\n")}\n`
}
