import { Sparkles, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { nav, services, contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-bg opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-4 py-16 text-white">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">Madhu Computer</span>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Your trusted digital service & training center in Janai, Hooghly.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-white/25">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-white/85 hover:text-white">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((g) => (
                <li key={g.group}><a href="#services" className="text-white/85 hover:text-white">{g.group}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />{contact.address}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" />{contact.phone}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" />{contact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs text-white/75 sm:flex-row">
          <p>© {new Date().getFullYear()} Madhu Computer Center. All rights reserved.</p>
          <p>Made with care in Janai, Hooghly · West Bengal</p>
        </div>
      </div>
    </footer>
  );
}
