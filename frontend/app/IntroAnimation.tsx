"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import "./IntroAnimation.scss";

gsap.registerPlugin(DrawSVGPlugin);

export default function IntroAnimation() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    // fade in du SVG
    tl.to("#svg-stage", { duration: 0.7, opacity: 1 }, 0.25)
      // le tracé se dessine
      .from("#path", { duration: 3.8, drawSVG: 0 }, 0.28)
      // fin du tracé
      .to(
        "#path",
        {
          duration: 2,
          drawSVG: "100% 93%",
          ease: "power2",
          onComplete: () => {
  const path = document.getElementById("path") as SVGPathElement | null;
  const leftText = document.getElementById("left-text")!;
  const rightText = document.getElementById("right-text")!;

  if (!path) return;

  // dernier point du path
  const len = path.getTotalLength();
  const point = path.getPointAtLength(len);

  // placer le texte par rapport au point final
  gsap.set(leftText, { x: point.x - 150, y: point.y - 20 }); // ajuste offset à gauche
  gsap.set(rightText, { x: point.x + 20, y: point.y - 20 }); // à droite

// Texte gauche (apparition gauche → droite)
// Texte gauche : apparaît de gauche → droite avec effet éponge
gsap.fromTo(
  leftText,
  { opacity: 1, scaleX: 0, transformOrigin: "left center" },
  { scaleX: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
);

// Texte droite : apparaît de droite → gauche avec effet éponge
gsap.fromTo(
  rightText,
  { opacity: 1, scaleX: 0, transformOrigin: "right center" },
  { scaleX: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
);

}

        },
        "-=2"
      );
  }, []);

  return (
    <div className="animation">
      <div className="svg_container">
        <svg
          id="svg-stage"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1442 900"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="path"
            className="mp"
            fill="none"
            stroke="#4C4333"
            strokeWidth={4}
            d="M-6.52091e-05 503.455C52.3895 503.455 338.125 509.114 511.161 446.244C654.288 394.24 767.89 304.798 818.891 274.095C882.173 235.999 912.719 159.797 902.879 95.8815C894.342 40.406 842.474 -12.901 781.969 6.61192C721.464 26.1237 701.997 100.229 712.838 154.968C728.903 237.15 801.161 312.455 801.161 386.455C801.161 420.455 801.161 439.955 801.161 503.455"
          />

            <text id="left-text" fill="#7a6b5c" fontSize="40" opacity="0">
    Lusmo
  </text>
  <text id="right-text" fill="#4C4333" fontSize="40" opacity="0">
    Développeur & Designer
  </text>
        </svg>
      </div>
    </div>
  );
}
