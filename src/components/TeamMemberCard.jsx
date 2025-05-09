import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

export default function TeamMemberCard({ name, role, image, description }) {
  return (
    <div className="team-member-card text-center">
      <img src={image} alt={name} className="rounded-lg w-32 h-32 mx-auto mb-2" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-muted-foreground">{role}</p>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="outline" className="mt-2 futuristic-border">En savoir plus</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
          <Dialog.Content 
            className="bg-card p-6 rounded-xl shadow-lg w-full max-w-md mx-auto z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-primary/30">
            <Dialog.Title className="text-xl font-semibold mb-2">{name}</Dialog.Title>
            <Dialog.Description className="text-sm text-muted-foreground mb-4">
              {description}
            </Dialog.Description>
            <Dialog.Close asChild>
              <Button variant="secondary" className="mt-4 w-full futuristic-border">Fermer</Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
