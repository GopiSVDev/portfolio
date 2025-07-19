import { FaLinkedin, FaEnvelope, FaFileAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { TagButton } from "../TagButton";

const ContactMe = () => {
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
      link: "",
    },
  ];

  return (
    <div className="w-full my-15 md:my-20 scroll-mt-20" id="contact">
      <section className="max-w-[1440px] text-center px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-500">
            Get In Touch.
          </h2>

          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            I specialize in building{" "}
            <span className="text-blue-500 font-medium">
              Full Stack Development
            </span>
            <br />
            experiences from front to back. Let’s connect and talk about how I
            can help with your project..
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
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
      </section>
    </div>
  );
};

export default ContactMe;
