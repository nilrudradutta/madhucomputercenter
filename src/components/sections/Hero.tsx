import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { useEffect } from "react";
import { Blobs, GridBackdrop } from "@/components/Blobs";
import { stats } from "@/data/site";
import { Counter } from "@/components/Counter";
import heroImg from "@/assets/hero-workstation.png";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 14 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mx.set(x); my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <GridBackdrop />
      <Blobs />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="glass mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
            <ShieldCheck className="h-4 w-4 text-[#06B6D4]" />
            <span>Janai, Hooghly · Trusted since day one</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Your trusted <span className="gradient-text">digital service</span> & computer training center
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/70 md:text-lg">
            Madhu Computer Center is your one-stop destination for Aadhaar, PAN, online form fill-ups,
            travel bookings, printing, and modern computer courses — all delivered with care, speed, and a smile.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="group inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white soft-shadow transition hover:scale-[1.03]">
              Explore Services
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Contact Us
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-3">
                <div className="font-display text-2xl font-bold gradient-text">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-8 -z-10 rounded-[3rem] gradient-bg opacity-20 blur-3xl" />
          <div className="glass relative rounded-[2.5rem] p-4 soft-shadow">
            <img src={heroImg} alt="Computer workstation with floating digital services" className="w-full" width={1024} height={1024} />
          </div>

          <motion.div className="glass absolute -left-6 top-10 hidden items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold sm:flex"
                      animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9 rating
          </motion.div>
          <motion.div className="glass absolute -right-4 bottom-12 hidden rounded-2xl px-3 py-2 text-xs font-semibold sm:block"
                      animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}>
            ⚡ Same-day service
          </motion.div>
          <motion.div className="glass absolute -bottom-6 left-10 hidden rounded-2xl px-3 py-2 text-xs font-semibold sm:block"
                      animate={{ y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}>
            🛡️ Govt. authorised work
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}