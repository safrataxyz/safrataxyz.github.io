import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Photobába - výstava",
  description: "A private photographic study of hands, objects, and space.",
  robots: {
    index: false,
    follow: false,
  },
}

const photographs = [
  { file: "photobaba1.webp", note: "Salát na stole" },
  { file: "photobaba10.webp", note: "Honeywellka" },
  { file: "photobaba11.webp", note: "Vodní pavouk" },
  { file: "photobaba.webp", note: "Předloktí na kraji" },
  { file: "photobaba12.webp", note: "Meziprostor" },
  { file: "photobaba3.webp", note: "Dotek" },
  { file: "photobaba5.webp", note: "Mikro" },
  { file: "photobaba6.webp", note: "Knihy na stole" },
  { file: "photobaba7.webp", note: "Kniha mířící ke kraji" },
  { file: "photobaba4.webp", note: "Růžek železný" },
  { file: "photobaba8.webp", note: "Telefon na klávesnici" },
  { file: "photobaba9.webp", note: "Objetí" },
  { file: "photobaba13.webp", note: "Bílo" },
  { file: "photobaba2.webp", note: "Růžek dřevěný" },
  { file: "photobaba14.png", note: "Štos" },
  { file: "photobaba15.png", note: "rulička do ručky" },
  { file: "photobaba16.png", note: "pohyb" },
  { file: "photobaba17.png", note: "agresivní počtení" },
]

const galleryLayouts = [
  "min-[701px]:col-start-1 min-[701px]:justify-self-start",
  "min-[701px]:col-start-5 min-[701px]:justify-self-end",
  "min-[701px]:col-start-3 min-[701px]:justify-self-center",
]

export default function PhotobabaPage() {
  return (
    <main className="min-h-[100svh] overflow-hidden bg-[#264D39] font-sans text-white">
      <header className="absolute left-0 top-0 z-[2] flex w-full justify-between px-4 py-[18px] font-mono text-[10px] uppercase leading-none tracking-[0.08em] min-[701px]:px-7 min-[701px]:py-6">
        <p>Výstava</p>
      </header>

      <section
        className="relative flex min-h-[100svh] flex-col justify-end px-[14px] pb-[4vh] pt-[18px] min-[701px]:px-6 min-[701px]:pb-[5vh] min-[701px]:pt-6"
        aria-labelledby="photobaba-title"
      >
        <div className="mb-3 flex w-full justify-between font-mono text-[10px] uppercase tracking-[0.07em] min-[701px]:ml-[1vw] min-[701px]:w-[min(54vw,760px)]">
          <p className="hidden min-[701px]:block">
            Ruky, knížky a random objekty
          </p>
        </div>
        <h1
          className="-ml-[0.065em] m-0 text-[22vw] font-normal uppercase leading-[0.82] tracking-[-0.085em] min-[701px]:-mb-[0.12em] min-[701px]:text-[clamp(4.7rem,16.3vw,17rem)] min-[701px]:leading-[0.77]"
          id="photobaba-title"
        >
          Photobába
        </h1>
        <p className="mt-[5vh] self-end font-mono text-[10px] uppercase tracking-[0.06em]">
          Skroluj more ↓
        </p>
      </section>

      <section
        className="block px-[14px] pb-[120px] pt-20 min-[701px]:grid min-[701px]:grid-flow-row min-[701px]:grid-cols-12 min-[701px]:gap-x-[clamp(18px,2vw,36px)] min-[701px]:gap-y-[clamp(56px,6vw,96px)] min-[701px]:px-[clamp(24px,4vw,64px)] min-[701px]:py-[clamp(80px,10vw,160px)]"
        aria-label="Photobaba photographs"
      >
        {photographs.map((photograph, index) => (
          <figure
            className={`group mb-20 w-full min-w-0 min-[701px]:col-span-8 min-[701px]:mb-0 min-[701px]:w-[min(100%,72vh)] ${galleryLayouts[index % galleryLayouts.length]}`}
            key={photograph.file}
          >
            <div className="relative aspect-square overflow-hidden bg-[#f7f6f1]">
              <Image
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.012] motion-reduce:transition-none"
                src={`/photobaba/${photograph.file}`}
                alt={photograph.note}
                fill
                sizes="(max-width: 700px) 100vw, 72vh"
                priority={index < 2}
                unoptimized
              />
            </div>
            <figcaption className="mt-[9px] flex justify-between gap-5 border-t border-white pt-2 font-mono text-[9px] uppercase leading-[1.2] tracking-[0.07em]">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>{photograph.note}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      <footer className="grid min-h-[48svh] grid-cols-[1fr_auto] content-end gap-3 border-t border-white px-4 py-[18px] font-mono text-[10px] uppercase tracking-[0.07em] min-[701px]:min-h-[58svh] min-[701px]:grid-cols-3 min-[701px]:gap-0 min-[701px]:p-7">
        <p>Photobaba</p>
        <p className="hidden text-center min-[701px]:block">
          Prague / 2026
        </p>
        <p className="text-right">Konec</p>
      </footer>
    </main>
  )
}
