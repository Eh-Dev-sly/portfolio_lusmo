import { motion } from "framer-motion";
import { opacity, slideLeft, mountAnim } from "../anim";
import styles from "./style.module.scss";
import Link from "./link";

const menu = [
  {
    title: "Accueil",
    description: "C'est vrai qu'elle est belle cette page",
    href: "/", // <-- chemin vers la page Projets
  },
  {
    title: "Projets",
    description: "Cliquez Pour Voir Tous Mes Projets",
    href: "/projects", // <-- chemin vers la page Projets
  },
  {
    title: "A Propos",
    description: "Decouvrez Qui Je Suis",
    href: "/about", // <-- chemin vers la page A Propos
  },
  {
    title: "Contact",
    description: "Mail et non pigeon voyageur",
    href: "/contact", // <-- chemin vers la page Contact
  },
];

export default function Menu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <motion.div
      className={styles.menu}
      variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
      custom={0}
    >
      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => {
            closeMenu();
          }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {menu.map((el, index) => {
          return <Link data={el} index={index} key={index} />;
        })}
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}
      >
        <a
          href="https://github.com/Eh-Dev-sly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios11/200/FFFFFF/github.png"
            alt="Logo GitHub blanc"
            className={styles.ghBefore}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="Logo GitHub noir"
            className={styles.ghAfter}
          />
        </a>
        <a
          href="https://www.instagram.com/lusmo_dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IG
        </a>
        <a
          href="https://fr.linkedin.com/in/ehouarn-nouelig-sioly-91b0b8201"
          target="_blank"
          rel="noopener noreferrer"
        >
          IN
        </a>
        <a
          href="https://www.tiktok.com/@lusmo_dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          TK
        </a>
      </motion.div>
    </motion.div>
  );
}
