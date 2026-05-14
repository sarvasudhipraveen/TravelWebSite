import { Star, MapPin, Wifi, Coffee, Wind, CreditCard, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const hotelData = [
  { id: 1, name: 'Grand Hyatt Bali', rating: 4.9, reviews: 1240, price: '$220', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80', location: 'Nusa Dua, Bali' },
  { id: 2, name: 'Burj Al Arab', rating: 5.0, reviews: 850, price: '$1,500', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80', location: 'Jumeirah, Dubai' },
  { id: 3, name: 'The Ritz-Carlton', rating: 4.8, reviews: 3200, price: '$350', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', location: 'Paris, France' },
  { id: 4, name: 'Taj Lake Palace', rating: 4.9, reviews: 540, price: '$480', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80', location: 'Udaipur, India' },
];

export default function Hotels() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Luxury Stays</h1>
        <p className="text-text-secondary font-medium">Find the perfect room for your next adventure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hotelData.map((hotel) => (
          <motion.div 
            whileHover={{ y: -10 }}
            key={hotel.id} 
            className="bg-white rounded-3xl border border-[#E0E4E9] overflow-hidden group shadow-sm hover:shadow-2xl transition-all"
          >
            <div className="relative h-64 overflow-hidden">
               <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={cn("fill-yellow-500 text-yellow-500", i >= Math.floor(hotel.rating) && "fill-white/30 text-white/30")} />
                      ))}
                    </div>
                    <h3 className="text-2xl font-black text-white">{hotel.name}</h3>
                    <p className="text-white/80 text-sm font-bold flex items-center gap-1 mt-1"><MapPin size={14} /> {hotel.location}</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl text-center min-w-[80px]">
                    <p className="text-brand font-black text-xl">{hotel.price}</p>
                    <p className="text-[10px] font-bold text-text-secondary uppercase">per night</p>
                  </div>
               </div>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="bg-gray-50 p-3 rounded-xl text-text-secondary group-hover:text-brand transition-colors mb-2"><Wifi size={20} /></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Wifi</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-50 p-3 rounded-xl text-text-secondary group-hover:text-brand transition-colors mb-2"><Coffee size={20} /></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Breakfast</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-50 p-3 rounded-xl text-text-secondary group-hover:text-brand transition-colors mb-2"><Wind size={20} /></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">AC</p>
                </div>
                <div className="text-center">
                   <div className="bg-gray-50 p-3 rounded-xl text-text-secondary group-hover:text-brand transition-colors mb-2"><CreditCard size={20} /></div>
                   <p className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">Booking</p>
                </div>
              </div>
              
              <button className="w-full md:w-auto bg-brand text-white px-8 py-3.5 rounded-xl font-black shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
                VIEW ROOMS <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any) {
  return inputs.filter(Boolean).join(' ');
}
