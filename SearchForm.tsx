import React from 'react';
import { Plane, Hotel, Train, Bus, MapPin, Calendar, Users, ChevronDown, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

type SearchType = 'flights' | 'hotels' | 'trains' | 'buses' | 'cabs';

export const SearchForm = () => {
  const [activeTab, setActiveTab] = React.useState<SearchType>('flights');
  
  const tabs: { id: SearchType; label: string; icon: any }[] = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'trains', label: 'Trains', icon: Train },
    { id: 'buses', label: 'Buses', icon: Bus },
    { id: 'cabs', label: 'Cabs', icon: MapPin },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 -mt-24 z-20">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-100 mb-8 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 pb-4 px-2 text-sm md:text-base font-bold transition-all relative whitespace-nowrap",
                  isActive ? "text-brand" : "text-text-secondary hover:text-brand"
                )}
              >
                <Icon size={20} />
                {tab.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-brand rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-gray-100 rounded-xl overflow-hidden">
          <div className="p-4 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-1">From</span>
            <div className="text-xl font-extrabold text-black group-hover:text-brand transition-colors">DEL</div>
            <span className="text-xs text-text-secondary truncate block">Indira Gandhi Intl Airport, Delhi</span>
          </div>
          
          <div className="p-4 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-1">To</span>
            <div className="text-xl font-extrabold text-black group-hover:text-brand transition-colors">DXB</div>
            <span className="text-xs text-text-secondary truncate block">Dubai International Airport, UAE</span>
          </div>

          <div className="p-4 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-1">Departure</span>
            <div className="text-xl font-extrabold text-black group-hover:text-brand transition-colors flex items-center gap-2">
              24 May <Calendar size={16} />
            </div>
            <span className="text-xs text-text-secondary">Friday, 2024</span>
          </div>

          <div className="p-4 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-1">Return</span>
            <div className="text-xl font-extrabold text-gray-300 group-hover:text-brand transition-colors flex items-center gap-2">
              Add Return <ChevronDown size={16} />
            </div>
          </div>

          <div className="p-4 hover:bg-blue-50/50 transition-colors cursor-pointer group">
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest block mb-1">Travelers & Class</span>
            <div className="text-xl font-extrabold text-black group-hover:text-brand transition-colors flex items-center gap-2">
              1 Adult <Users size={16} />
            </div>
            <span className="text-xs text-text-secondary">Economy/Premium Economy</span>
          </div>
        </div>

        {/* Search Call to Action */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
          <button className="bg-brand text-white px-10 md:px-16 py-4 rounded-full text-xl font-extrabold shadow-lg shadow-brand/40 hover:bg-brand-dark transition-all transform hover:scale-105 flex items-center gap-2 uppercase tracking-tight">
            <Search size={24} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
