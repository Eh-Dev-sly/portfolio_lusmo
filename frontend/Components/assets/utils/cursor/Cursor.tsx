"use client";

import { useEffect } from "react";
import "./Cursor.scss";

export default function Cursor() {

  // ---- Gestion du changement de curseur (hover / link) ----
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isHover = target.closest("[data-cursor]");
      const isLink = target.closest("[data-link-cursor]");

      document.body.classList.toggle("cursor-hover", !!isHover);
      document.body.classList.toggle("cursor-link", !!isLink);
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  // ---- Animation du curseur ----
  useEffect(() => {
    const coords = { x: 0, y: 0 };

    // 🔥 FIX : on ajoute le typage custom aux cercles
    const circles = Array.from(
      document.querySelectorAll(".circle")
    ) as Array<HTMLElement & { x: number; y: number }>;

    const colors = ["#FFF2DC"];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animate() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        const scale = (circles.length - index) / circles.length;
(circle.style as any).scale = String(scale);

        // 🔥 nécessaires pour le lerp
        circle.x = x;
        circle.y = y;

        const next = circles[index + 1] || circles[0];
        x += (next.x - x) * 0.3;
        y += (next.y - y) * 0.3;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="circle-cursor">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="circle"></div>
      ))}
    </div>
  );
}
