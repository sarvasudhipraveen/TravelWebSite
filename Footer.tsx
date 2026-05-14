import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E0E4E9] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-brand tracking-tighter">TripVerse</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Experience the world with TripVerse. We provide premium travel booking services for flights, hotels, trains, and more with a focus on ease and security.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-[#f2f5f8] rounded-full text-text-secondary hover:text-brand transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-[#f2f5f8] rounded-full text-text-secondary hover:text-brand transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-[#f2f5f8] rounded-full text-text-secondary hover:text-brand transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-[#f2f5f8] rounded-full text-text-secondary hover:text-brand transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/flights" className="text-text-secondary text-sm hover:text-brand transition-colors">Flights</Link></li>
              <li><Link to="/hotels" className="text-text-secondary text-sm hover:text-brand transition-colors">Hotels</Link></li>
              <li><Link to="/trains" className="text-text-secondary text-sm hover:text-brand transition-colors">Trains</Link></li>
              <li><Link to="/packages" className="text-text-secondary text-sm hover:text-brand transition-colors">Holiday Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary text-sm hover:text-brand transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-text-secondary text-sm hover:text-brand transition-colors">FAQs</a></li>
              <li><a href="#" className="text-text-secondary text-sm hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-text-secondary text-sm hover:text-brand transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-secondary text-sm">
                <MapPin size={18} className="text-brand shrink-0" />
                <span>123 Travel Lane, Adventure City, World 45678</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <Phone size={18} className="text-brand shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <Mail size={18} className="text-brand shrink-0" />
                <span>support@tripverse.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-[#E0E4E9] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">© 2026 TripVerse. All rights reserved.</p>
          <div className="flex gap-6">
             <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" />
             <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" />
             <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
