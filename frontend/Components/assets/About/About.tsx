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
            Je suis Lusmo, alias Eh.-Nouelig, développeur Full-Stack et web
            designer basé à Clermont-Ferrand. Passionné d’art et de musique, je
            code en rythme, trouvant dans elle ma motivation et ma rigueur. Je
            mets créativité et technologie au service de projets web accessibles
            et impactants.
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
