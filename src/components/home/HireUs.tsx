// components/home/HireUs.tsx
import Link from 'next/link';

export function HireUs() {
  return (
    <section className="py-32 bg-[#F1FBF2]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Join forces with us to<br />
            craft something truly exceptional.
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Elevate your brand with our tailored digital solutions. Let's make waves together
          </p>

          <div className="flex items-center justify-center gap-8">
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-[#B4FF8C] text-gray-900 font-medium rounded-full hover:bg-[#a3ff73] transition-colors duration-300"
            >
              Get Started
            </Link>
            
            <Link 
              href="/pricing"
              className="inline-block text-gray-900 font-medium hover:underline"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}