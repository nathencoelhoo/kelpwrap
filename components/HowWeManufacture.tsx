const steps = [
  {
    n: "1",
    title: "Seaweed sourcing",
    body: "Collected from the local coastline and contracted seaweed harvesters, then washed and sun-dried.",
  },
  {
    n: "2",
    title: "Processing",
    body: "Dried seaweed is ground into a gel and mixed with plant starch and food-grade oil.",
  },
  {
    n: "3",
    title: "Sheet forming",
    body: "The gel is cast into thin sheets using rollers and mould trays, then air-dried.",
  },
  {
    n: "4",
    title: "Cutting & packaging",
    body: "Sheets are cut into wraps and liners, then packed for vendors.",
  },
];

export default function HowWeManufacture() {
  return (
    <section className="bg-kelp-pale py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-deep">
            How it&apos;s made
          </p>
          <h2 className="text-balance font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            From coastline to counter, in four steps.
          </h2>
        </div>

        <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((s) => (
            <li key={s.n} className="relative pl-0">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-medium text-kelp-deep">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-ink/15" />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
