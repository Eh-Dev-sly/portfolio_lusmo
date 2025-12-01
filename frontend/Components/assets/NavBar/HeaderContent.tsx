"use client";

import { useState } from "react";

import "@/Components/assets/NavBar/HeaderContent.scss";

import { AnimatePresence } from "framer-motion";
import Stairs from "@/Components/assets/NavBar/BurgerMenu/Stairs/Stairs.tsx";
import Menu from "@/Components/assets/NavBar/BurgerMenu/Menu/Menu.tsx";
import BurgerMenu from "@/Components/assets/NavBar/BurgerMenu/BurgerMenu.tsx";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="navBar">
      <div className="logo">
        <svg
          width="100"
          height="48"
          viewBox="0 0 373 179"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="var(--foreground)"
            stroke="var(--foreground)"
            strokeWidth="2"
          >
            {/* Lignes */}
            <line x1="30.5956" y1="100.085" x2="220.596" y2="16.0854" />
            <line x1="30.9226" y1="100.003" x2="365.923" y2="74.003" />
            <line x1="31.2341" y1="100.028" x2="301.234" y2="165.028" />

            {/* Cercles */}
            <circle cx="30.5" cy="100.5" r="30.5" />
            <circle cx="221" cy="17" r="17" />
            <circle cx="300.5" cy="163.5" r="15.5" />
            <circle cx="361" cy="75" r="12" />
          </g>
        </svg>
      </div>
      <div className="navBar-list">
        <ul>
          <li className="change-language"></li>
          <li className="change-theme"></li>
          <li className="burger-menu">
            <BurgerMenu openMenu={() => {setMenuIsOpen(true)}}/>
            <AnimatePresence mode="wait">
            {
                menuIsOpen && <>
                <Stairs />
                <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                </>
            }
            </AnimatePresence>
          </li>
        </ul>
      </div>
    </div>
  );
}
