"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; 
import { gsap } from "gsap";
import useMousePositon from "@/Components/assets/utils/useMousePosition";
import Cursor from "@/Components/assets/utils/cursor/Cursor";
import "@/Components/assets/HeroHeader/Header.scss";

export default function HeroSection() {
  const fullNameRef = useRef<HTMLSpanElement>(null);
  const shortNameRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const tachesContainerRef = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePositon();
  const [isHovered, setIsHovered] = useState(false);

  const cursorSize = isHovered ? 168 : 24;

  // Position relative pour le mask
  const getRelativePosition = () => {
    if (tachesContainerRef.current) {
      const rect = tachesContainerRef.current.getBoundingClientRect();
      return {
        x: x - rect.left,
        y: y - rect.top,
      };
    }
    return { x: 0, y: 0 };
  };

  // Animation du nom au survol
  useEffect(() => {
    const fln = fullNameRef.current;
    const stn = shortNameRef.current;
    const container = containerRef.current;
    if (!fln || !stn || !container) return;

    // Masquer le nom complet au départ
    gsap.set(stn, { opacity: 1, y: 0 });
    gsap.set(fln, { opacity: 0, y: -10 });

    // Survol du nom
    const onEnter = () => {
      gsap.to(stn, { opacity: 0, y: 10, duration: 0.4, ease: "power2.out" });
      gsap.to(fln, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(container, { x: -60, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(stn, { opacity: 1, y: 0, duration: 0.4, ease: "power2.in" });
      gsap.to(fln, { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" });
      gsap.to(container, {
        x: 0,
        delay: 0.3,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const relativePosition = getRelativePosition();

  return (
    <main>
      {/* Curseur global */}
      <Cursor />

      {/* Cercle de mask pour texte */}
      <motion.div
        className="mask-cursor"
        animate={{
          WebkitMaskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
          maskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
          WebkitMaskSize: `${cursorSize}px ${cursorSize}px`,
          maskSize: `${cursorSize}px ${cursorSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
      />

      <section className="home">
        <div className="intro-wrapper">
          <div className="intro-text">
            <h1 className="text-title" ref={containerRef}>
              Hey, je m'appelle Eh
              <span className="name-container">
                <span ref={shortNameRef}>-Nouelig</span>
                <span className="full-name" ref={fullNameRef}>
                  ouarn-Nouelig
                </span>
              </span>
            </h1>

            <h2 className="text-title">
              Mais vous pouvez m'appeler <span className="name">Lusmo</span>
            </h2>

            <div
              className="intro-taches"
              ref={tachesContainerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              data-cursor="grow"
            >
              <motion.div
                className="mask"
                animate={{
                  WebkitMaskPosition: `${relativePosition.x - cursorSize / 2}px ${
                    relativePosition.y - cursorSize / 2
                  }px`,
                  maskPosition: `${relativePosition.x - cursorSize / 2}px ${
                    relativePosition.y - cursorSize / 2
                  }px`,
                  WebkitMaskSize: `${cursorSize}px ${cursorSize}px`,
                  maskSize: `${cursorSize}px ${cursorSize}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
              >
                <span className="intro-tache-filled">
                  passionné de nouvelles technologies
                </span>
              </motion.div>

              <span className="intro-tache-outlined">
                Je suis développeur Full-Stack & UX designer
              </span>
            </div>
          </div>
        </div>

        <div className="home_button">
          <Link href="/projects" className="button-link">
            → voir mes projets
          </Link>
          <Link href="/contact" className="button-link">
            → qui suis-je
          </Link>
        </div>
      </section>
    </main>
  );
}