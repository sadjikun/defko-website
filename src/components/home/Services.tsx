// components/home/Services.tsx
import { ArrowUpRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: '01',
    title: "Web design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tortor in tortor consectetur, vel malesuada nulla sollicitudin. Vivamus vehicula libero nec metus aliquet, vitae facilisis nisi pharetra.",
  },
  {
    id: '02',
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tortor in tortor consectetur, vel malesuada nulla sollicitudin. Vivamus vehicula libero nec metus aliquet, vitae facilisis nisi pharetra.",
  },
  {
    id: '03',
    title: "Motion Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tortor in tortor consectetur, vel malesuada nulla sollicitudin. Vivamus vehicula libero nec metus aliquet, vitae facilisis nisi pharetra.",
  }
];

export function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block rounded-full px-4 sm:px-6 py-2 bg-gray-100 text-gray-800 text-sm font-medium mb-4 sm:mb-6">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What Services We<br className="hidden sm:block" />Provide.
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-8 sm:space-y-12">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group border-t border-gray-200 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="py-6 sm:py-8 flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
                {/* Service ID - Hidden on mobile, shown from sm up */}
                <div className="hidden sm:block text-gray-400 sm:w-16">
                  ({service.id})
                </div>

                {/* Mobile Layout for ID and Title */}
                <div className="flex items-center gap-4 sm:hidden">
                  <span className="text-gray-400">({service.id})</span>
                  <h3 className="text-2xl font-medium text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Title - Hidden on mobile, shown from sm up */}
                <div className="hidden sm:block sm:w-1/4 lg:w-1/3">
                  <h3 className="text-2xl sm:text-3xl text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="sm:flex-1">
                  <p className="text-gray-500 text-base sm:text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="flex sm:flex-none justify-end mt-4 sm:mt-0">
                  <button 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300"
                    aria-label="En savoir plus"
                  >
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}