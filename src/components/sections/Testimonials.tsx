import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const t = testimonials[i];

  const next = () => setI((p) => (p + 1) % n);
  const prev = () => setI((p) => (p - 1 + n) % n);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">Loved by our community</div>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
            Real reviews, <span className="gradient-text">real people</span>
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] gradient-bg opacity-10 blur-2xl" />
          <div className="glass relative rounded-[2rem] p-8 md:p-12 soft-shadow">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-foreground/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="mt-4 font-display text-xl leading-snug md:text-2xl">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full gradient-bg font-bold text-white">
                    {t.name.split(" ").map((w) => w[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-foreground/60">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Go to testimonial ${k + 1}`}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-8 gradient-bg" : "w-2 bg-foreground/20"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} aria-label="Previous" className="glass rounded-full p-2 transition hover:scale-110">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={next} aria-label="Next" className="glass rounded-full p-2 transition hover:scale-110">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
