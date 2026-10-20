import type { SVGProps } from "react"
import { starPaths } from "./star-paths"

export type StarVariant = keyof typeof starPaths

export interface StarProps extends SVGProps<SVGSVGElement> {
  variant?: StarVariant
}

/** A decorative, hand-drawn star. Color and dimensions can be set with CSS or SVG props. */
export function Star({
  variant = 8,
  width = 64,
  height = 64,
  ...props
}: StarProps) {
  const { viewBox, path } = starPaths[variant]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeWidth={8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={path} />
    </svg>
  )
}
