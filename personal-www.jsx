import { useState } from "react";

// Minimalistyczna, elegancka strona jednej osoby — ciemne tło, białe teksty i efekty
// Tailwind CSS jest dostępny w tym środowisku.
// Zmień placeholdery (imię, opis, linki) pod siebie.

export default function PersonalPage() {
  const [spot, setSpot] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y });
  };

  const links = [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Kalendarz / Spotkanie", href: "#" },
    { label: "Dribbble / Behance", href: "#" },
    { label: "X (Twitter)", href: "#" },
  ];

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#0A0A0C] text-white selection:bg-white selection:text-black"
    >
      {/* Subtelna siatka w tle + spotlight podążający za kursorem */}
      <BackgroundGrid />
      <Spotlight x={spot.x} y={spot.y} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 md:py-16">
        {/* Górny pasek nawigacji */}
        <header className="flex items-center justify-between">
          <div className="text-sm uppercase tracking-widest text-white/70">portfolio</div>
          <nav className="hidden gap-6 md:flex">
            {[
              { label: "O mnie", href: "#about" },
              { label: "Projekty", href: "#work" },
              { label: "Kontakt", href: "#contact" },
            ].map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {i.label}
              </a>
            ))}
          </nav>
        </header>

        {/* Sekcja hero */}
        <section className="mt-16 grid items-center gap-10 md:mt-24 md:grid-cols-2">
          {/* Tekst */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Dostępny do współpracy
            </div>

            <h1 className="text-4xl font-light leading-tight md:text-6xl">
              Jan Kowalski
              <span className="block text-white/60">Strateg • Designer • AI</span>
            </h1>

            <p className="max-w-[55ch] text-base leading-relaxed text-white/75 md:text-lg">
              Pomagam markom upraszczać złożone idee do czytelnych, skutecznych produktów i
              komunikacji. Łączę projektowanie, automatyzacje AI i myślenie systemowe.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Skontaktuj się
                <ArrowIcon className="transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-white/40"
              >
                Pobierz CV
              </a>
            </div>
          </div>

          {/* Miejsce na zdjęcie */}
          <div className="mx-auto w-full max-w-sm md:max-w-md">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_60px_0_rgba(255,255,255,0.04)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center text-center">
                <span className="rounded-full border border-dashed border-white/30 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Twoje zdjęcie 1000×1000
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" />
            </div>
            <p className="mt-3 text-center text-xs text-white/50">
              Wstaw <code>img</code> w powyższy kontener (100% / cover).
            </p>
          </div>
        </section>

        {/* Sekcja opisu */}
        <section id="about" className="mt-20 md:mt-28">
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">O mnie</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-sm uppercase tracking-wider text-white/70">Specjalizacje</h3>
              <ul className="mt-3 space-y-1 text-white/80">
                <li>Architektura informacji</li>
                <li>Systemy designu</li>
                <li>Automatyzacje AI (no‑code / code)</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-sm uppercase tracking-wider text-white/70">Wartość</h3>
              <p className="mt-3 text-white/80">
                Dostarczam klarowne struktury, które skracają czas wdrożeń i
                podnoszą spójność doświadczeń klientów.
              </p>
            </Card>
            <Card>
              <h3 className="text-sm uppercase tracking-wider text-white/70">Preferencje</h3>
              <p className="mt-3 text-white/80">
                Ciemne, subtelne UI, dużo oddechu, silne typograficznie nagłówki,
                proste animacje oparte o biel.
              </p>
            </Card>
          </div>
        </section>

        {/* Propozycje efektów – białe, subtelne */}
        <section className="mt-20 md:mt-28">
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">
            Sugerowane efekty (subtelne, eleganckie)
          </h2>
          <ul className="grid gap-3 text-white/80 md:grid-cols-2">
            <li className="rounded-xl border border-white/10 p-4">
              • Spotlight (światło) podążające za kursorem — już włączone na stronie.
            </li>
            <li className="rounded-xl border border-white/10 p-4">
              • Delikatna siatka i ringi (white glow) wokół kart i przycisków.
            </li>
            <li className="rounded-xl border border-white/10 p-4">
              • Podkreślenia linków na hover: animowana kreska i lekkie przesunięcie strzałki.
            </li>
            <li className="rounded-xl border border-white/10 p-4">
              • Scroll reveal: fade-up sekcji (opcjonalnie poprzez IntersectionObserver).
            </li>
          </ul>
        </section>

        {/* Dodatkowe linki */}
        <section className="mt-20 md:mt-28">
          <h2 className="mb-6 text-xl font-semibold tracking-tight md:text-2xl">Dodatkowe linki</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative rounded-2xl border border-white/10 p-5 transition hover:border-white/25 hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)]"
              >
                <span className="text-sm text-white/90">{l.label}</span>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                  <ArrowIcon />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </a>
            ))}
          </div>
        </section>

        {/* Sekcja kontaktowa */}
        <section id="contact" className="mt-24 md:mt-32">
          <div className="rounded-2xl border border-white/10 p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Kontakt</h2>
            <p className="mt-3 max-w-[60ch] text-white/75">
              Szukasz współpracy lub chcesz omówić projekt? Napisz: <a
                href="mailto:hello@example.com"
                className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >hello@example.com</a>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Umów rozmowę
                <ArrowIcon className="transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/90 transition hover:border-white/40"
              >
                Pobierz media kit
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-white/10 py-6 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Jan Kowalski</span>
          <a href="#" className="underline decoration-white/20 hover:decoration-white">Polityka prywatności</a>
        </footer>
      </div>
    </main>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 transition hover:border-white/25 hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)]">
      <div className="relative">
        {children}
        <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BackgroundGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Siatka w 2 kierunkach */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px, 48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 100%)",
        }}
      />
      {/* Miękki vignette przy brzegach */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.45))]" />
    </div>
  );
}

function Spotlight({ x, y }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 transition-opacity"
      style={{
        background:
          `radial-gradient(200px circle at ${x}% ${y}%, rgba(255,255,255,0.08), transparent 60%)`,
      }}
    />
  );
}
