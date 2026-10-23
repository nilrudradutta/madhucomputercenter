import { motion } from "motion/react";
import { Target, Eye, HeartHandshake, MapPin } from "lucide-react";

const pillars = [
  { icon: Target, title: "Our Mission", desc: "Make digital services and computer education simple, accessible and friendly for every family in our community." },
  { icon: Eye, title: "Our Vision", desc: "Be West Bengal's most trusted neighborhood computer center — bridging people and technology with care." },
  { icon: HeartHandshake, title: "Customer First", desc: "We listen, explain in plain language, and stay until your work is fully done." },
  { icon: MapPin, title: "Proudly Local", desc: "Rooted in Janai, Hooghly — we know our customers by name." },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">About us</div>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              A neighborhood center built on <span className="gradient-text">trust & technology</span>
            </h2>
            <p className="mt-5 text-foreground/70 md:text-lg">
              For years, Madhu Computer Center has been helping students, professionals and families navigate
              an increasingly digital world. From the first PAN card application to advanced MS Office training,
              we treat every customer like family — patient explanations, fair prices, and finished work you can rely on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="glass rounded-2xl px-4 py-3"><span className="font-bold gradient-text">15+</span><span className="ml-2 text-sm">Service categories</span></div>
              <div className="glass rounded-2xl px-4 py-3"><span className="font-bold gradient-text">6</span><span className="ml-2 text-sm">Computer courses</span></div>
              <div className="glass rounded-2xl px-4 py-3"><span className="font-bold gradient-text">1500+</span><span className="ml-2 text-sm">Hours of training delivered</span></div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-bg text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
