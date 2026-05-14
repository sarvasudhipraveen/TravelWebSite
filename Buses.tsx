import React from 'react';
import { motion } from 'motion/react';
import { Bus, Clock, MapPin, ShieldCheck, Star } from 'lucide-react';

const Buses = () => {
  const buses = [
    { id: 1, operator: 'Zingbus', type: 'AC Sleeper', rating: 4.5, dep: '21:00', arr: '06:00', price: 12, from: 'Delhi', to: 'Shimla' },
    { id: 2, operator: 'RedBus Go', type: 'Semi-Sleeper', rating: 4.2, dep: '22:30', arr: '07:45', price: 9, from: 'Delhi', to: 'Shimla' },
  ];

  return (
    <div className="bg-bg-main min-h-screen pb-20">
      <div className="h-48 bg-emerald-600 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-2 tracking-tighter">Bus Bookings</h1>
          <p className="font-bold uppercase tracking-widest text-sm opacity-80">Intercity travel made easy</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-6">
        {buses.map((bus, i) => (
          <motion.div 
            key={bus.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl"><Bus size={32}/></div>
              <div>
                <h3 className="text-xl font-black">{bus.operator}</h3>
                <div className="flex items-center gap-1 text-orange-400">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-black text-text-primary">{bus.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex-1 px-8">
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-black">{bus.dep}</span>
                <div className="flex-1 mx-4 h-px bg-gray-100 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                    <Clock size={14} className="text-gray-300" />
                  </div>
                </div>
                <span className="text-lg font-black">{bus.arr}</span>
              </div>
              <div className="flex justify-between text-[10px] font-black text-text-secondary uppercase">
                <span>{bus.from}</span>
                <span>{bus.to}</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs font-bold text-text-secondary">Starting at</p>
                <p className="text-2xl font-black text-emerald-600">${bus.price}</p>
              </div>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-black shadow-lg shadow-emerald-600/30">
                Seats
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Buses;
