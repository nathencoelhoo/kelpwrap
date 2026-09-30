import Image from "next/image";

const customers = [
  "Eco resorts & villas",
  "Premium beach cafés",
  "Restaurants & hotels",
  "Event organizers",
];

const locations = ["Anjuna", "Vagator", "Morjim", "Benaulim"];

export default function TargetMarket() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1756907926533-4acaaf9e3e27?auto=format&fit=crop&w=2000&q=70"
          alt="Turquoise coastline typical of Goa's tourist beaches"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-pale/80">
              Target market
            </p>
            <h2 className="text-balance font-display text-4xl font-medium leading-tight md:text-5xl">
              A B2B model, starting where the plastic problem is worst.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper/70">
              KelpWrap sells directly to hospitality businesses, offering
              trial packs so kitchens can test durability before switching.
              Positioned as a premium, marine-based packaging solution for
              coastal sustainability.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-paper/25 px-4 py-1.5 text-sm text-paper/85"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-sm border border-paper/15 bg-paper/5 p-7">
              <h3 className="font-display text-lg font-medium">
                Primary customers
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
                {customers.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kelp" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-paper/15 bg-paper/5 p-7">
              <h3 className="font-display text-lg font-medium">
                Working capital cycle
              </h3>
              <p className="mt-4 font-display text-4xl font-medium text-kelp">
                15 days
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">
                Raw material to cash — compared to 40–70 days for
                plastic-based supply chains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
