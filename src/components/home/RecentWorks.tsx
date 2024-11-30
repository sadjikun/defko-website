import React from 'react';
import Link from 'next/link';

export const RecentWorks = () => {
  const projects = [
    {
      title: "TaxiBokko - Application Mobile",
      description: "Application mobile de commande de taxi à la demande, permettant aux utilisateurs de commander un taxi en temps réel, de suivre leur course et de payer directement via l'application. Intégration de fonctionnalités avancées de géolocalisation et de paiement mobile.",
      image: "/api/placeholder/800/600", // À remplacer par l'image réelle de TaxiBokko
      link: "/projects/taxibokko"
    },
    {
      title: "Alumni EPT - Réseau Social",
      description: "Plateforme web dédiée aux anciens de l'École Polytechnique de Thiès, facilitant le networking professionnel et le partage d'opportunités. Intégration d'un système de mentorat et d'un espace événementiel.",
      image: "/api/placeholder/800/600", // À remplacer par l'image réelle d'Alumni EPT
      link: "/projects/alumni-ept"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Badge RECENT WORKS */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600">
            RECENT WORKS
          </span>
        </div>

        {/* Titre de la section */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Explore Our Latest<br />
          Works.
        </h2>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group">
              <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                {/* Image du projet */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Contenu textuel */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bouton "View All Projects" optionnel */}
        <div className="mt-12 text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
          >
            View All Projects
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:translate-x-1"
            >
              <path 
                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" 
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};