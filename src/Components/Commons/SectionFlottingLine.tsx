"use client";
import Image from "next/image";
import React from "react";

function SectionFlottingLine() {
  return (
    <section className="h-[calc(100vh-6rem)] bg-primary/95 relative" id="home">
      <div className="flex justify-between items-center">
        <div className="pt-10 px-10">
          <h1 className="text-4xl text-gray-surface-100 font-Pacifico">
            Bienvenue sur Pizzappetit
          </h1>
          <h2 className="md:text-2xl text-gray-surface-100 font-OpenSans mt-3 md:w-3/5">
            Une petite oasis italienne au cœur de la ville de <b>Pont-Remy</b>.
            Savourez nos délicieuses pizzas, dans une ambiance conviviale et
            authentique.
          </h2>
          <div className="flex mt-5">
            {/* <a
              href="#menu"
              className="bg-transparent text-white py-2 px-4 rounded-full hover:bg-opacity-80 m-2 border border-white"
            >
              Voir le menu
            </a> */}
            <a
              href="#reservation"
              className="bg-secondary text-white py-2 px-4 rounded-full hover:bg-opacity-80 m-2"
            >
              Reserver
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/pizza.png"
            alt="pizza"
            className="object-cover"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="slider bg-transparent absolute md:bottom-20">
        <div className="slide-track bg-transparent space-x-2 py-10">
          {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 3, 4].map((_, index) => (
            <div
              className="slide relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-secondary"
              key={index}
            >
              <div className="z-10 absolute w-full h-full peer"></div>
              <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-36 w-32 h-44 rounded-full bg-white transition-all duration-500"></div>
              <div className="absolute flex text-xl text-center items-end justify-end peer-hover:-right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-36 w-36 h-44 rounded-full bg-white transition-all duration-500">
                <div className="px-2">
                  <p className="text-secondary font-OpenSans">Ingredients</p>
                  <p className=" text-tertiary font-Pacifico">
                    Base tomate, mozzarella, jambon, champignons, olives, origan
                  </p>
                </div>
              </div>
              <div className="w-full h-full items-center justify-center flex uppercase">
                <div className="flex flex-col">
                  <p className="text-white mt-10 text-center font-Pacifico text-xl z-50">
                    Margarita
                  </p>
                  <Image
                    src="/pizza.png"
                    alt="pizza"
                    className="object-cover"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionFlottingLine;
