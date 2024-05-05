"use client";
import useOpenMenu from "@front-end/src/Store/OpenMenu";
import Image from "next/image";
import React, { useRef } from "react";

function Header() {
  const { open } = useOpenMenu();

  const links = [
    { name: "Nous trouver", href: "#location" },
    // { name: "Menu", href: "#menu" },
    { name: "Reserver", href: "#reservation" },
    { name: "Nos services", href: "#services" },
    { name: "Nous contacter", href: "#contact" },
  ];

  return (
    <>
      <header className="w-full h-24 bg-primary/90 md:p-4 p-2 md:px-14 px-5 flex justify-between sticky top-0 z-50 backdrop-blur-sm">
        <a href="#home">
          <Image
            src="/Pizzappetit_logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </a>
        <nav className="md:block hidden">
          <ul className="md:flex justify-between hidden space-x-4 items-center h-full">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-gray-surface-100 hover:text-gray-surface-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:block hidden">
          <button className="bg-secondary text-gray-surface-100 md:py-2 py-1 px-4 rounded-full hover:bg-opacity-80 m-2">
            Contacter nous
          </button>
        </div>
        <div className="md:hidden block">
          <button className="h-full" title="sideBarMenu" onClick={() => open()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
