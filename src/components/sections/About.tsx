import { motion } from "motion/react";
import { BackgroundGradient } from "../ui/BackgroundGradient";

const About = () => {
  return (
    <section
      className="w-full py-16 px-4 md:px-6 lg:px-8 mt-10 md:mt-20 scroll-mt-20"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <BackgroundGradient className="rounded-[22px] sm:p-10 bg-background dark:bg-zinc-900">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="rounded-2xl backdrop-blur-md space-y-6 select-none p-5"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              About Me
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Hey, I’m Gopi — a self-taught full stack developer based in
              Bengaluru.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I didn’t come from a traditional tech background, but curiosity
              (and probably too much time on the internet) pulled me into the
              world of code. I’ve been figuring things out on my own ever since
              — one bug, one build at a time.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I mainly work with{" "}
              <span className="font-semibold text-foreground">Spring Boot</span>{" "}
              on the backend and{" "}
              <span className="font-semibold text-foreground">React</span> on
              the frontend. I recently built a chat app from scratch — not
              because I needed one, but because I wanted to see if I could.
              Lately, I’ve been diving deeper into backend work and looking to
              get into app development too.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I’m more of an introvert — the kind of person who enjoys working
              solo and slipping into a flow state while building. When I’m in
              the zone, hours go by without me even noticing. I’ve mostly worked
              alone so far — partly because I enjoy it, and partly because I
              haven’t yet had the chance to work in a team. But I’m always open
              to learning what that’s like.
            </p>
          </motion.div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default About;
