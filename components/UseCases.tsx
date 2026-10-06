import Image from "next/image";

const cases = [
  {
    label: "Street food & rolls",
    body: "Rolls, momos, sandwiches and other grab-and-go food that needs a wrap which won't turn soggy.",
  },
  {
    label: "Sauces, chutneys & mayo",
    body: "Single-serve sachets for condiments — an alternative to the small plastic packets restaurants hand out by the thousand.",
  },
  {
    label: "Bakery & desserts",
    body: "Pastries, chocolates and baked goods that need a moisture barrier without a plastic liner.",
  },
  {
    label: "Takeaway bags & liners",
    body: "Carry bags and box liners for hotels and cafés, as durable and flexible as the plastic they replace.",
  },
];

export default function UseCases() {
  return (
    <section id="uses" className="shore-edge bg-tide py-24 text-paper md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-pale/80">
              What it wraps
            </p>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight md:text-5xl">
              Built for the food Goa actually serves.
            </h2>
            <div className="mt-10 space-y-8 border-t border-paper/15 pt-8">
              {cases.map((c) => (
                <div key={c.label} className="flex gap-6">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-kelp" />
                  <div>
                    <h3 className="font-display text-lg font-medium">
                      {c.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/70">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] w-full overflow-hidden rounded-sm lg:h-full">
            <Image
              src="/wrap-box.jpg"
              alt="Compostable kraft-style takeaway box, the format KelpWrap materials are cut and packed for"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
