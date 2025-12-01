"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./BurgerMenu.scss";

export default function SlidingStairsMenu() {
  const [open, setOpen] = useState(false);

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  };

  return (
    <>
      <button className="menu-toggle" onClick={() => setOpen(true)}>
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="sliding-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <button className="menu-close" onClick={() => setOpen(false)}>✕</button>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/projects">Projets</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
