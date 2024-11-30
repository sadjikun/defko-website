"use client"
// components/home/FAQ.tsx
import { useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Do you provide customer support?",
    answer: "Absolument ! Notre équipe de support technique est disponible pour vous accompagner tout au long du développement et après le déploiement de votre solution. Nous offrons un support réactif par email, téléphone et des réunions régulières de suivi.",
  },
  {
    question: "What happens if I encounter technical issues?",
    answer: "Notre équipe d'ingénieurs assure un support technique rapide et efficace. Nous avons un système de tickets pour suivre et résoudre les problèmes techniques, avec des SLA garantis selon votre contrat de maintenance. Pour les cas urgents, nous avons une ligne d'assistance dédiée.",
  },
  {
    question: "What is your turnaround time?",
    answer: "Les délais varient selon la complexité du projet. Pour un projet web typique, comptez 8-12 semaines. Pour une application mobile complexe, 12-16 semaines. Nous définissons toujours un planning détaillé en début de projet et assurons une transparence totale sur l'avancement.",
  },
  {
    question: "How secure is my data?",
    answer: "La sécurité est notre priorité absolue. Nous appliquons les meilleures pratiques de sécurité (chiffrement des données, authentification forte, tests de pénétration réguliers). Nos solutions sont conformes aux standards de sécurité internationaux et nous signons des accords de confidentialité stricts.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Oui, nous proposons des contrats de maintenance sur mesure incluant : mises à jour de sécurité, corrections de bugs, optimisations de performance, et évolutions fonctionnelles. Nos SLA garantissent des temps de réponse rapides selon vos besoins."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/team-working.jpg"
              alt="Équipe Defko au travail"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - FAQ Content */}
          <div>
            <div className="mb-16">
              <div className="inline-block rounded-full px-6 py-2 bg-gray-100 text-gray-800 text-sm font-medium mb-6">
                FAQ'S
              </div>
              <h2 className="text-5xl font-bold text-gray-900">
                Frequently Asked<br />Questions.
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {item.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-[#B4FF8C] flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : 'rotate-0'
                    }`}>
                      <Plus className="w-5 h-5 text-gray-900" />
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}