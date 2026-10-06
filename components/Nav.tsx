import Image from "next/image";
export default function Nav() {
  const links = [
    { href: "#why", label: "Why Seaweed" },
    { href: "#uses", label: "Use Cases" },
    { href: "#products", label: "Products" },
    { href: "#calculator", label: "Footprint Calculator" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative h-9 w-9 shrink-0">
  <Image src="/logo.png" alt="KelpWrap" fill className="object-contain" />
</span>
          <span className="font-display text-lg font-semibold text-sand">
            KelpWrap
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-sand/80 transition-colors hover:text-sand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-kelp px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-kelp-pale"
        >
          Get a Trial Pack
        </a>
      </nav>
    </header>
  );
}
