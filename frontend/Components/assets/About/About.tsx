import "@/Components/assets/About/About.scss";

import Link from "next/link";

import SkillCarousel from "./Skill Carousel/SkillCarousel";

import skillsData from "@/Components/data/perso.json";

export default function AboutPage() {
  // Extraire tous les noms de compétences de toutes les catégories
  const allSkills = skillsData.flatMap(category => 
    category.skills.map(skill => skill.name)
  );

  return (
    <section className="about">
      <div className="about-pres">
        <div className="pres-title">
          <h1>À propos</h1>
        </div>
        <div className="pres-desc">
          <p>
            Je suis Lusmo, développeur Full-Stack et web designer basé à
            Clermont-Ferrand. Passionné d'art et de musique, je code en rythme
            pour créer des projets web accessibles et impactants. Mes
            expériences associatives ont renforcé mon sens du collectif et ma
            capacité à allier créativité technique et design. J'explore
            constamment de nouvelles technologies pour proposer des solutions
            esthétiques et fonctionnelles.
          </p>
          <div className="skill_contact">
          <SkillCarousel tags={allSkills} itemsPerPage={4} />
          <Link href="/contact"><span>➜</span> Me contacter</Link>
        </div>
        </div>
      </div>
      <div className="about-pics">
        <img
          src="/images/pics/Eh.-Nouelig.webp"
          alt="Photo de Profil d'Ehouarn-Nouelig"
        />
      </div>
    </section>
  );
}