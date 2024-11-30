import { Hero } from "@/components/home/Hero";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { RecentWorks } from "@/components/home/RecentWorks";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { HireUs } from "@/components/home/HireUs";
HireUs
export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <WhoWeAre />
      <RecentWorks />
      <Services />
      <Testimonials />
      <FAQ />
      <HireUs />
  
      {/* Autres sections seront ajoutées ici */}
    </main>
  );
}