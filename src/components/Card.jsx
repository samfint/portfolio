import GithubIcon from "../icons/GithubIcon";

export default function Card({ title, description, technologies, repoUrl }) {
  return (
    <div className="relative group rounded-lg border border-white/10 p-6 hover:border-white/30 transition-colors duration-300 overflow-hidden">
      {/* Top border animation */}
      <div className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>

      {/* Right border animation */}
      <div className="absolute top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-400 to-transparent h-0 group-hover:h-full transition-all duration-700 ease-out delay-150"></div>

      {/* Bottom border animation */}
      <div className="absolute bottom-0 right-0 h-[1px] bg-gradient-to-l from-transparent via-emerald-400 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out delay-300"></div>

      {/* Left border animation */}
      <div className="absolute bottom-0 left-0 w-[1px] bg-gradient-to-t from-transparent via-emerald-400 to-transparent h-0 group-hover:h-full transition-all duration-700 ease-out delay-450"></div>

      {/* Card content container */}
      <div className="space-y-4">
        {/* Title */}
        <div className="flex items-center justify-between">
          <a href="" className="text-lg font-semibold">
            {title}
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <GithubIcon />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-3">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full text-sm"
            >
              {tech.icon}
              <span className="text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/5 to-transparent"></div>
    </div>
  );
}
