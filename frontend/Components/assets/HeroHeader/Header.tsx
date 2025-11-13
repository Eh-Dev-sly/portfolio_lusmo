"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@/Components/assets/HeroHeader/Header.scss";

export default function HeroSection() {
  const fullNameRef = useRef<HTMLSpanElement>(null);
  const shortNameRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fln = fullNameRef.current;
    const stn = shortNameRef.current;
    const container = containerRef.current;
    if (!fln || !stn || !container) return;

    // Masquer le nom complet au départ
    gsap.set(stn, { opacity: 1, y: 0 }); // short name normal
    gsap.set(fln, { opacity: 0, y: -10 }); // full name légèrement en haut
    gsap.set(fln, { x: 0}); // full name légèrement en haut

    // Survol
    container.addEventListener("mouseenter", () => {
      // Short name monte
      gsap.to(stn, { opacity: 0, y: 10, duration: 0.4, ease: "power2.out" });
      // Full name descend
      gsap.to(fln, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      // Container bouge
      gsap.to(container, {x:-60, duration: 0.4, ease: "power2.out" });
    });

    // Quand la souris quitte
    container.addEventListener("mouseleave", () => {
      // Short name revient
      gsap.to(stn, { opacity: 1, y: 0, duration: 0.4, ease: "power2.in" });
      // Full name disparaît
      gsap.to(fln, { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" });
      // Container retourne à sa place
      gsap.to(container, {x:0, delay: 0.3, duration: 0.4, ease: "power2.out" });
    });
  }, []);

  return (
    <section className="home">
      <div className="intro-wrapper">
        <div className="intro-text">
          <h1 className="text-title" ref={containerRef}>
            Hey, je m’appelle Eh
            <span className="name-container" >
              <span ref={shortNameRef}>-Nouelig</span>
              <span className="full-name" ref={fullNameRef}>
                ouarn-Nouelig
              </span>
            </span>
          </h1>

          <h2 className="text-title">
            Mais vous pouvez m’appeler <span className="name">Lusmo</span>
          </h2>

          <div className="intro-taches">
            <p className="intro-tache">Je suis développeur Full-Stack</p>
            <p className="intro-tache">& UX designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
