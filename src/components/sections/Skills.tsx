import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiVercel,
  SiNetlify,
  SiRender,
  SiDocker,
  SiGit,
  SiGithub,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiSocketdotio,
  SiFramer,
  SiZod,
  SiNpm,
  SiLinux,
  SiRedis,
  SiSupabase,
  SiPostman,
  SiApachemaven,
  SiReactrouter,
  SiJsonwebtokens,
  SiBruno,
} from "react-icons/si";
import { FaCertificate, FaJava, FaNodeJs } from "react-icons/fa";
import { TagButton } from "../TagButton";

const Skills = () => {
  const skills = [
    // Backend Core
    { title: "Java", icon: <FaJava /> },
    { title: "Spring Boot", icon: <SiSpringboot /> },
    { title: "Node.js", icon: <FaNodeJs /> },
    { title: "Express.js", icon: <SiExpress /> },

    // Frontend Frameworks
    { title: "JavaScript", icon: <SiJavascript /> },
    { title: "TypeScript", icon: <SiTypescript /> },
    { title: "React", icon: <SiReact /> },
    { title: "Next.js", icon: <SiNextdotjs /> },
    { title: "Redux", icon: <SiRedux /> },
    { title: "Zustand", icon: <FaCertificate /> },
    { title: "React Router", icon: <SiReactrouter /> },

    // Databases & APIs
    { title: "PostgreSQL", icon: <SiPostgresql /> },
    { title: "MongoDB", icon: <SiMongodb /> },
    { title: "Redis", icon: <SiRedis /> },
    { title: "Supabase", icon: <SiSupabase /> },
    { title: "WebSockets", icon: <SiSocketdotio /> },
    { title: "JWT", icon: <SiJsonwebtokens /> },
    { title: "Zod", icon: <SiZod /> },

    // DevOps & Tools
    { title: "Docker", icon: <SiDocker /> },
    { title: "Maven", icon: <SiApachemaven /> },
    { title: "Postman", icon: <SiPostman /> },
    { title: "Bruno", icon: <SiBruno /> },
    { title: "Git", icon: <SiGit /> },
    { title: "GitHub", icon: <SiGithub /> },
    { title: "Linux", icon: <SiLinux /> },
    { title: "npm", icon: <SiNpm /> },

    //  Styling & UI
    { title: "Tailwind CSS", icon: <SiTailwindcss /> },
    { title: "Motion", icon: <SiFramer /> },

    //  Hosting
    { title: "Vercel", icon: <SiVercel /> },
    { title: "Netlify", icon: <SiNetlify /> },
    { title: "Render", icon: <SiRender /> },
  ];

  return (
    <div className="w-full mt-15 md:mt-20 scroll-mt-30" id="skills">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center py-10">
        <h1 className="text-5xl font-bold text-center">
          Tools That Power My Projects
        </h1>

        <div className="max-w-4xl flex gap-2 flex-wrap justify-center mt-10">
          {skills.map(({ title, icon }) => (
            <TagButton key={title} title={title} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
