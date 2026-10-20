"use client"

import { Children, useId, type CSSProperties, type ReactNode } from "react"

// Cover the border union with one pattern, preserving its angle at every join.
// A tall SVG covers long mobile resumes without Safari's feTile rendering issues.
const stripes = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="8192"><defs><pattern id="stripes" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M-4 4L4-4M0 8L8 0M4 12L12 4" fill="none" stroke="white" stroke-width="1.4"/></pattern></defs><rect width="100%" height="100%" fill="url(#stripes)"/></svg>')}`

/** Subgrid follows section heights immediately, without measuring or waiting for hydration. */
export function StripedSections({ children }: { children: ReactNode }) {
  const sections = Children.toArray(children)
  const filterId = `${useId().replace(/:/g, "")}-section-stripes`

  return (
    <div className="resume-section-group">
      <svg
        className="resume-frame-definitions"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id={filterId}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
            colorInterpolationFilters="sRGB"
          >
            <feImage
              href={stripes}
              preserveAspectRatio="xMinYMin slice"
              result="stripes"
            />
            <feComposite in="SourceGraphic" in2="stripes" operator="in" />
          </filter>
        </defs>
      </svg>
      <div
        className="resume-section-decoration"
        aria-hidden="true"
        style={{
          gridRow: `1 / span ${sections.length}`,
          filter: `url(#${filterId})`,
        }}
      >
        {sections.slice(1).map((_, index) => (
          <span
            key={index}
            className="resume-frame-divider"
            style={{ gridRow: index + 2 }}
          />
        ))}
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className="resume-framed-section"
          style={{ gridRow: index + 1 } as CSSProperties}
        >
          {section}
        </div>
      ))}
    </div>
  )
}
