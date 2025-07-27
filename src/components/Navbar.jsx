import GithubIcon from "../icons/GithubIcon.jsx";

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 py-4">
      <nav className="sticky top-0 z-50 flex justify-between items-center">
        <a
          href="#"
          className="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
        >
          <span>dani.dev</span>
        </a>
        <div className="flex gap-4 ">
          <a href="">
            <GithubIcon />
          </a>
          <a href="">linkedin</a>
          <a href="">twitter</a>
          <a href="">email</a>
        </div>
      </nav>
    </div>
  );
}
