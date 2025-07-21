import { motion } from "motion/react";
import { TagButton } from "../TagButton";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const icons = [
    {
      title: "Github",
      icon: <FaGithub />,
      link: "https://github.com/GopiSVDev",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/gopisv/",
    },
    {
      title: "Email",
      icon: <FaEnvelope />,
      link: "mailto:gopisvdev@gmail.com",
    },
    {
      title: "Resume",
      icon: <FaFileAlt />,
      link: "/resume.pdf",
    },
  ];

  return (
    <div className="w-full mt-15 md:mt-30 scroll-mt-30" id="home">
      <div className="flex flex-col items-start max-w-[1440px] mx-auto w-full space-y-8 md:space-y-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="relative"
        >
          <p className="relative text-blue-500 text-xl font-medium font-mono">
            🙌 Hello there, I'm —
          </p>
          <h1 className="relative text-foreground font-bold leading-tight tracking-tight mt-2 text-7xl md:text-[calc(5rem+(1vw-7.68px)*5.555)]">
            Gopi. S
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <h2 className="text-muted-foreground text-2xl md:text-3xl font-medium leading-snug">
            <span className="text-foreground">
              <ContainerTextFlip /> Developer.{" "}
            </span>
            A self-taught developer with a special interest in Softwares.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <div className="text-muted-foreground text-lg">
            🚀 Always learning, fueled by curiosity, and passionate about
            building things from scratch.
            <br />
            <div className="flex items-center gap-1 mt-1">
              <span>
                💼 Currently looking for opportunities —{" "}
                <a
                  href="mailto:gopisvdev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  let’s connect
                </a>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex gap-4 mt-2 flex-wrap"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          {icons.map(({ title, icon, link }) => (
            <TagButton
              key={title}
              title={title}
              icon={icon}
              link={link}
              animate={true}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
