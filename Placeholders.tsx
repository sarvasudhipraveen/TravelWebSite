import { motion } from 'motion/react';
import { Train, Bus, Car, Mountain } from 'lucide-react';

const PlaceholderPage = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center justify-center text-center">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`w-32 h-32 ${color} rounded-[40px] flex items-center justify-center mb-8 shadow-xl`}
    >
      <Icon size={64} />
    </motion.div>
    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-4">{title} Booking</h1>
    <p className="text-text-secondary font-medium max-w-md mx-auto">
      Our {title.toLowerCase()} booking system is currently under maintenance or being polished. Check back very soon for the best rates!
    </p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-[#E0E4E9] animate-pulse">
           <div className="h-4 bg-gray-100 rounded w-1/2 mb-4"></div>
           <div className="h-8 bg-gray-50 rounded mb-2"></div>
           <div className="h-4 bg-gray-50 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  </div>
);

export const Trains = () => <PlaceholderPage title="Trains" icon={Train} color="bg-orange-100 text-orange-600" />;
export const Buses = () => <PlaceholderPage title="Buses" icon={Bus} color="bg-green-100 text-green-600" />;
export const Packages = () => <PlaceholderPage title="Packages" icon={Mountain} color="bg-blue-100 text-blue-600" />;
export const Cabs = () => <PlaceholderPage title="Cabs" icon={Car} color="bg-purple-100 text-purple-600" />;
