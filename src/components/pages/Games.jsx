import React from 'react';

const games = [
  {
    image: '/images/game1.jpg',
    title: 'AutoBahn 🏎️ ',
    description: 'Autobahn Plonge dans l\'enfer de l\'autoroute allemande à pleine vitesse ! Slalome entre les voitures, évite les crashs, et pousse ta conduite au maximum. Autobahn est un jeu d\'arcade nerveux où chaque seconde compte. Plus tu vas vite, plus tu marques de points... mais attention au moindre faux pas. ➜ Jouer',
  },
];

const Games = () => {
  return (
    <div className="p-6 space-y-6">
      {games.map((game, index) => (
        <Games
          key={index}
          image={game.image}
          title={game.title}
          description={game.description}
        />
      ))}
    </div>
  );
};

export default Games;
