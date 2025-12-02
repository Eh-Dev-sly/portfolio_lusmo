"use client";

import ContactForm from "./ContactForm/ContactForm";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="section-header">
          <h1 className="header-title">Contactez Moi</h1>
        </div>
        <div className="contact-content">
          <div className="description">
            <p>
              Vous avez un projet ou une question ?<br />
              Je m’engage à apporter la même rigueur, créativité et savoir-faire
              à chacun de mes clients, afin de fournir la meilleure solution
              possible.
              <br />
              Contactez-moi via le formulaire ci-dessous, et je vous répondrai
              rapidement pour transformer vos idées en résultats concrets.
            </p>
          </div>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
