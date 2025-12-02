"use client";

import { useState } from "react";
import "./ContactForm.scss"; // SCSS spécifique au formulaire

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  const formData = new FormData(e.target);
  formData.append("access_key", "030e5594-8cc1-4e27-91be-95d881fff789");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Erreur lors de la requête");
    }

    const data = await res.json();

    if (data.success) {
      setStatus("Message envoyé ✔️");
      e.target.reset();
    } else {
      setStatus("Erreur lors de l’envoi ❌");
    }
  } catch (err) {
    console.error(err);
    setStatus("Envoi terminé ✔️");
  }

  setLoading(false);
};

  return (
    <form className="contact-form" onSubmit={onSubmit}>
  <div className="form-fields">
    <div className="input-option">
      <input type="text" name="name" placeholder="Votre nom" required />
      <input type="email" name="email" placeholder="Votre email" required />

      <select name="missionType" required>
        <option value="">Quel est votre besoin</option>
        <option value="Front-end Development">Developpement Front-End</option>
        <option value="Back-end Development">Developpement Back-End</option>
        <option value="Full-Stack Development">Developpement Full-Stack</option>
        <option value="SEO apply">Correction ou Amélioration du SEO</option>
        <option value="Web Design">Web Design</option>
        <option value="Inconnu">Inconnu pour le moment</option>
        <option value="Not choice">Aucun de ces choix (Veuillez décrire dans le message)</option>
      </select>

      <div className="work-mode">
        <p>Mode de travail souhaité :</p>
        <div className="choice">
        <label>
          <input type="radio" name="workMode" value="Télétravail" required /> Télétravail
        </label>
        <label>
          <input type="radio" name="workMode" value="Sur site" required /> Sur site
        </label>
        </div>
      </div>
    </div>

    <div className="input-message">
      <textarea name="message" placeholder="Votre message" required />
    </div>
  </div>

  <button type="submit" disabled={loading}>
    {loading ? "Envoi..." : "Envoyer"}
  </button>

  <p className="form-status">{status}</p>
</form>


  );
}
