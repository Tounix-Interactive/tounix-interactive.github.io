import React from 'react';

const Games = () => {
  const games = [
    {
      title: 'AutoBahn',
      description: 'Un jeu de course futuriste ultra-rapide sur des autoroutes néon suspendues. Dominez la vitesse, esquivez les obstacles et explorez un monde cybernétique stylisé.',
      imageUrl: 'URL_image_jeu_1',
      link: '/autobahn', // Lien vers la page détaillée du jeu
    },
  ];

  return (
    <section className="games-section py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Nos Jeux
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {games.map((game, index) => (
            <div key={index} className="game-card p-6 bg-card rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">{game.title}</h3>
              <p className="text-muted mb-4">{game.description}</p>
              <a
                href={game.link}
                className="inline-block text-primary font-semibold hover:underline"
              >
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
