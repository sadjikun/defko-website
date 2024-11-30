"use client"
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Defko a dépassé toutes nos attentes ! Leur équipe d'ingénieurs polytechniciens a livré une solution technologique robuste et innovante pour notre plateforme TaxiBokko. Leur expertise technique et leur professionnalisme sont exceptionnels.",
    author: "Mamadou Diallo",
    role: "CEO TaxiBokko",
    avatarUrl: "/testimonials/avatar1.jpg"
  },
  {
    id: 2,
    quote: "Le développement de notre réseau social Alumni EPT par Defko a été une excellente expérience. Leur compréhension approfondie de nos besoins et leur capacité à livrer des solutions sur mesure ont fait toute la différence.",
    author: "Abdourahmane DIOP",
    role: "Président ADEPT - Alumni EPT",
    avatarUrl: "/testimonials/avatar2.jpg"
  },
  {
    id: 3,
    quote: "Travailler avec Defko sur notre projet de transformation digitale a été un vrai plaisir. Leur expertise en DevOps et Cloud nous a permis de moderniser notre infrastructure tout en optimisant nos coûts.",
    author: "Papa Sow",
    role: "CTO Entreprise X",
    avatarUrl: "/testimonials/avatar3.jpg"
  }
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block rounded-full px-4 sm:px-6 py-2 bg-gray-100 text-gray-800 text-sm font-medium mb-4 sm:mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            See What They Say<br className="hidden sm:block" />About Us.
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            <span className="text-gray-900">Reviews</span> are from{' '}
            <span className="text-gray-900">creativity</span> with connectivity, resulting in{' '}
            <span className="text-gray-900">impactful</span> solutions powered by innovative development strategies and{' '}
            <span className="text-gray-900">advanced</span> technology.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4 lg:px-6"
                >
                  <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                    {/* Quote Mark */}
                    <div className="text-6xl sm:text-8xl lg:text-[120px] leading-none text-[#B4FF8C] font-serif mb-4 sm:mb-6 -ml-2 sm:-ml-4 lg:-ml-6">
                      "
                    </div>
                    
                    {/* Quote Text */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden relative mr-3 sm:mr-4">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-0.5 sm:mb-1">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden sm:flex items-center justify-end space-x-4 mt-8 mr-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 group transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 group transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-900 transition-colors duration-300" />
            </button>
          </div>

          {/* Mobile Navigation - Shown only on mobile */}
          <div className="sm:hidden flex justify-center space-x-6 mt-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-gray-900' : 'bg-gray-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}