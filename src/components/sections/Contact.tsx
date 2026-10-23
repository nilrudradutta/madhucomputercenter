import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { contact } from "@/data/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium">Get in touch</div>
          <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
            Let's get your <span className="gradient-text">work done today</span>
          </h2>
          <p className="mt-4 text-foreground/70">Walk in, call, or drop us a message — we'll reply quickly.</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            {[
              { icon: MapPin, label: "Address", value: contact.address },
              { icon: Phone, label: "Phone", value: contact.phone },
              { icon: Mail, label: "Email", value: contact.email },
              { icon: Clock, label: "Working Hours", value: contact.hours },
            ].map((c) => (
              <div key={c.label} className="glass flex items-start gap-4 rounded-2xl p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-bg text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-foreground/55">{c.label}</div>
                  <div className="mt-1 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="glass overflow-hidden rounded-2xl">
              <iframe
                title="Map of Janai, Hooghly"
                src="https://maps.google.com/maps?q=Janai%20Hooghly%20West%20Bengal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass rounded-3xl p-8 soft-shadow"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name"><input required className="mcc-field" placeholder="Riya Das" /></Field>
              <Field label="Phone"><input required className="mcc-field" placeholder="+91 9xxxx xxxxx" /></Field>
            </div>
            <Field label="Email" className="mt-4"><input type="email" className="mcc-field" placeholder="you@example.com" /></Field>
            <Field label="What do you need help with?" className="mt-4">
              <select className="mcc-field" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Aadhaar / PAN / Voter card</option>
                <option>Online form fill-up</option>
                <option>Train / Air ticket booking</option>
                <option>Printing & documentation</option>
                <option>Computer course enquiry</option>
                <option>Something else</option>
              </select>
            </Field>
            <Field label="Message" className="mt-4">
              <textarea rows={4} className="mcc-field" placeholder="Tell us a bit about what you need..." />
            </Field>
            <button type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-3 font-semibold text-white soft-shadow transition hover:scale-[1.02]">
              {sent ? "Thanks — we'll get back to you!" : (<><Send className="h-4 w-4" /> Send message</>)}
            </button>
          </motion.form>
        </div>
      </div>
      <style>{`
        .mcc-field {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid color-mix(in oklab, currentColor 12%, transparent);
          background: color-mix(in oklab, white 70%, transparent);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .mcc-field:focus {
          border-color: #06B6D4;
          box-shadow: 0 0 0 4px color-mix(in oklab, #06B6D4 20%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium text-foreground/70">{label}</span>
      {children}
    </label>
  );
}
