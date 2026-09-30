const benefits = [
  {
    title: "Home compostable",
    body: "Breaks down naturally within weeks in a home compost bin — no industrial facility required.",
  },
  {
    title: "Moisture and oil resistant",
    body: "Holds up to oily, wet food the way paper can't, without turning soggy or tearing.",
  },
  {
    title: "Grown, not manufactured",
    body: "Seaweed is one of the fastest-growing organisms on earth and absorbs more CO₂ than most land plants.",
  },
  {
    title: "Locally sourced",
    body: "Harvested along Goa's own 100km coastline, blended with plant starches and food-safe oils.",
  },
];

export default function WhySeaweed() {
  return (
    <section id="why" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-deep">
              Why seaweed
            </p>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
              A 100km coastline, doing more than sitting there.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Plastic dominates Goa&apos;s hospitality industry not because
              it&apos;s efficient, but because its true cost is hidden. Seaweed
              is the raw material sitting right offshore, still almost
              entirely unused.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="bg-paper p-8">
                <h3 className="font-display text-xl font-medium text-kelp-deep">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
