"use client";
import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Circle, Marker } from "react-leaflet";
import L from "leaflet";

function LocationSection() {
  return (
    <section id="location" className="bg-primary/95 h-auto">
      <h1 className="text-4xl text-gray-surface-100 font-Pacifico text-center p-4 py-10">
        Nous trouver
      </h1>

      <MapContainer
        center={[50.0552945, 1.9009934]}
        zoom={13}
        zoomControl={false}
        style={{
          width: "100%",
          height: 322,
          zIndex: 0,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[50.0552945, 1.9009934]}
          icon={
            new L.Icon({
              iconUrl: "/marker.png",
              iconSize: [50, 50],
              crossOrigin: true,
            })
          }
        />
      </MapContainer>

      <div className="w-full px-6 flex justify-center py-5">
        <p>
          <span className="text-gray-surface-100 font-OpenSans md:text-lg text-xs">
            6 RUE DU GENERAL LECLERC 80580 PONT REMY, France
          </span>
        </p>
      </div>
    </section>
  );
}

export default LocationSection;
