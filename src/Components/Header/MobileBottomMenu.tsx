"use client";
import useOpenMenu from "@front-end/src/Store/OpenMenu";
import React, { useEffect } from "react";

function MobileBottomMenu() {
  const { isOpen, close } = useOpenMenu();

  const links = [
    { name: "Nous trouver", href: "#location" },
    // { name: "Menu", href: "#menu" },
    { name: "Reserver", href: "#reservation" },
    { name: "Nos services", href: "#services" },
    { name: "Nous contacter", href: "#contact" },
  ];

  return (
    <div
      className={`
      ${isOpen ? "opacity-100" : "opacity-0"}
      transition-all duration-500 ease-in-out
      w-screen fixed bg-primary/90 bottom-0 left-0 backdrop-blur-sm z-50 rounded-t-2xl py-7`}
    >
      <div className="flex justify-end items-start px-4 py-5 relative">
        <button className="text-gray-surface-100 absolute -top-2 right-5">
          <button onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 50 50"
              fill="white"
            >
              <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
            </svg>
          </button>
        </button>
      </div>
      <nav className="w-full h-full flex flex-col items-center justify-center">
        <ul className=" space-y-5 text-center w-full">
          {links.map((link, index) => (
            <li key={index} className="w-full mx-auto">
              <a
                href={link.href}
                className="text-gray-surface-100 hover:text-gray-surface-200 w-full text-center"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileBottomMenu;
