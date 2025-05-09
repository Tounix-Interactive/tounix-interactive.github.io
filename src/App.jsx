import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';  // Importation de la Navbar
import Home from "./components/Hero";
import Games from './components/pages/Games';  // Page des jeux
import NotFound from './components/pages/NotFound';
import Studio from "./components/pages/Studio";
import Tech from "./components/pages/tech";
import Contact from "./components/pages/contact";
import Team from "./components/pages/team";
import Autobahn from "./components/pages/games/autobahn";

function App() {
  return (
    <Router>  {/* Router enveloppe toutes les routes */}
      <Navbar />  {/* Ta barre de navigation */}
      <Routes>  {/* Déclaration des routes */}
        <Route path="/" element={<Home />} />  {/* Route de la page d'accueil */}
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/autobahn" element={<Autobahn />} />
  {/* Route des jeux */}
        {/* Tu peux ajouter d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
