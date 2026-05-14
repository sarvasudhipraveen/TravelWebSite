import React from 'react';
import { motion } from 'motion/react';
import { Car, MapPin, Search, ChevronRight, Star, Clock } from 'lucide-react';

const Cabs = () => {
  const rides = [
    { id: 1, type: 'Mini', seats: 4, price: 8, rating: 4.8, arrival: '5 min', image: '🚗' },
    { id: 2, type: 'Sedan', seats: 4, price: 12, rating: 4.9, arrival: '8 min', image: '🚕' },
    { id: 3, type: 'Suv', seats: 6, price: 20, rating: 4.7, arrival: '12 min', image: '🚙' },
  ];

  return (
    <div className="bg-bg-main min-h-screen pb-20">
      <div className="h-64 bg-slate-900 flex items-center justify-center text-white relative overflow-hidden">
        <div className="z-10 text-center">
          <h1 className="text-4xl font-black mb-2 tracking-tighter">Cab Booking</h1>
          <p className="font-bold uppercase tracking-widest text-sm opacity-60">Fast & reliable rides to your destination</p>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <Car size={300} />
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 -mt-12 space-y-6">
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase text-text-secondary">Pickup Location</p>
              <p className="font-bold">Current Location (Delhi)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="flex-1">
              <p className="text-[10px] font-black uppercase text-text-secondary">Drop Location</p>
              <p className="font-bold text-gray-400">Where to?</p>
            </div>
          </div>
          <button className="w-full bg-brand text-white py-4 rounded-2xl font-black shadow-lg shadow-brand/30 flex items-center justify-center gap-2">
            <Search size={20} /> Search Rides
          </button>
        </div>

        <div className="space-y-4">
          <h3 className="font-black text-xl px-2">Available Categories</h3>
          {rides.map((ride, i) => (
            <motion.div 
              key={ride.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-6">
                <div className="text-4xl group-hover:scale-110 transition-transform">{ride.image}</div>
                <div>
                  <h4 className="text-xl font-black">{ride.type}</h4>
                  <div className="flex items-center gap-3 text-xs font-bold text-text-secondary uppercase tracking-tight">
                    <span className="flex items-center gap-1"><Star size={12} className="text-orange-400 fill-orange-400"/> {ride.rating}</span>
                    <span>{ride.seats} Seats</span>
                    <span className="flex items-center gap-1 text-green-600"><Clock size={12}/> {ride.arrival}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-brand">${ride.price}</p>
                <ChevronRight className="text-gray-300 ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cabs;
