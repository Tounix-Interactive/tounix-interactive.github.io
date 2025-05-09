// src/pages/Contact.jsx
import React from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="min-h-screen py-16 px-6 md:px-16 bg-background text-foreground">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="section-title gold-gradient">Contact</h1>
        <p className="text-lg text-muted-foreground mb-10">
          Une question ? Une idée ? Envie de collaborer ? Écris-nous !
        </p>
      </section>

      <form
        action="https://formspree.io/f/mgvkkzez"
        method="POST"
        className="max-w-xl mx-auto grid gap-6 bg-card p-8 rounded-xl futuristic-border"
      >
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 rounded-md bg-background border border-input text-foreground"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 rounded-md bg-background border border-input text-foreground"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-background border border-input text-foreground"
          ></textarea>
        </div>

        <Button type="submit" className="futuristic-border glowing">
          Envoyer
        </Button>
      </form>
    </main>
  );
}
