"use client";
import React from "react";
import Lottie from "react-lottie";
import delivery from "../../../public/delivery.json";
import takeAway from "../../../public/takeAway.json";
import parking from "../../../public/parking.json";

function ServicesSection() {
  return (
    <section id="services" className="bg-gray-surface-100 py-7">
      <h1 className="text-4xl text-gray-surface-200 font-Pacifico text-center p-4">
        Nos services
      </h1>
      <div className="flex flex-col md:flex-row justify-around items-center py-5 px-4 md:w-3/5 mx-auto space-y-6">
        <div>
          <Lottie
            options={{ animationData: delivery, loop: true, autoplay: true }}
            height={200}
            width={200}
            style={{
              borderRadius: "50%",
              border: "3px solid #000",
            }}
          />
          <p
            className="text-center text-gray-surface-200 font-OpenSans"
            style={{ fontSize: "1.5rem" }}
          >
            Livraison à domicile
          </p>
        </div>
        <div>
          <Lottie
            options={{ animationData: parking, loop: true, autoplay: true }}
            height={200}
            width={200}
            style={{
              borderRadius: "50%",
              border: "3px solid #000",
            }}
          />
          <p
            className="text-center text-gray-surface-200 font-OpenSans"
            style={{ fontSize: "1.5rem" }}
          >
            Parking en libre-service
          </p>
        </div>
        <div>
          <Lottie
            options={{ animationData: takeAway, loop: true, autoplay: true }}
            height={200}
            width={200}
            style={{
              borderRadius: "50%",
              border: "3px solid #000",
            }}
          />
          <p
            className="text-center text-gray-surface-200 font-OpenSans"
            style={{ fontSize: "1.5rem" }}
          >
            A emporter
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
