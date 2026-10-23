import { motion } from "motion/react";
import { Clock, ArrowUpRight, Check } from "lucide-react";
import { courses } from "@/data/site";

export function Courses() {
  return (
    <section id="courses" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">Computer courses</div>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
            Learn the skills that <span className="gradient-text">open real doors</span>
          </h2>
          <p className="mt-4 text-foreground/70">Practical, hands-on courses for students, jobseekers and small business owners.</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group glass relative flex flex-col rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium text-foreground/70">
                  {c.level}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-foreground/60">
                  <Clock className="h-3.5 w-3.5" /> {c.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{c.title}</h3>
              <ul className="mt-4 space-y-2">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/75">
                    <Check className="mt-0.5 h-4 w-4 text-[#06B6D4]" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs text-foreground/60">
                  <span>Popularity</span><span>{c.progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${c.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full gradient-bg"
                  />
                </div>
              </div>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold gradient-text">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
