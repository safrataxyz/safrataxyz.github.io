import Image from "next/image";
import SvgCarpet from "@/components/icons/carpet";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-x-hidden flex flex-col py-8 min-h-[75vh] bg-[conic-gradient(from_-15deg_at_bottom_left,_var(--tw-gradient-stops))] from-stone-200 via-stone-300 to-stone-400  dark:from-black dark:via-stone-800 dark:to-stone-800">
        <div className="absolute inset-0 w-full max-h-full bg-[url(/noise.svg)] opacity-50 dark:opacity-40 brightness-50"></div>
        <SvgCarpet className="absolute w-[200px] h-[200px] sm:w-[600px] sm:h-[600px] max-w-[65vh] max-h-[65vh] rotate-12 right-[-25px] top-[-25px] sm:right-[-75px] sm:top-[-75px] opacity-50" />
        <section className="container flex-1 flex flex-wrap flex-col justify-center">
          <h1 className="text-6xl font-bold basis-full">
            Hi, <br className="sm:hidden" />
            i'm Jakub
          </h1>
          <h2 className="text-4xl font-bold basis-full">
            a full-stack developer, builder
          </h2>
        </section>
      </section>
      <div className="border-white border-b-[1rem]"></div>
      <article>
        <section className="container mt-16 grid gap-4">
          <h2 className="text-4xl font-bold">* Who is Jakub?</h2>
          <p>
            Greetings traveler, my name is Jakub Safrata and I am a full-stack
            developer from Czech Republic
          </p>
        </section>
      </article>
    </main>
  );
}
