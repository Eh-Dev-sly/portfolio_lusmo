"use client";

import { useState } from "react";
import IntroAnimation from "@/app/IntroAnimation";
import Header from "@/Components/assets/HeroHeader/Header";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {/* Affiche l'animation d'intro si showContent est false */}
      {!showContent && <IntroAnimation onComplete={() => setShowContent(true)} />}

      {/* Affiche le Header seulement après la fin de l'animation */}
      {showContent && <Header />}
    </>
  );
}
