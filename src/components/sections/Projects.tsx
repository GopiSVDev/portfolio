import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "../ProjectCard";
import { Button } from "../ui/button";

const Projects = () => {
  const projects = [
    {
      title: "TalkSync",
      description:
        "TalkSync is a full-stack real-time chat application with a React/TypeScript frontend and a Spring Boot/WebSocket backend, featuring JWT authentication and PostgreSQL integration.",
      image: "/TalkSync.png",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Vite",
        "Zustand",
        "Spring Boot",
        "Java 21",
        "WebSocket (STOMP)",
        "Spring Security",
        "JWT",
        "PostgreSQL",
      ],
      link: "https://talksync-ten.vercel.app/",
    },
    {
      title: "Url Shortener",
      description:
        "A full-stack URL shortening service with a responsive React frontend and a secure Java Spring Boot backend, enabling custom short links, analytics, and efficient link management.",
      image: "/URL.png",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Hook Form",
        "Zod",
        "React Router",
        "Recharts",
        "Spring Boot",
        "Java 21",
        "Spring Security",
        "JWT",
        "Spring Data JPA",
        "PostgreSQL",
        "ZXing",
      ],
      link: "https://url-shortener-frontend-lilac.vercel.app/",
    },
    {
      title: "Shop Co",
      description:
        "Shop.co is a sleek and responsive frontend UI for an e-commerce platform, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. It demonstrates a modern shopping experience with animated interactions and mobile-first design — ideal for integration with any backend or headless CMS.",
      image: "/Shop.png",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Zustand",
        "Embla Carousel",
        "Lucide React",
        "Motion",
        "Lodash.debounce",
      ],
      link: "https://shop-co-six-phi.vercel.app/",
    },
    {
      title: "Scalable Ecommerce Backend",
      description:
        "This project is a scalable e-commerce backend designed for handling products, users, carts, and orders. It uses modern tools and techniques such as service discovery (Eureka Server), API Gateway, and JWT authentication to manage and route requests efficiently. This backend is built using Spring Boot and follows a microservices architecture.",
      image: "/Ecommerce.png",
      tags: [
        "Java",
        "Spring Boot",
        "Spring Cloud Gateway",
        "Spring Security",
        "PostgreSQL",
        "Docker",
        "Docker Compose",
        "OpenFeign",
        "Eureka Discovery Server",
        "Config Server",
        "Lombok",
      ],
      link: "https://github.com/GopiSVDev/scalable_ecommerce",
    },
    {
      title: "Naruto Themed Memory Card Game",
      description:
        "A Naruto-themed memory game built with React, where players must click a different character card each time to increase their score. After every click, the cards reshuffle—clicking the same card twice resets the score.",
      image: "/Naruto.png",
      tags: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Lodash",
        "React Parallax Tilt",
        "ESLint",
        "TypeScript (types only)",
      ],
      link: "https://naruto-memory.vercel.app/",
    },
    {
      title: "IndiaFreeNotes Scraper",
      description:
        "India Notes Scrapper is a Node.js tool that uses Puppeteer to scrape educational content from Indian academic websites and exports the extracted links or data into plain .txt files for easy offline access and reference.",
      image: "/Scrapper.png",
      tags: [
        "Node.js",
        "Express",
        "Puppeteer",
        "CORS",
        "CSV Parser",
        "json2csv",
        "docxtemplater",
        "PizZip",
        "fs (File System)",
      ],
      link: "https://github.com/GopiSVDev/india_notes_scrapper",
    },
  ];

  return (
    <div className="w-full my-15 md:mt-20 scroll-mt-20" id="projects">
      <div className="max-w-[1440px] mx-auto px-5">
        <h1 className="text-center text-5xl font-bold">MY PROJECTS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map(({ title, description, image, tags, link }) => (
            <ProjectCard
              key={title}
              title={title}
              description={description}
              image={image}
              tags={tags}
              link={link}
            />
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-base justify-start text-foreground"
          >
            <a
              href="https://github.com/GopiSVDev?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <span className="h-4 w-4 text-blue-500"></span>
              View All Repos
            </a>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
