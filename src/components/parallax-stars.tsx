"use client"

import { useEffect, useLayoutEffect, useRef, type CSSProperties } from "react"
import { Star, type StarVariant } from "./star"
import { starPaths } from "./star-paths"

const PARALLAX_SPEED = 0.4
const useBrowserLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect
const stars: {
  variant: StarVariant
  rotation: number
  column: number
  x: number
  edgeX: number
  mobileEdgeX: number
  y: number
  maxHeight: number
  drift: number
  direction: number
}[] = [
  {
    variant: 1,
    rotation: -22,
    column: 1,
    x: 68,
    edgeX: 28,
    mobileEdgeX: 38,
    y: 46,
    maxHeight: 460,
    drift: 18,
    direction: 1,
  },
  {
    variant: 8,
    rotation: 17,
    column: 2,
    x: 68,
    edgeX: 84,
    mobileEdgeX: 68,
    y: 56,
    maxHeight: 300,
    drift: 24,
    direction: -1,
  },
  {
    variant: 3,
    rotation: -18,
    column: 1,
    x: 28,
    edgeX: 10,
    mobileEdgeX: 30,
    y: 45,
    maxHeight: 350,
    drift: 14,
    direction: -0.6,
  },
  {
    variant: 2,
    rotation: 22,
    column: 2,
    x: 35,
    edgeX: 60,
    mobileEdgeX: 62,
    y: 53,
    maxHeight: 430,
    drift: 20,
    direction: 0.85,
  },
  {
    variant: 6,
    rotation: -12,
    column: 1,
    x: 77,
    edgeX: 40,
    mobileEdgeX: 44,
    y: 48,
    maxHeight: 330,
    drift: 22,
    direction: 1,
  },
  {
    variant: 4,
    rotation: 26,
    column: 2,
    x: 62,
    edgeX: 85,
    mobileEdgeX: 78,
    y: 46,
    maxHeight: 420,
    drift: 16,
    direction: -0.8,
  },
  {
    variant: 7,
    rotation: 18,
    column: 1,
    x: 35,
    edgeX: 20,
    mobileEdgeX: 34,
    y: 55,
    maxHeight: 360,
    drift: 24,
    direction: -1,
  },
  {
    variant: 5,
    rotation: -20,
    column: 2,
    x: 25,
    edgeX: 78,
    mobileEdgeX: 70,
    y: 50,
    maxHeight: 440,
    drift: 18,
    direction: 0.7,
  },
]

/** CSS positions every star before hydration; JavaScript only adds scroll motion. */
export function ParallaxStars() {
  const fieldRef = useRef<HTMLDivElement>(null)

  useBrowserLayoutEffect(() => {
    const field = fieldRef.current
    const page = field?.parentElement
    if (!field || !page) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const elements = stars.map(
      ({ variant }) =>
        field.querySelector<HTMLElement>(`[data-star="${variant}"]`)!,
    )
    let frame: number | null = null
    let pageTop = 0
    let scrollDistance = 0

    const render = () => {
      frame = null
      const scroll = Math.max(
        0,
        Math.min(scrollDistance, window.scrollY - pageTop),
      )
      const offset = reducedMotion.matches ? 0 : scroll * PARALLAX_SPEED
      field.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`)
      const progress = scrollDistance > 0 ? scroll / scrollDistance : 0
      elements.forEach((element, index) => {
        const { drift, direction } = stars[index]
        const depthOffset = reducedMotion.matches
          ? 0
          : (progress * 2 - 1) * drift * direction
        element.style.setProperty("--star-drift", `${depthOffset.toFixed(2)}px`)
      })
    }

    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(render)
    }
    const measure = () => {
      pageTop = page.getBoundingClientRect().top + window.scrollY
      scrollDistance = Math.max(0, page.offsetHeight - window.innerHeight)
      // Apply restored scroll positions synchronously, before the browser paints.
      if (frame !== null) window.cancelAnimationFrame(frame)
      render()
    }
    const onScroll = () => {
      if (!reducedMotion.matches) schedule()
    }

    const observer = new ResizeObserver(measure)
    observer.observe(page)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", measure)
    window.addEventListener("pageshow", measure)
    reducedMotion.addEventListener("change", measure)
    measure()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
      window.removeEventListener("pageshow", measure)
      reducedMotion.removeEventListener("change", measure)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="resume-star-field" ref={fieldRef} aria-hidden="true">
      {([1, 2] as const).map((column) => (
        <div
          key={column}
          className={`resume-star-lane resume-star-lane-${column}`}
        >
          <div className="resume-star-lane-content">
            {stars
              .filter((star) => star.column === column)
              .map(
                ({
                  variant,
                  rotation,
                  x,
                  edgeX,
                  mobileEdgeX,
                  y,
                  maxHeight,
                  drift,
                  direction,
                }) => {
                  const [, , width, height] = starPaths[variant].viewBox
                    .split(" ")
                    .map(Number)
                  const ratio = width / height
                  const radians = (Math.abs(rotation) * Math.PI) / 180
                  const mobileX = 50 + (x - 50) * 0.4
                  const style = {
                    "--rotation": `${rotation}deg`,
                    "--edge-x": `${edgeX}%`,
                    "--mobile-edge-x": `${mobileEdgeX}%`,
                    "--scatter-space-x": (2 * Math.min(x, 100 - x)) / 100,
                    "--scatter-space-y": (2 * Math.min(y, 100 - y)) / 100,
                    "--mobile-space-x":
                      (2 * Math.min(mobileX, 100 - mobileX)) / 100,
                    "--max-height": `${maxHeight}px`,
                    "--drift-limit": `${drift}px`,
                    "--initial-drift": `${-drift * direction}px`,
                    "--star-ratio": ratio,
                    "--bounds-width":
                      ratio * Math.cos(radians) + Math.sin(radians),
                    "--bounds-height":
                      Math.cos(radians) + ratio * Math.sin(radians),
                  } as CSSProperties
                  return (
                    <div
                      key={variant}
                      data-star={variant}
                      className="parallax-star"
                      style={style}
                    >
                      <Star variant={variant} className="resume-star" />
                    </div>
                  )
                },
              )}
          </div>
        </div>
      ))}
    </div>
  )
}
