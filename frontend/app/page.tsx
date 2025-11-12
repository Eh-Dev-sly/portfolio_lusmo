"use client";

import { useState } from "react";
import IntroAnimation from "@/app/IntroAnimation";

import Header from "@/Components/assets/HeroHeader/Header";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Header />
    </>
  );
}
