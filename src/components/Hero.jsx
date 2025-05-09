
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // ou selon ton chemin
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-primary/5 rounded-full pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.5 + Math.random() * 0.5, 1],
              opacity: [0.05, 0.15, 0.05],
              x: [`${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`],
              y: [`${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title mb-4">
              <span className="block">Façonnons le</span>
              <span className="gold-gradient">Futur du Gaming</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl max-w-2xl mb-8 text-foreground/80"
          >
            Studio de développement de jeux vidéo spécialisé dans les expériences futuristes et immersives. Nous repoussons les limites de la technologie pour créer des mondes virtuels extraordinaires.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4" 
            >

            <Link to="/games">
            <Button size="lg" className="px-8 futuristic-border glowing">
              Découvrir nos jeux
            </Button>
          </Link>
          
          <Link to="/studio">
            <Button size="lg" variant="outline" className="px-8 futuristic-border">
              À propos du studio
            </Button>
          </Link>
          </motion.div>
        </div>
      </div>


      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="/games" aria-label="Scroll down">
         <ChevronDown className="h-8 w-8 text-primary hover:text-primary/80 transition-colors" />
        </a>
      </motion.div>

      {/* Decorative bottom gradient */}
       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
  