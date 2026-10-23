import { motion } from "motion/react";
import { whyUs, stats } from "@/data/site";
import { Counter } from "@/components/Counter";

export function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">Why choose us</div>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
            Built for the way <span className="gradient-text">our community works</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-3xl p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{w.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 glass grid grid-cols-2 gap-6 rounded-3xl p-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-extrabold gradient-text md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-foreground/65">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
