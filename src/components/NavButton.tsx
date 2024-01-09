import React from "react";

type NavButtonProps = {
  toggleSidebar: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ toggleSidebar }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="text-black dark:text-white md:hidden"
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
  );
};

export default NavButton;
