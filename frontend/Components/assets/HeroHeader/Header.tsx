import "@/Components/assets/HeroHeader/Header.scss"

export default function HeroSection() {
  return (
    <section className="home">
      <div className="intro-wrapper">
        <div className="intro-text">
          <h1 className="text-title">
            Hey, je m’appelle <span className="name">Eh-Nouelig</span>
          </h1>
          <h2 className="text-title">
            Mais vous pouvez m’appeler <span className="name">Lusmo</span>
          </h2>
          <div className="intro-taches">
            <p className="intro-tache">Je suis développeur Full-Stack</p>
            <p className="intro-tache">& UX designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
