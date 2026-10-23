import { motion } from "motion/react";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">What we offer</div>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
            Every digital service, <span className="gradient-text">under one roof</span>
          </h2>
          <p className="mt-4 text-foreground/70">From government documents to printing, training and travel bookings — handled end-to-end.</p>
        </div>

        <div className="mt-14 space-y-14">
          {services.map((group) => (
            <div key={group.group}>
              <h3 className="mb-6 font-display text-xl font-bold text-foreground/80">{group.group}</h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
                    style={{ transformPerspective: 800 }}
                    className="group glass relative overflow-hidden rounded-3xl p-6 transition"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                         style={{ background: "radial-gradient(circle, #8B5CF6, transparent 60%)" }} />
                    <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-bg text-white transition group-hover:scale-110">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 font-display text-base font-bold">{s.title}</h4>
                    <p className="mt-2 text-sm text-foreground/65">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
