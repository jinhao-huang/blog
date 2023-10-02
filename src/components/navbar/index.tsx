import { FaGlobe } from "react-icons/fa";
import MobileDialog from "./mobile-dialog";

const navigations = [
  { name: "Posts", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b border-b-gray-200"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">1BitBool</span>
            <img
              className="h-8 w-auto"
              src="/assets/vercel.svg"
              alt="1BitBool"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigations.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end gap-4">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Switch Language</span>
            <FaGlobe className="h-6 w-6"></FaGlobe>
          </button>
          <div className="flex lg:hidden">
            <MobileDialog navigations={navigations}></MobileDialog>
          </div>
        </div>
      </nav>
    </header>
  );
}