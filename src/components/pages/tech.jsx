// src/pages/Technologies.jsx
import React from "react";

export default function Technologies() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-16 bg-background text-foreground">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="section-title gold-gradient">Nos Technologies</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Nous utilisons une stack moderne et performante pour créer des jeux et des expériences immersives.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">🎮 Moteurs de jeu</h2>
          <div className="flex flex-wrap gap-2">
            <span className="tech-pill">Unity</span>
            <span className="tech-pill">Unreal Engine (Futurement)</span>
          </div>
        </div>

        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">💻 Langages</h2>
          <div className="flex flex-wrap gap-2">
            <span className="tech-pill">C#</span>
            <span className="tech-pill">C++</span>
            <span className="tech-pill">JavaScript</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Python</span>
          </div>
        </div>

        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">🌐 Web & UI</h2>
          <div className="flex flex-wrap gap-2">
            <span className="tech-pill">React</span>
            <span className="tech-pill">Tailwind CSS</span>
            <span className="tech-pill">Vite</span>
            <span className="tech-pill">Framer Motion</span>
          </div>
        </div>

        <div className="game-card">
          <h2 className="text-xl font-semibold mb-2 text-primary">⚙️ Outils & Dev</h2>
          <div className="flex flex-wrap gap-2">
            <span className="tech-pill">Git</span>
            <span className="tech-pill">GitHub</span>
            <span className="tech-pill">VS Code</span>
            <span className="tech-pill">Blender</span>
            <span className="tech-pill">Figma</span>
            <span className="tech-pill">Visual Studio</span>
          </div>
        </div>
      </section>
    </main>
  );
}
