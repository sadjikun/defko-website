import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section>
      {/* Première ligne avec les deux colonnes */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-32">
          {/* Colonne titre */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Shaping Unforgettable Design Experiences for Each Client
            </h1>
          </div>
          
          {/* Colonne description et boutons */}
          <div className="flex flex-col gap-8">
            <p className="text-xl text-gray-600">
              Where Creativity Meets Innovation. Elevate Your Brand with Expert Design Solutions. Let's Craft Your Digital Success Story Together
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#EEFF00] text-black hover:bg-[#EEFF00]/90">
                Hire Us
              </Button>
              <Button size="lg" variant="outline">
                Explore Our Works
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième ligne avec l'image pleine largeur */}
      <div className="mt-16">
        <img 
          src="/api/placeholder/1920/600" 
          alt="Hero" 
          className="w-full h-[600px] object-cover"
        />
      </div>
    </section>
  );
};