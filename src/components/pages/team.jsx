import TeamMemberCard from "@/components/TeamMemberCard";

export default function Team() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="section-title text-center mb-12">Notre équipe</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <TeamMemberCard
          name="DE BELLIS Antoine"
          role="Fondateur & Développeur"
          image="/images/team/antoine.jpg"
          description="Antoine est le fondateur de Tounix Interactive. Développeur full-stack passionné, il dirige tous les projets du studio, en particulier AutoBahn."
        />
      </div>
    </section>
  );
}
