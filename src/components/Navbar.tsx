// Navbar.tsx
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavButton from "./NavButton";

const Navbar: React.FC = () => {
  const listItemClasses =
    "w-full py-2 px-4 hover:text-light-three dark:hover:text-dark-three border-b border-black dark:border-white  cursor-pointer";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 right-0 h-full flex flex-col z-50 ${
        isSidebarOpen ? "w-[250px]" : "md:w-[250px]"
      }`}
    >
      {/* Hamburger menu button - visible when menu is closed */}
      <div
        className={`${
          isSidebarOpen ? "hidden" : ""
        } md:hidden p-4 flex justify-end`}
      >
        <NavButton toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } h-full md:block dark:bg-dark-five bg-light-four text-black dark:text-white shadow-lg shadow-black dark:shadow-white`}
      >
        {/* Hamburger menu button - visible when menu is open */}
        <div className="p-4 flex justify-end">
          <NavButton toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        <ul className="flex flex-col justify-start text-left p-4 space-y-4">
          {/* Navigation Links */}
          <li className={listItemClasses}>
            <a href="#landing-page" className="w-full block">
              Start
            </a>
          </li>
          <li className={listItemClasses}>
            <a href="#overview" className="w-full block">
              Przegląd
            </a>
          </li>
          <li className={listItemClasses}>
            <a href="#entity-type-chart" className="w-full block">
              Typy Obiektów
            </a>
          </li>
          <li className={listItemClasses}>
            <a href="#count-objects-map-component" className="w-full block">
              Liczba Obiektów
            </a>
          </li>
          <li className={listItemClasses}>
            <a
              href="#calculate-objects-per-100k-map-component"
              className="w-full block"
            >
              Liczba Obiektów na 100 tys. mieszkańców
            </a>
          </li>
          <li className={listItemClasses}>
            <a href="#grades-map-component" className="w-full block">
              Oceny
            </a>
          </li>
          <li className={listItemClasses}>Poziom Cyfryzacji</li>
          <li className={listItemClasses}>
            <a href="#patrons-component" className="w-full block">
              Ranking Patronów
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
