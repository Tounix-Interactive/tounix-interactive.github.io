import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';  // Importation de la Navbar
import Home from "./components/Hero";
import Games from './components/pages/Games';  // Page des jeux
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>  {/* Router enveloppe toutes les routes */}
      <Navbar />  {/* Ta barre de navigation */}
      <Routes>  {/* Déclaration des routes */}
        <Route path="/" element={<Home />} />  {/* Route de la page d'accueil */}
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<NotFound />} />
  {/* Route des jeux */}
        {/* Tu peux ajouter d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
