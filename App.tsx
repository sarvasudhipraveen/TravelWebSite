import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AIAssistant } from './components/AIAssistant';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Holidays from './pages/Holidays';
import Trains from './pages/Trains';
import Buses from './pages/Buses';
import Cabs from './pages/Cabs';
import AdminPanel from './pages/AdminPanel';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 overflow-x-hidden relative">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/trains" element={<Trains />} />
              <Route path="/buses" element={<Buses />} />
              <Route path="/cabs" element={<Cabs />} />
              <Route path="/holidays" element={<Holidays />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </Router>
  );
}
