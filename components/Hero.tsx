import Image from "next/image";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <Nav />

      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1745909835285-60fbf48fcf26?auto=format&fit=crop&w=2400&q=80"
          alt="Sunlight filtering through an underwater kelp forest"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-tide/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-content flex-col justify-end gap-16 px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <div className="max-w-2xl">
          <p className="animate-rise mb-6 text-sm font-medium uppercase tracking-[0.2em] text-kelp-pale/80">
            Ocean Grown Packaging · Goa
          </p>
          <h1
            className="animate-rise text-balance font-display text-5xl font-medium leading-[1.05] text-paper md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Packaging that comes from nature, and returns safely to it.
          </h1>
          <p
            className="animate-rise mt-7 max-w-lg text-lg leading-relaxed text-sand/90"
            style={{ animationDelay: "0.25s" }}
          >
            KelpWrap turns Goa&apos;s own coastline into home-compostable food
            packaging — seaweed blended with plant starches, built for cafés,
            resorts and hotels ready to leave plastic behind.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#calculator"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
            >
              Calculate your plastic footprint
            </a>
            <a
              href="#products"
              className="rounded-full border border-sand/40 px-7 py-3.5 text-sm font-medium text-sand transition-colors hover:border-sand hover:bg-sand/10"
            >
              See the product range
            </a>
          </div>
        </div>
      </div>

      {/* Signature mark — the one bold, memorable element, echoing KelpWrap's own circular wordmark */}
      <div
        className="animate-scale-in absolute -right-10 bottom-0 hidden h-56 w-56 translate-y-1/3 items-center justify-center rounded-full border border-kelp bg-kelp/90 text-ink shadow-2xl md:flex lg:h-64 lg:w-64"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="text-center leading-none">
          <p className="font-display text-3xl font-bold italic tracking-tight lg:text-4xl">
            Kelp
          </p>
          <p className="font-display text-3xl font-bold italic tracking-tight lg:text-4xl">
            Wrap
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em]">
            Seaweed, not plastic
          </p>
        </div>
      </div>
    </section>
  );
}
