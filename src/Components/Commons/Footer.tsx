"use client";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-primary/90">
      <div className="py-7 flex flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center items-center">
          <Image
            src="/Pizzappetit_logo.svg"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-center items-center w-96 py-4">
          <a
            href="https://www.facebook.com/pizz.appetit.54"
            className="mx-5"
            target="_blank"
          >
            <Image src="/facebook.png" alt="facebook" width={40} height={40} />
          </a>
          <a
            href=""
            className=" text-gray-surface-100 hover:text-gray-surface-200"
          >
            Mentions légales
          </a>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-gray-surface-200 font-OpenSans">
            &copy; {new Date().getFullYear()} Pizzappetit
          </p>
        </div>
      </div>
      <div className="py-4">
        <p className="text-center text-gray-surface-100 font-OpenSans">
          Site réalisé par{" "}
          <a
            href="https://www.linkedin.com/in/brian-fontaine/"
            className="text-gray-surface-200"
            target="_blank"
          >
            Brian Fontaine
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
