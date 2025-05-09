import React from "react";
import { Link } from "react-router-dom"; // Assure-toi d'importer Link depuis 'react-router-dom'

export default function Studio() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-16 bg-background text-foreground">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="section-title gold-gradient">À propos du studio</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Tounix Interactive est un studio indépendant dédié à la création de jeux vidéo innovants, stylisés et passionnants.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">🎯 Notre mission</h2>
          <p className="text-muted-foreground">
            Créer des expériences vidéoludiques uniques, accessibles et mémorables pour les joueurs du monde entier.
          </p>
        </div>

        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">🧠 Notre vision</h2>
          <p className="text-muted-foreground">
            Allier créativité, narration et technologie pour repousser les limites du jeu indépendant.
          </p>
        </div>

        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">🛠️ Technologies</h2>
          <div className="flex flex-wrap gap-2">
            <span className="tech-pill">Unity</span>
            <span className="tech-pill">Unreal Engine</span>
            <span className="tech-pill">C#</span>
            <span className="tech-pill">React</span>
            <span className="tech-pill">TailwindCSS</span>
          </div>
        </div>

        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">📍 Basé en France</h2>
          <p className="text-muted-foreground">
            Inspiré par les paysages numériques et la culture geek, notre studio puise sa force dans la passion et la communauté.
          </p>
        </div>

        <Link to="/team"> {/* Utilisation de Link pour la navigation interne */}
          <div className="game-card">
            <h2 className="text-xl font-semibold mb-2 text-primary">Notre Équipe</h2>
            <p className="text-muted-foreground">
              Passant d'une simple personne au Support, au Créateur, tout le monde y est &lt;3
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
