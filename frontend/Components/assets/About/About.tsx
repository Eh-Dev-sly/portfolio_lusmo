import "@/Components/assets/About/About.scss";

export default function AboutPage() {
  return (
    <section className="about">
      <div className="about-pres">
        <div className="pres-title">
          <h1>À propos</h1>
        </div>
        <div className="pres-desc">
          <p>
            Je suis Lusmo, alias Eh.-Nouelig, développeur Full-Stack et web designer basé à Clermont-Ferrand. Passionné d’art et de musique, je code en rythme, trouvant dans elle ma motivation et ma rigueur. Je mets créativité et technologie au service de projets web accessibles et impactants.

Au fil de mes expériences associatives, j’ai eu l’occasion de participer à des projets collaboratifs où j’ai pu allier développement, design et engagement citoyen. Ces expériences m’ont permis de renforcer mon sens de l’organisation, mon adaptabilité et ma capacité à travailler en équipe tout en partageant mes connaissances et en apprenant des autres.

Animé par une curiosité constante, je m’efforce de toujours approfondir mes compétences, explorer de nouvelles technologies et fournir le meilleur de moi-même dans chaque projet. Ma passion pour l’innovation et la volonté de créer des solutions à la fois esthétiques et fonctionnelles guident chacun de mes choix professionnels et personnels.

          </p>
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
