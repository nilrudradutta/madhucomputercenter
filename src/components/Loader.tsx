import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="grid h-14 w-14 place-items-center rounded-2xl gradient-bg text-white soft-shadow"
            >
              <Sparkles className="h-6 w-6" />
            </motion.div>
            <div className="font-display font-bold tracking-tight">
              Madhu <span className="gradient-text">Computer</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
