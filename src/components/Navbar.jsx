import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  EmailIcon,
} from "../icons/SocialIcon";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto py-4 lg:px-80 md:px-10">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-xl flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
          >
            <span>dani.dev</span>
          </a>
          <div className="flex">
            <a
              href=""
              className="relative group p-2 rounded-md transition-colors duration-150"
            >
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"></span>
              <span className="relative z-10">
                <GithubIcon />
              </span>
            </a>
            <a
              href=""
              className="relative group p-2 rounded-md transition-colors duration-150"
            >
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"></span>
              <span className="relative z-10">
                <LinkedinIcon />
              </span>
            </a>
            <a
              href=""
              className="relative group p-2 rounded-md transition-colors duration-150"
            >
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"></span>
              <span className="relative z-10">
                <XIcon />
              </span>
            </a>
            <a
              href=""
              className="relative group p-2 rounded-md transition-colors duration-150"
            >
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"></span>
              <span className="relative z-10">
                <EmailIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
