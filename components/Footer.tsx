export default function Footer() {
  return (
    <footer id="contact" className="bg-ink py-20 text-paper">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col justify-between gap-12 border-b border-paper/15 pb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-kelp-pale/80">
              Get in touch
            </p>
            <h2 className="max-w-lg text-balance font-display text-4xl font-medium leading-tight md:text-5xl">
              Ready to try packaging that comes from the sea?
            </h2>
          </div>
          <a
            href="mailto:hello@kelpwrap.in"
            className="inline-flex shrink-0 items-center rounded-full bg-kelp px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-kelp-pale"
          >
            Request a trial pack
          </a>
        </div>

        <div className="flex flex-col gap-6 pt-10 text-sm text-paper/60 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg text-paper">KelpWrap</p>
            <p className="mt-1">
              Presented by Nathen Coelho &amp; Shubham — &ldquo;Seaweed, not
              plastic.&rdquo;
            </p>
          </div>
          <p>© {new Date().getFullYear()} KelpWrap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
