import * as React from "react";
import type { SVGProps } from "react";

const SvgCarpet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={900}
    height={900}
    viewBox="0 0 900 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Frame 3">
      <rect width={900} height={900} />
      <rect
        id="MID"
        x={300}
        y={300}
        width={300}
        height={300}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="ML"
        x={100}
        y={400}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="TL"
        x={100}
        y={100}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="TM"
        x={400}
        y={100}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="TR"
        x={700}
        y={100}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="MR"
        x={700}
        y={400}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="BR"
        x={700}
        y={700}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="BM"
        x={400}
        y={700}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
      <rect
        id="BL"
        x={100}
        y={700}
        width={100}
        height={100}
        className="fill-stone-800 group-hover:fill-stone-700 dark:fill-stone-200 dark:group-hover:fill-stone-400"
      />
    </g>
  </svg>
);
export default SvgCarpet;
