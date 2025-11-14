"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "@/Components/assets/HeroHeader/Header.scss";
import useMousePosition from "@/Components/assets/HeroHeader/utils/useMousePosition";

export default function HeroSection() {
  const fullNameRef = useRef<HTMLSpanElement>(null);
  const shortNameRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const tachesContainerRef = useRef<HTMLDivElement>(null); // ← Nouveau ref

  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 }); // ← Position locale

  const size = isHovered ? 400 : 40;

  // Calculer la position de la souris relative au conteneur
  useEffect(() => {
    if (tachesContainerRef.current) {
      const rect = tachesContainerRef.current.getBoundingClientRect();
      setLocalMousePos({
        x: x - rect.left,
        y: y - rect.top,
      });
    }
  }, [x, y]);

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

  return (
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

          <div className="intro-taches" ref={tachesContainerRef}>
            <motion.div
              className="mask"
              animate={{
                maskPosition: `${localMousePos.x - size / 2}px ${localMousePos.y - size / 2}px`,
                WebkitMaskPosition: `${localMousePos.x - size / 2}px ${localMousePos.y - size / 2}px`,
                maskSize: `${size}px`,
                WebkitMaskSize: `${size}px`,
              }}
              transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
            >
              <span className="intro-tache-filled">
                et passionnée de nouvelles technologies
              </span>
            </motion.div>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="intro-tache-outlined"
            >
              Je suis développeur Full-Stack & UX designer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}