import React from "react";
import Link from "next/link";

const NavLink = ({ href, title, index }) => {
  return (
    <li key={index}>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
