import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Users, ShoppingBag, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight, Package, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';

const AdminPanel = () => {
  const data = [
    { name: 'Mon', revenue: 4500, bookings: 24 },
    { name: 'Tue', revenue: 5200, bookings: 32 },
    { name: 'Wed', revenue: 4800, bookings: 28 },
    { name: 'Thu', revenue: 6100, bookings: 45 },
    { name: 'Fri', revenue: 5900, bookings: 38 },
    { name: 'Sat', revenue: 8400, bookings: 65 },
    { name: 'Sun', revenue: 7800, bookings: 58 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-brand font-black uppercase tracking-tighter mb-2">
              <ShieldAlert size={20} /> Admin Dashboard
            </div>
            <h1 className="text-4xl font-black tracking-tight">Performance Overview</h1>
          </div>
          <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1">
             <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold">Daily</button>
             <button className="px-4 py-2 text-sm font-bold text-text-secondary">Weekly</button>
             <button className="px-4 py-2 text-sm font-bold text-text-secondary">Monthly</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Total Revenue" value="$42,650" icon={<DollarSign size={20}/>} trend="+12.5%" positive />
          <StatCard title="New Bookings" value="284" icon={<ShoppingBag size={20}/>} trend="+8.2%" positive />
          <StatCard title="Active Users" value="1,240" icon={<Users size={20}/>} trend="-2.4%" />
          <StatCard title="Conversion Rate" value="4.8%" icon={<TrendingUp size={20}/>} trend="+1.5%" positive />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-8">Revenue Analysis</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#008CFF" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#008CFF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E4E9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#5A5A5A' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#5A5A5A' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    itemStyle={{ fontWeight: 800 }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#008CFF" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-8">Daily Bookings</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0E4E9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#5A5A5A' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#5A5A5A' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    cursor={{ fill: '#F2F5F8' }}
                  />
                  <Bar dataKey="bookings" fill="#008CFF" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Management */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-xl font-bold">Recent Management Tasks</h3>
            <button className="text-brand font-bold text-sm">View All Logs</button>
          </div>
          <div className="divide-y divide-gray-50">
            <LogItem title="Updated 'Bali Paradise' package price" time="2 hours ago" category="Packages" />
            <LogItem title="New user registration: john.doe@email.com" time="4 hours ago" category="Users" />
            <LogItem title="Refund processed for Booking #TVR-9281" time="6 hours ago" category="Bookings" />
            <LogItem title="System update: Version 2.1.0 deployed" time="12 hours ago" category="System" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, trend, positive }: any) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-gray-50 rounded-xl text-text-secondary">{icon}</div>
      <div className={cn(
        "flex items-center gap-1 text-xs font-black px-2 py-1 rounded-full",
        positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
      )}>
        {positive ? <ArrowUpRight size={12}/> : <ArrowDownRight size={12}/>}
        {trend}
      </div>
    </div>
    <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">{title}</p>
    <h4 className="text-3xl font-black tracking-tighter">{value}</h4>
  </div>
);

const LogItem = ({ title, time, category }: any) => (
  <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
        <Package size={18} className="text-text-secondary" />
      </div>
      <div>
        <p className="font-bold text-text-primary">{title}</p>
        <p className="text-xs text-text-secondary font-medium">{time}</p>
      </div>
    </div>
    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full">{category}</span>
  </div>
);

export default AdminPanel;
