import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, Star, MapPin, Tag, TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'flights', name: 'Flights', icon: '✈️' },
  { id: 'hotels', name: 'Hotels', icon: '🏨' },
  { id: 'trains', name: 'Trains', icon: '🚆' },
  { id: 'buses', name: 'Buses', icon: '🚌' },
  { id: 'packages', name: 'Holidays', icon: '🌴' },
  { id: 'cabs', name: 'Cabs', icon: '🚖' },
];

const trendingOffers = [
  { id: 1, title: 'Flat 15% OFF*', desc: 'On Domestic Flights using ICICI Bank Cards. Use code: TRAVELXICICI', icon: '🏷️', color: 'bg-red-50' },
  { id: 2, title: 'Bali Special', desc: 'Book 5 nights and get 1 night free on luxury stays. Limited period offer.', icon: '🌴', color: 'bg-blue-50' },
  { id: 3, title: 'Hotel Flash Sale', desc: 'Up to 40% OFF on Top Hotels in Goa, Manali & Shimla. Ends in 4h 20m.', icon: '🏨', color: 'bg-green-50' },
];

const featuredDestinations = [
  { id: 1, name: 'Maldives', price: '$899', rating: 4.9, img: 'https://images.unsplash.com/photo-1512100356956-c1226c3af3e8?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Paris, France', price: '$1,240', rating: 4.8, img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Jaipur, India', price: '$120', rating: 4.7, img: 'https://images.unsplash.com/photo-1548013146-72479768b921?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Dubai, UAE', price: '$750', rating: 4.9, img: 'https://images.unsplash.com/photo-1512453979798-5ea4 joint3877d6c?auto=format&fit=crop&w=600&q=80' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('flights');

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="hero-gradient relative h-[450px] md:h-[400px] px-6 md:px-10 py-12 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">Where to next?</h1>
          <p className="text-white/80 text-lg md:text-xl font-medium">Book flights, hotels & packages at the best prices.</p>
        </motion.div>

        {/* Search Bar Container */}
        <div className="absolute top-[220px] left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-[#E0E4E9] overflow-hidden"
          >
            {/* Search Tabs */}
            <div className="flex border-b border-[#E0E4E9] px-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "flex flex-col items-center gap-1 py-4 px-6 border-b-4 transition-all",
                    activeTab === cat.id 
                      ? "border-brand text-brand" 
                      : "border-transparent text-text-secondary hover:text-brand"
                  )}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Mock Search Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-gray-100">
              <div className="p-4 hover:bg-blue-50/30 cursor-pointer transition-colors group">
                <p className="text-[10px] font-extrabold text-text-secondary uppercase mb-1">From</p>
                <h4 className="text-xl font-extrabold text-gray-900 group-hover:text-brand">DEL</h4>
                <p className="text-xs text-text-secondary font-medium">Indira Gandhi Intl, Delhi</p>
              </div>
              <div className="p-4 hover:bg-blue-50/30 cursor-pointer transition-colors group">
                <p className="text-[10px] font-extrabold text-text-secondary uppercase mb-1">To</p>
                <h4 className="text-xl font-extrabold text-gray-900 group-hover:text-brand">DXB</h4>
                <p className="text-xs text-text-secondary font-medium">Dubai Intl Airport, UAE</p>
              </div>
              <div className="p-4 hover:bg-blue-50/30 cursor-pointer transition-colors group">
                <p className="text-[10px] font-extrabold text-text-secondary uppercase mb-1">Departure</p>
                <h4 className="text-xl font-extrabold text-gray-900 group-hover:text-brand">24 May</h4>
                <p className="text-xs text-text-secondary font-medium">Friday, 2024</p>
              </div>
              <div className="p-4 hover:bg-blue-50/30 cursor-pointer transition-colors group">
                <p className="text-[10px] font-extrabold text-text-secondary uppercase mb-1">Return</p>
                <h4 className="text-xl font-extrabold text-gray-200 group-hover:text-gray-400">Add Date</h4>
                <p className="text-xs text-text-secondary font-medium">Save more on round trip</p>
              </div>
              <div className="p-4 hover:bg-blue-50/30 cursor-pointer transition-colors group">
                <p className="text-[10px] font-extrabold text-text-secondary uppercase mb-1">Travelers & Class</p>
                <h4 className="text-xl font-extrabold text-gray-900 group-hover:text-brand">1 Person</h4>
                <p className="text-xs text-text-secondary font-medium">Economy/Premium Econ</p>
              </div>
            </div>

            {/* Action Bottom */}
            <div className="flex justify-center -mt-6">
               <button className="bg-brand text-white px-12 py-3.5 rounded-full font-black text-xl shadow-[0_8px_20px_rgba(0,140,255,0.4)] hover:scale-105 transition-transform">
                SEARCH
              </button>
            </div>
            <div className="h-6"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 mt-[230px] md:mt-[180px] space-y-16">
        
        {/* Trending Offers */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <Tag className="text-brand" /> Trending Offers
            </h2>
            <Link to="/packages" className="text-sm font-bold text-brand hover:underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingOffers.map((offer) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={offer.id}
                className="bg-white border border-[#E0E4E9] rounded-xl p-5 flex gap-5 cursor-pointer hover:shadow-lg transition-all"
              >
                <div className={cn("w-20 h-20 rounded-xl flex items-center justify-center text-3xl shrink-0", offer.color)}>
                  {offer.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-extrabold text-gray-900 mb-1 leading-tight">{offer.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{offer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Destinations */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <TrendingUp className="text-brand" /> Featured Destinations
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={dest.id}
                className="bg-white border border-[#E0E4E9] rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                   <img 
                    src={dest.img} 
                    alt={dest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-black">
                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                    {dest.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-black text-gray-900 text-lg mb-1">{dest.name}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-brand font-black text-sm">Starting from {dest.price}</p>
                    <button className="p-1.5 bg-gray-50 text-brand rounded-lg hover:bg-brand hover:text-white transition-colors">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust Factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 border-t border-b border-[#E0E4E9]">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-brand">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="font-black text-gray-900">Secure Payments</h4>
              <p className="text-xs text-text-secondary font-medium">100% encrypted transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-accent">
              <Clock size={28} />
            </div>
            <div>
              <h4 className="font-black text-gray-900">24/7 Assistance</h4>
              <p className="text-xs text-text-secondary font-medium">Round the clock human support</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="font-black text-gray-900">Global Reach</h4>
              <p className="text-xs text-text-secondary font-medium">Booking available in 200+ cities</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
