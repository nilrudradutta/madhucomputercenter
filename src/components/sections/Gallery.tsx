import { motion } from "motion/react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const items = [
  { src: g1, label: "Computer Lab", span: "row-span-2" },
  { src: g5, label: "Students Learning", span: "" },
  { src: g3, label: "Service Desk", span: "" },
  { src: g4, label: "Documentation Work", span: "row-span-2" },
  { src: g2, label: "Training Sessions", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">Gallery</div>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
            Inside <span className="gradient-text">Madhu Computer Center</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <figcaption className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-xs font-semibold text-foreground">
                {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
