const sdgs = [
  { n: "12", label: "Responsible Consumption and Production" },
  { n: "14", label: "Life Below Water" },
  { n: "9", label: "Industry, Innovation and Infrastructure" },
  { n: "13", label: "Climate Action" },
  { n: "8", label: "Decent Work and Economic Growth" },
];

export default function Impact() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-deep">
              Vision
            </p>
            <blockquote className="text-balance font-display text-3xl font-medium italic leading-snug text-ink md:text-4xl">
              &ldquo;The future of food packaging should not pollute the
              ocean — it should come from it.&rdquo;
            </blockquote>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-ink/60">
              KelpWrap aims to become a recognized supplier of marine-based
              compostable packaging across Goa and India&apos;s coastal
              hospitality sector within five years.
            </p>
          </div>

          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-kelp-deep">
              SDG alignment
            </p>
            <ul className="space-y-0 border-t border-ink/10">
              {sdgs.map((s) => (
                <li
                  key={s.n}
                  className="flex items-center gap-6 border-b border-ink/10 py-4"
                >
                  <span className="font-display text-2xl font-medium text-kelp-deep">
                    {s.n}
                  </span>
                  <span className="text-sm text-ink/70">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
