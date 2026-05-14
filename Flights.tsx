import { ShoppingBag, Plane, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const flightData = [
  { id: 1, airline: 'Air India', from: 'DEL', to: 'DXB', price: '$240', time: '14:20 - 17:50', duration: '3h 30m', stops: 'Non-stop' },
  { id: 2, airline: 'Emirates', from: 'DEL', to: 'DXB', price: '$520', time: '10:30 - 13:45', duration: '3h 15m', stops: 'Non-stop' },
  { id: 3, airline: 'IndiGo', from: 'DEL', to: 'DXB', price: '$190', time: '20:15 - 23:55', duration: '3h 40m', stops: 'Non-stop' },
  { id: 4, airline: 'Qatar Airways', from: 'DEL', to: 'DXB', price: '$610', time: '08:00 - 11:30', duration: '3h 30m', stops: '1 Stop via DOH' },
];

export default function Flights() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Available Flights</h1>
          <p className="text-text-secondary font-medium">New Delhi (DEL) to Dubai (DXB) • 24 May, 2024</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E0E4E9] rounded-xl font-bold text-sm text-text-secondary hover:text-brand transition-all">
          <Filter size={18} /> Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {flightData.map((flight) => (
          <motion.div 
            whileHover={{ scale: 1.01 }}
            key={flight.id} 
            className="bg-white rounded-2xl border border-[#E0E4E9] shadow-sm hover:shadow-xl transition-all p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 justify-between"
          >
            <div className="flex items-center gap-6 w-full md:w-1/4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand">
                <Plane size={28} />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-gray-900">{flight.airline}</h4>
                <p className="text-xs text-text-secondary font-bold uppercase tracking-wider">{flight.stops}</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:flex-1 px-0 md:px-10">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black text-gray-900">{flight.time.split(' - ')[0]}</h3>
                <p className="text-sm font-bold text-text-secondary">{flight.from}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[10px] font-black text-gray-300 uppercase mb-1 tracking-widest">{flight.duration}</p>
                <div className="w-32 h-[1px] bg-gray-200 relative">
                  <div className="absolute -top-1 left-0 w-2 h-2 rounded-full border border-gray-300 bg-white"></div>
                  <div className="absolute -top-1 right-0 w-2 h-2 rounded-full border border-gray-300 bg-white"></div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-black text-gray-900">{flight.time.split(' - ')[1]}</h3>
                <p className="text-sm font-bold text-text-secondary">{flight.to}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto md:border-l md:border-[#E0E4E9] md:pl-10">
              <div className="flex flex-col items-end flex-1 md:flex-none">
                <p className="text-3xl font-black text-gray-900">{flight.price}</p>
                <p className="text-[10px] font-bold text-text-secondary uppercase">per traveler</p>
              </div>
              <button className="bg-brand text-white px-8 py-3.5 rounded-xl font-black text-sm shadow-lg hover:bg-brand-dark transition-all flex items-center gap-2">
                BOOK <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 p-8 bg-blue-50 border border-brand/10 rounded-3xl flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="p-4 bg-white rounded-2xl shadow-sm text-brand">
            <ShoppingBag size={32} />
          </div>
          <div>
            <h4 className="text-xl font-black text-gray-900">Get 10% instant discount</h4>
            <p className="text-sm text-text-secondary font-medium">Extra baggage allowance on Emirates flights. Use code: FLYEMIRATES</p>
          </div>
        </div>
        <button className="text-sm font-black text-brand bg-white px-6 py-2.5 rounded-xl shadow-sm">VIEW OFFER</button>
      </div>
    </div>
  );
}
