"use client";
import SectionFlottingLine from "@front-end/src/Components/Commons/SectionFlottingLine";
import Header from "@front-end/src/Components/Header/Header";
import Footer from "@front-end/src/Components/Commons/Footer";
import ServicesSection from "@front-end/src/Components/Commons/ServicesSection";
import ReservationSection from "@front-end/src/Components/Commons/ReservationSection";
import MobileBottomMenu from "@front-end/src/Components/Header/MobileBottomMenu";
import ContactSection from "@front-end/src/Components/Commons/ContactSection";
import dynamic from "next/dynamic";
const LocationSection = dynamic(() => import("@front-end/src/Components/Commons/LocationSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Header />

      <SectionFlottingLine />

      <LocationSection />

      <ReservationSection />

      <ServicesSection />

      <ContactSection />

      <Footer />

      <MobileBottomMenu />
    </main>
  );
}
