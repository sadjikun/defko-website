// components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-12 sm:py-16 lg:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Contact - Full width on mobile */}
          <div className="space-y-6 sm:space-y-8">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.svg" 
                alt="Defko Logo" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            <div className="space-y-3">
              <p className="font-medium text-gray-900">Address:</p>
              <p className="text-gray-600">Cité Keur Gorgui, Dakar, Sénégal</p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">+221 77 123 45 67</p>
              <p className="text-gray-600">contact@defko.co</p>
            </div>

            <div className="flex items-center space-x-4">
              {['instagram', 'twitter', 'facebook'].map((social) => (
                <Link 
                  key={social}
                  href={`https://${social}.com/defko`} 
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#B4FF8C] transition-colors duration-300"
                >
                  {social === 'instagram' && <Instagram className="w-5 h-5" />}
                  {social === 'twitter' && <Twitter className="w-5 h-5" />}
                  {social === 'facebook' && <Facebook className="w-5 h-5" />}
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns - Stack on mobile, 2 columns on tablet, 3 columns on desktop */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            {['About Us', 'Services', 'Blog', 'Pricing', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="block text-gray-600 hover:text-gray-900 py-1"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            {['Documentation', 'Tutorials', 'Careers', 'Changelog'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="block text-gray-600 hover:text-gray-900 py-1"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="block text-gray-600 hover:text-gray-900 py-1"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Stack on mobile */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-center sm:text-left">
              © {new Date().getFullYear()} Defko - Votre partenaire en développement logiciel
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
              <span className="hidden sm:inline">-</span>
              <Link href="/cookies" className="hover:text-gray-900">Cookies Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}