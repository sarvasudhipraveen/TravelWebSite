import { Link, useLocation } from 'react-router-dom';
import { Plane, Hotel, Train, Bus, Car, Mountain, User, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { User as FirebaseUser, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Flights', icon: Plane, path: '/flights' },
  { name: 'Hotels', icon: Hotel, path: '/hotels' },
  { name: 'Trains', icon: Train, path: '/trains' },
  { name: 'Buses', icon: Bus, path: '/buses' },
  { name: 'Holidays', icon: Mountain, path: '/packages' },
  { name: 'Cabs', icon: Car, path: '/cabs' },
];

export function Navbar({ user }: { user: FirebaseUser | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="h-16 bg-white border-b border-[#E0E4E9] flex items-center justify-between px-6 md:px-10 sticky top-0 z-[100]">
      <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-brand tracking-tighter">
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ✈️
        </motion.div>
        TripVerse
      </Link>

      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-1.5 text-sm font-bold transition-all duration-200 py-5 border-b-2 border-transparent",
                isActive ? "text-brand border-brand" : "text-text-secondary hover:text-brand"
              )}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
             <Link to="/dashboard" className="hidden sm:flex items-center gap-2 bg-[#f0f7ff] hover:bg-[#e0f0ff] px-4 py-2 rounded-lg transition-colors group">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold overflow-hidden">
                {user.photoURL ? <img src={user.photoURL} alt="Avatar" /> : user.email?.[0].toUpperCase()}
              </div>
              <span className="text-sm font-bold text-brand">My Trip</span>
            </Link>
            <button 
              onClick={() => signOut(auth)}
              className="p-2 text-text-secondary hover:text-accent transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-[#f0f7ff] text-brand px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e0f0ff] transition-all">
            Login / Signup
          </Link>
        )}
        
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white border-b border-[#E0E4E9] p-6 lg:hidden flex flex-col gap-4 shadow-xl"
          >
             {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-lg font-bold text-text-secondary hover:text-brand transition-colors"
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
