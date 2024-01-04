// Navbar.tsx
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const listItemClasses =
    "w-full py-2 px-4 hover:bg-gray-700 border-b cursor-pointer";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 h-full flex flex-col ">
      {/* Hamburger menu button */}
      <div
        className={`${
          isSidebarOpen ? "bg-gray-800 text-white" : ""
        } sm:hidden p-4`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14v2H3V5zm0 6h14v2H3v-2zm0 6h14v2H3v-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } h-full sm:block bg-gray-800 text-white shadow-lg`}
      >
        <ul className="flex flex-col justify-start text-left p-4 space-y-4">
          {/* Navigation Links */}
          <li className={listItemClasses}>Przegląd</li>
          <li className={listItemClasses}>Typy Obiektów</li>
          <li className={listItemClasses}>Liczba Obiektów</li>
          <li className={listItemClasses}>Liczba Ludności</li>
          <li className={listItemClasses}>Oceny</li>
          <li className={listItemClasses}>Poziom Cyfryzacji</li>
          <li className={listItemClasses}>Ranking Patronów</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
