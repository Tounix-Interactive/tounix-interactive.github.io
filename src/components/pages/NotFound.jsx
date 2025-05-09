// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold gold-gradient">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Oups... Je crois qu'on à pas encore mis de jeu sur cette page <p>&lt;3</p>

        </p>

        <div>
          <Link to="/">
            <button className="px-8 py-3 futuristic-border glowing text-lg font-semibold">
              Revenir à l’accueil
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
