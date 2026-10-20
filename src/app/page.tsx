import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Metadata } from "next"
import { Section } from "@/components/ui/section"
import {
  GlobeIcon,
  EnvelopeOpenIcon,
  DownloadIcon,
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { RESUME_DATA } from "@/data/resume-data"
import { ParallaxStars } from "@/components/parallax-stars"
import { StripedSections } from "@/components/striped-sections"
import "./resume.css"

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
}

export default function Page() {
  return (
    <div className="resume-page">
      <ParallaxStars />
      <main className="resume-content container relative mx-auto scroll-my-12 p-4 print:p-12 md:p-16">
        <section className="resume-stack mx-auto w-full max-w-2xl space-y-8 print:bg-white print:space-y-6">
          <div className="resume-header relative flex gap-4 flex-col-reverse xs:flex-row xs:items-center xs:justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-normal font-sans">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty !mt-0 text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>
              <p className="max-w-md items-center text-pretty text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 mt-2 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME_DATA.contact.email}`}>
                      <EnvelopeOpenIcon className="size-4 mt-[2px]" />
                    </a>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url} target="_blank">
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <a
                href="/resume.md"
                download="jakub-safrata-resume.md"
                className="inline-flex items-center gap-1.5 pt-2 text-xs underline underline-offset-4 print:hidden"
              >
                <DownloadIcon className="size-3" aria-hidden="true" />
                Download this resume as Markdown
              </a>
              <div className="hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex">
                {RESUME_DATA.contact.email ? (
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </a>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <div className="relative size-40 shrink-0 overflow-hidden rounded-xl">
              <Image
                alt={RESUME_DATA.name}
                src={RESUME_DATA.avatar}
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
          <StripedSections>
            <Section className="resume-section relative">
              <h2 className="text-xl">About</h2>
              <p className="text-pretty text-sm">{RESUME_DATA.summary}</p>
            </Section>
            <Section className="resume-section relative">
              <h2 className="text-xl mt-2">Work Experience</h2>
              {RESUME_DATA.work.map((work) => {
                return (
                  <Card key={work.company}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 text-base">
                        <h3 className="inline-flex items-center justify-center gap-x-1 leading-none">
                          <a className="hover:underline" href={work.link}>
                            {work.company}
                          </a>

                          <span className="inline-flex gap-x-1">
                            {work.badges.map((badge) => (
                              <Badge
                                variant="secondary"
                                className="align-middle text-xs"
                                key={badge}
                              >
                                {badge}
                              </Badge>
                            ))}
                          </span>
                        </h3>
                        <div className="text-sm tabular-nums">
                          {work.start} - {work.end}
                        </div>
                      </div>

                      <h4 className="text-sm leading-none">{work.title}</h4>
                    </CardHeader>
                    <CardContent className="mt-2 text-xs">
                      <div>{work.description}</div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                        Technologies: {work.techStack.join(", ")}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </Section>
            <Section className="resume-section relative">
              <h2 className="text-xl mt-2">Education</h2>
              {RESUME_DATA.education.map((education) => {
                return (
                  <Card key={education.school}>
                    <CardHeader>
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2 text-base">
                        <h3 className="leading-none">{education.school}</h3>
                        <div className="text-sm tabular-nums">
                          {education.start} - {education.end}
                        </div>
                      </div>
                      <h4 className="text-sm leading-none">
                        {education.degree}
                      </h4>
                    </CardHeader>
                    <CardContent
                      className="mt-2 text-xs"
                      dangerouslySetInnerHTML={{
                        __html: education.description,
                      }}
                    />
                  </Card>
                )
              })}
            </Section>
            <Section className="resume-section relative">
              <h2 className="text-xl">Skills</h2>
              <div className="flex flex-wrap gap-x-2 gap-y-1 mt-4">
                {RESUME_DATA.skills.map((skill) => {
                  return (
                    <a key={skill.name} href={skill.link} target="_blank">
                      <Badge>{skill.name}</Badge>
                    </a>
                  )
                })}
              </div>
            </Section>
          </StripedSections>

          {/* <Section className="print-force-new-page scroll-mb-16">
     <h2 className="text-xl">Projects</h2>
     <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
      {RESUME_DATA.projects.map((project) => {
       return (
        <ProjectCard
         key={project.title}
         title={project.title}
         description={project.description}
         tags={project.techStack}
         link={"link" in project ? project.link.href : undefined}
        />
       );
      })}
     </div>
    </Section> */}
        </section>
      </main>
    </div>
  )
}
