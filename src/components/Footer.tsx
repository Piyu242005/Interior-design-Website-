import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-sm flex items-center justify-center">
                <span className="text-xl font-bold text-white"><img src="/Piyu.png" alt="D NEST Logo"/></span>
              </div>
              <div>
                <div className="text-lg font-light text-white">D NEST</div>
                <div className="text-xs text-amber-600">INTERIOR DESIGN</div>
              </div>
            </div>
            <p className="text-sm">
              Transforming spaces into dreams with exceptional design and craftsmanship.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Design Street, Creative Amravati, 444701</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 8855667788</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>piyu143247@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/my.life_24143?utm_source=qr&igsh=dHVkMXVnMnBzeHAw"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/piyush-ramteke-24-mylife?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-sm flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Piyush Ramteke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
