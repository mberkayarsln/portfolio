import React from "react";
import NavLink from "../NavLink/NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center h-screen">
      {links.map((link, index) => {
        return <NavLink index={index} href={link.path} title={link.title} />;
      })}
    </ul>
  );
};

export default MenuOverlay;
