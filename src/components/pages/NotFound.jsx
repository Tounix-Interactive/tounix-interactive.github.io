// src/components/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oups... Cette page n'existe pas.</p>
      <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;
