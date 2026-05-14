import React from 'react';
import { motion } from 'motion/react';
import { Train, Clock, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';

const Trains = () => {
  const trains = [
    { id: 1, name: 'Rajdhani Express', from: 'NDLS', to: 'MUM', dep: '16:30', arr: '08:15', duration: '15h 45m', price: 45 },
    { id: 2, name: 'Shatabdi Express', from: 'NDLS', to: 'AGR', dep: '06:00', arr: '08:10', duration: '02h 10m', price: 15 },
  ];

  return (
    <div className="bg-bg-main min-h-screen pb-20">
      <div className="h-48 bg-orange-600 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-2 tracking-tighter">Train Bookings</h1>
          <p className="font-bold uppercase tracking-widest text-sm opacity-80">Safe and comfortable rail journeys</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-6">
        {trains.map((train, i) => (
          <motion.div 
            key={train.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl"><Train size={32}/></div>
              <div>
                <h3 className="text-xl font-black">{train.name}</h3>
                <p className="text-sm font-bold text-text-secondary">Premium Class</p>
              </div>
            </div>

            <div className="flex items-center gap-8 text-center">
              <div>
                <p className="text-2xl font-black">{train.dep}</p>
                <p className="text-xs font-bold text-text-secondary">{train.from}</p>
              </div>
              <div className="flex flex-col items-center">
                 <p className="text-[10px] font-black text-text-secondary uppercase">{train.duration}</p>
                 <div className="w-16 h-px bg-gray-200" />
              </div>
              <div>
                <p className="text-2xl font-black">{train.arr}</p>
                <p className="text-xs font-bold text-text-secondary">{train.to}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs font-bold text-text-secondary">Per seat</p>
                <p className="text-2xl font-black text-orange-600">${train.price}</p>
              </div>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-xl font-black shadow-lg shadow-orange-600/30">
                Book
              </button>
            </div>
          </motion.div>
        ))}
        
        <div className="bg-white rounded-3xl p-6 flex items-center justify-center gap-4 border-2 border-dashed border-gray-200">
          <ShieldCheck className="text-green-500" />
          <p className="text-sm font-bold text-text-secondary">IRCTC Authorized Partner</p>
        </div>
      </div>
    </div>
  );
};

export default Trains;
