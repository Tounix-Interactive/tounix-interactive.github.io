import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        {/* Future sections will be added here */}
      </main>
      <Toaster />
      {/* Add a Footer component later */}
    </div>
  );
}

export default App;
