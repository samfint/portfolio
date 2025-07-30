import { useRef, useState } from "react";
import GithubIcon from "../icons/GithubIcon";

export default function Card({ title, description, technologies, repoUrl }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative group rounded-xl border border-white/10 p-5 hover:border-white/30 transition-colors duration-300 overflow-hidden backdrop-blur-lg bg-white/5 shadow-lg hover:shadow-2xl"
    >
      {/* Animated border highlight that follows the mouse */}
      <div
        className="pointer-events-none absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          top: mousePos.y,
          left: mousePos.x,
        }}
      ></div>

      {/* Card content */}
      <div className="space-y-4 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <a href="" className="text-xl font-bold text-white">
            {title}
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 cursor-pointer">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform"
            >
              {tech.icon}
              <span className="text-gray-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover background effect */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/10 to-transparent" />
    </div>
  );
}
