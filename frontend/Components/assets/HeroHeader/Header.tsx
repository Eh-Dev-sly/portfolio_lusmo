// src/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-5xl font-bold mb-4">Bienvenue sur mon portfolio</h1>
      <p className="text-lg max-w-xl text-gray-600">
        Découvrez mes projets, mon parcours et mes compétences à travers une
        expérience claire et moderne.
      </p>
    </section>
  );
}
