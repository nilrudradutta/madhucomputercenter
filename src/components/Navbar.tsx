import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { nav } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-shadow ${scrolled ? "soft-shadow" : ""}`}>
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Madhu <span className="gradient-text">Computer</span>
            </span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden md:inline-flex items-center rounded-full gradient-bg px-4 py-2 text-sm font-semibold text-white soft-shadow transition hover:scale-[1.03]">
              Get in touch
            </a>
            <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="md:hidden rounded-xl border border-foreground/10 p-2">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden">
            <ul className="flex flex-col">
              {nav.map((n) => (
                <li key={n.href}>
                  <a onClick={() => setOpen(false)} href={n.href} className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-foreground/5">
                    {n.label}
                  </a>
                </li>
              ))}
              <a onClick={() => setOpen(false)} href="#contact" className="mt-2 inline-flex justify-center rounded-xl gradient-bg px-4 py-3 text-sm font-semibold text-white">
                Get in touch
              </a>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}