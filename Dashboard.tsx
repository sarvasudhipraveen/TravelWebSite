import { motion } from 'motion/react';
import { User as FirebaseUser } from 'firebase/auth';
import { Briefcase, Heart, History, Settings, Wallet, Bell, ChevronRight, Plane, Hotel, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

const stats = [
  { label: 'My Bookings', value: '12', icon: Briefcase, color: 'bg-blue-100 text-blue-600' },
  { label: 'Wishlist', value: '08', icon: Heart, color: 'bg-red-100 text-red-600' },
  { label: 'Wallet', value: '$1,240', icon: Wallet, color: 'bg-green-100 text-green-600' },
];

const upcomingTrips = [
  { id: 1, type: 'flight', title: 'Delhi to Dubai', date: '24 May, 2024', status: 'Confirmed', icon: Plane },
  { id: 2, type: 'hotel', title: 'Grand Hyatt Bali', date: '10 June, 2024', status: 'Pending', icon: Hotel },
];

export default function Dashboard({ user }: { user: FirebaseUser | null }) {
  if (!user) {
    return (
      <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-bg-main p-6 text-center">
        <div className="max-w-md bg-white p-10 rounded-3xl border border-[#E0E4E9] shadow-xl">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-3xl font-black mb-4">Login Required</h2>
          <p className="text-text-secondary mb-8 font-medium">Please login to access your dashboard and manage bookings.</p>
          <a href="/login" className="bg-brand text-white px-8 py-3 rounded-xl font-black shadow-lg">GO TO LOGIN</a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-3xl bg-brand text-white flex items-center justify-center text-4xl font-black overflow-hidden ring-4 ring-white shadow-xl">
            {user.photoURL ? <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" /> : user.email?.[0].toUpperCase()}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Hello, {user.displayName || 'Traveler'}!</h1>
            <p className="text-text-secondary font-medium mt-1">Manage your trips, wallet, and settings here.</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="p-3 bg-white border border-[#E0E4E9] rounded-xl text-text-secondary hover:text-brand transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
          </button>
          <button className="p-3 bg-white border border-[#E0E4E9] rounded-xl text-text-secondary hover:text-brand transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <motion.div
            whileHover={{ y: -5 }}
            key={stat.label}
            className="bg-white p-6 rounded-2xl border border-[#E0E4E9] shadow-sm flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
            </div>
            <div className={cn("p-4 rounded-2xl", stat.color)}>
              <stat.icon size={24} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <MapPin className="text-brand" size={20} /> Upcoming Trips
            </h3>
            <button className="text-sm font-bold text-brand hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {upcomingTrips.map((trip) => (
              <motion.div
                whileHover={{ x: 5 }}
                key={trip.id}
                className="bg-white p-5 rounded-2xl border border-[#E0E4E9] shadow-sm flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F2F5F8] rounded-xl flex items-center justify-center text-brand">
                    <trip.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{trip.title}</h4>
                    <p className="text-xs text-text-secondary font-medium">{trip.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                    trip.status === 'Confirmed' ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                  )}>
                    {trip.status}
                  </span>
                  <ChevronRight size={18} className="text-gray-300 group-hover:text-brand transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
              <History className="text-brand" size={20} /> Recent Activities
            </h3>
          </div>
          <div className="bg-white rounded-3xl border border-[#E0E4E9] overflow-hidden">
            <div className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                 <Briefcase size={32} />
              </div>
              <p className="text-sm font-medium text-text-secondary px-10">No recent activities found. Start your journey by booking your first trip!</p>
              <button className="bg-brand text-white px-6 py-2.5 rounded-xl text-sm font-black shadow-lg">EXPLORE TRIPS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
