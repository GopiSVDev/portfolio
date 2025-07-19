type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  link,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col lg:w-full">
      <a
        className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#f2f2f20c] p-1.5 shadow-2xl backdrop-blur-lg transition-all hover:shadow-2xl"
        href={link}
        target="_blank"
      >
        {/* Top shine line */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 5%, rgba(255,255,255,0.8) 35%, #fff 50%, rgba(255,255,255,0.8) 65%, rgba(0,0,0,0) 95%)",
          }}
        />

        <div className="relative flex flex-col items-center justify-between rounded-xl overflow-hidden transition-all duration-300">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(188.62deg, #1e3a8a 49.9%, #3b82f6 81.7%, #60a5fa 93.88%, #93c5fd 113.5%)",
            }}
          />

          <div
            className="absolute inset-x-0 top-px z-10 h-px opacity-70"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0) 20%, #fff 50%, rgba(0,0,0,0) 80%)",
            }}
          />

          <div className="w-full aspect-[1.955] max-w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover border border-white/20 transition-all duration-300 scale-[1.02] group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </a>

      {/* Text content */}
      <div className="mt-6 mb-12 flex flex-col px-2">
        <div className="flex items-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="ml-3 h-1 min-w-6 rounded-full bg-blue-500" />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        {/* Tags */}
        <div className="my-4 flex flex-wrap items-center gap-1">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="inline rounded-sm border border-white/[0.34] px-1.5 py-[3px] text-xs text-blue-600 dark:text-blue-400 bg-blue-600/20 lg:bg-white/10 dark:lg:bg-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
