const products = [
  {
    index: "01",
    name: "Compostable Food Wraps",
    body: "Looks and performs like plastic film, but decomposes naturally within weeks. Unlike paper, it stays durable and moisture-resistant with oily food.",
  },
  {
    index: "02",
    name: "Sauce & Chutney Sachets",
    body: "Single-serve pouches for sauces, chutneys and mayo — inspired by the same seaweed-membrane concept pioneered abroad, localised for Goan kitchens.",
  },
  {
    index: "03",
    name: "Plastic-Free Liners",
    body: "Bags and box liners that look like plastic but are more durable and flexible than both plastic and paper, and fully home-compostable.",
  },
];

export default function ProductRange() {
  return (
    <section id="products" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-deep">
            The range
          </p>
          <h2 className="text-balance font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            Three products. One material.
          </h2>
        </div>

        <div className="grid gap-0 border-t border-ink/10 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.index}
              className="border-b border-ink/10 py-10 pr-8 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-display text-sm text-kelp-deep">
                {p.index}
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink">
                {p.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
