"use client";
import React from "react";

function ReservationSection() {
  const listHoraires = [
    {
      jour: "Lundi",
      horaire: "18:00 – 21:30",
    },
    {
      jour: "Mardi",
      horaire: "18:00 – 21:30",
    },
    {
      jour: "Mercredi",
      horaire: "18:00 – 21:30",
    },
    {
      jour: "Jeudi",
      horaire: "Fermé",
    },
    {
      jour: "Vendredi",
      horaire: "18:00 – 21:30",
    },
    {
      jour: "Samedi",
      horaire: "18:00 – 21:30",
    },
    {
      jour: "Dimanche",
      horaire: "18:00 – 21:30",
    },
  ];
  return (
    <section id="reservation" className="bg-primary/90 p-4 py-6">
      <h1 className="text-5xl text-gray-surface-200 font-Pacifico text-center p-4">
        Faites votre
      </h1>
      <h2 className="text-4xl text-gray-surface-100 font-Pacifico text-center -py-2">
        Réservation
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center py-5">
        <a
          href="tel:0749105950"
          className="bg-secondary text-white py-2 px-4 rounded-full hover:bg-opacity-80 m-2"
        >
          Par téléphone
        </a>
      </div>

      <div>
        <h3 className="text-5xl text-gray-surface-100 font-OpenSans text-center">
          Nos
        </h3>
        <h4 className="text-3xl text-gray-surface-100 font-Pacifico text-center">
          {"Horaires d'ouverture"}
        </h4>
        <div className="h-0.5 bg-gray-surface-100 md:w-96 w-2/3 mx-auto my-5"></div>
        <div className="py-5 mx-auto w-full flex justify-center items-center flex-col space-y-2">
          {listHoraires.map((horaire, index) => (
            <div className="flex flex-row justify-between w-full md:w-1/5" key={index}>
              <p className="text-base font-OpenSans font-bold text-white">
                {horaire.jour}
              </p>
              <p className="text-base text-gray-surface-100 font-OpenSans">
                {horaire.horaire}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReservationSection;
