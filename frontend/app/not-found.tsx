import Link from "next/link";

import "@/app/not-found.scss";

export default function NotFound() {
  return (
    <section className="error-page">
    <div className="error_content">
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link href="/" className="pages-link logout">
        Retourner sur la page d’accueil
      </Link>
    </div>
    </section>
  );
}
