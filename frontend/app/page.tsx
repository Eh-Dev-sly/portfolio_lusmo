"use client";

import { useState } from "react";
// import IntroAnimation from "@/app/IntroAnimation"; // animation commentée pour le moment
import Header from "@/Components/assets/HeroHeader/Header";
import ParticlesBackground from "@/Components/assets/Particle/ParticlesBackground";

export default function Home() {
  const [showContent, setShowContent] = useState(true); // afficher directement le contenu

  return (
    <>
      {/* {!showContent && <IntroAnimation onComplete={() => setShowContent(true)} />} */}
      {/* <ParticlesBackground /> */}
      {/* Affiche le Header directement */}
      {showContent && <Header />}
    </>
  );
}
