import "@/Components/assets/NavBar/HeaderContent.scss";

import BurgerMenu from "@/Components/assets/NavBar/BurgerMenu/BurgerMenu.tsx";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <svg
          width="100" // Tu peux changer la taille ici
          height="48" // Ajusté pour garder les proportions
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
            <BurgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
}
