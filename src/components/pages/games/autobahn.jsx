// src/pages/AutoBahn.jsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AutoBahn() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto space-y-12">
      <section className="text-center space-y-4">
        <h1 className="hero-title gold-gradient">AutoBahn</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Préparez-vous à foncer à toute allure dans <strong>AutoBahn</strong>, un jeu de course futuriste mêlant circuits techniques et exploration en monde ouvert. Que vous préfériez la précision des tracés ou la liberté des vastes autoroutes, AutoBahn vous propulse dans une ambiance néon unique.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="futuristic-border glowing px-8">Disponible bientôt</Button>
          <Link to="/games">
            <Button variant="outline" className="futuristic-border px-8">Retour aux jeux</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="section-title">Caractéristiques</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          <li className="tech-pill">Courses futuristes sur circuits exigeants</li>
          <li className="tech-pill">Exploration libre en open world</li>
          <li className="tech-pill">Univers visuel néon et cyberpunk</li>
          <li className="tech-pill">Mécaniques arcade + skill-based</li>
          <li className="tech-pill">Support manette et clavier</li>
        </ul>
      </section>

      <section>
        <h2 className="section-title">Captures d'écran</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <img src="/images/autobahn-1.png" alt="Circuit futuriste" className="rounded-lg game-card" />
          <img src="/images/autobahn-2.png" alt="Exploration libre" className="rounded-lg game-card" />
        </div>
      </section>

      <section>
        <h2 className="section-title">Technologies utilisées</h2>
        <div className="flex flex-wrap gap-2">
          <span className="tech-pill">Unity</span>
          <span className="tech-pill">C#</span>
          <span className="tech-pill">Shader Graph</span>
          <span className="tech-pill">FMOD</span>
        </div>
      </section>
    </div>
  );
}
