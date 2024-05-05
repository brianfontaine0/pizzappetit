"use client";
import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="bg-gray-surface-100 py-7">
      <h1 className={"text-4xl text-gray-surface-200 text-center p-4"}>
        Nous contacter
      </h1>
      <div className="w-full h-full flex justify-center items-center pt-4">
        <div className="bg-white p-4 rounded-lg w-8/12 py-6">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nom"
              className="border-b-2 border-gray-surface-200 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 border-gray-surface-200 p-2"
            />
            <textarea
              placeholder="Message"
              className="border-b-2 border-gray-surface-200 p-2"
            ></textarea>
            <button className="bg-secondary text-white py-2 px-4 rounded-full hover:bg-opacity-80">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
