"use client";

import { useEffect } from "react";
import "./Cursor.scss";

export default function Cursor() {
  
  // ---- Hover Grow Detection ----
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest("[data-cursor]")) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // ---- Cursor Animation ----
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#FFF2DC",
    //   "#fff2dc", "#fbd3b8", "#f9b1a2", "#f38d9d", "#e16da6",
    //   "#be56b9", "#a04bc8", "#993ed1", "#9030dc", "#8323e7",
    //   "#7213f3", "#5900ff"
    ];

    circles.forEach((circle: any, index) => {
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

      circles.forEach((circle: any, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

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
