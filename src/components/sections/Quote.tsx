import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";

export function Quote() {
  return (
    <div className="w-full mt-15 md:mt-20">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-7xl max-w-[1440px] mx-auto"
        >
          Hope is a good thing, maybe the best of things, and no good thing ever
          dies
        </motion.h1>
      </LampContainer>
    </div>
  );
}
