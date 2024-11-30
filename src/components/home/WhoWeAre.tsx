import React from 'react';

export const WhoWeAre = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Badge WHO WE ARE */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-600">
            WHO WE ARE
          </span>
        </div>

        {/* Titre principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Software Development &<br />
          All-in-one IT Agency
        </h2>

        {/* Contenu en deux colonnes */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche */}
          <div>
            <div className="flex gap-2 mb-6">
              {/* Images de l'équipe en cercle */}
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white" />
                <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white" />
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              Notre équipe d'ingénieurs talentueux excelle dans la création de solutions
              innovantes, repoussant les limites de la technologie pour garantir que
              vos projets se démarquent et créent un impact durable.
            </p>
          </div>

          {/* Colonne droite */}
          <div>
            <p className="text-2xl md:text-3xl text-gray-700">
              Notre approche <span className="text-gray-400">fusionne expertise technique</span> avec
              innovation, aboutissant à des <span className="text-gray-900 font-medium">solutions impactantes</span> propulsées
              par des stratégies de développement avancées et une{' '}
              <span className="text-gray-900 font-medium">technologie de pointe</span>.
            </p>
          </div>
        </div>

        {/* Image en pleine largeur */}
        <div className="mt-16">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <img
              src="/api/placeholder/1920/1080"
              alt="Equipe Defko au travail"
              className="w-full h-full object-cover"
            />
            {/* Bouton play optionnel */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-black/80 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};