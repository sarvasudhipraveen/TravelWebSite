import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Star, Bed, Plane, Camera, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

const Holidays = () => {
  const packages = [
    {
      id: 1,
      title: "Maldives Paradise Escape",
      dest: "Male, Maldives",
      duration: "5 Nights / 6 Days",
      price: 1240,
      rating: 4.9,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1512100356956-c1226c3af3e8?auto=format&fit=crop&w=600&q=80",
      includes: [Plane, Bed, Camera]
    },
    {
      id: 2,
      title: "Romantic Paris & Alps",
      dest: "Paris, France",
      duration: "7 Nights / 8 Days",
      price: 2850,
      rating: 5.0,
      reviews: 85,
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
      includes: [Plane, Bed, Camera]
    },
    {
      id: 3,
      title: "Cultural Rajasthan Tour",
      dest: "Jaipur, India",
      duration: "4 Nights / 5 Days",
      price: 450,
      rating: 4.7,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1548013146-72479768b921?auto=format&fit=crop&w=600&q=80",
      includes: [Bed, Camera]
    },
    {
      id: 4,
      title: "Swiss Luxury Explorer",
      dest: "Zurich, Switzerland",
      duration: "6 Nights / 7 Days",
      price: 3400,
      rating: 4.8,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=600&q=80",
      includes: [Plane, Bed, Camera]
    }
  ];

  return (
    <div className="bg-bg-main min-h-screen pb-20">
      <div className="h-64 hero-gradient flex items-center justify-center text-center px-4">
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">Holiday Packages</h1>
          <p className="text-white/70 font-bold uppercase tracking-widest text-sm">Best curated experiences just for you</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        {/* Filters Mini Bar */}
        <div className="bg-white rounded-3xl shadow-xl p-4 flex flex-wrap gap-4 items-center justify-between border border-gray-100 flex-col md:flex-row">
          <div className="flex gap-4">
            <FilterChip label="Domestic" active />
            <FilterChip label="International" />
            <FilterChip label="Honeymoon" />
            <FilterChip label="Family" />
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-text-secondary w-full md:w-auto">
             <Calendar size={18} className="text-brand" />
             Select Travel Month
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-brand text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Featured</div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {pkg.includes.map((Icon, idx) => (
                    <div key={idx} className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white border border-white/20">
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-orange-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-black text-text-primary">{pkg.rating}</span>
                    <span className="text-xs font-bold text-text-secondary">({pkg.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-secondary">
                    <Clock size={16} />
                    <span className="text-xs font-bold">{pkg.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-1 group-hover:text-brand transition-colors leading-tight">{pkg.title}</h3>
                <div className="flex items-center gap-1 text-text-secondary mb-6 italic">
                  <MapPin size={14} />
                  <span className="text-xs font-bold">{pkg.dest}</span>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-secondary">Per Person</p>
                    <p className="text-3xl font-black text-brand">${pkg.price}</p>
                  </div>
                  <button className="bg-brand text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-brand/30 hover:bg-brand-dark transition-all transform hover:scale-105 active:scale-95">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FilterChip = ({ label, active = false }: any) => (
  <button className={cn(
    "px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all",
    active ? "bg-brand text-white shadow-lg shadow-brand/30" : "bg-gray-50 text-text-secondary hover:bg-gray-100"
  )}>
    {label}
  </button>
);

export default Holidays;
