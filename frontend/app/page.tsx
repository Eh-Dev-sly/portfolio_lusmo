"use client";

import { useState } from "react";
import IntroAnimation from "@/app/IntroAnimation";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <IntroAnimation onComplete={() => setShowContent(true)} />}
      {showContent && <h1>Bonjour</h1>}
    </>
  );
}
