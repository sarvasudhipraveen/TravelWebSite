import { useState } from 'react';
import { motion } from 'motion/react';
import { signInWithGoogle } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { LogIn, Github, Mail } from 'lucide-react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-bg-main p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-[#E0E4E9] p-8 md:p-12 text-center"
      >
        <div className="text-4xl mb-6">✈️</div>
        <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Welcome Back</h2>
        <p className="text-text-secondary text-sm font-medium mb-10">Login to TripVerse and manage your bookings on the go.</p>

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-[#E0E4E9] hover:bg-gray-50 py-3.5 rounded-xl font-bold transition-all disabled:opacity-50"
          >
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="h-6" />
            <span>Continue with Google</span>
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-[#1A1A1A] text-white py-3.5 rounded-xl font-bold hover:bg-black transition-all">
            <Github size={22} />
            <span>Continue with GitHub</span>
          </button>

          <div className="relative flex items-center justify-center py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#E0E4E9]"></div></div>
            <span className="relative bg-white px-4 text-xs font-bold text-text-secondary uppercase tracking-widest">or</span>
          </div>

          <div className="space-y-3 text-left">
            <div>
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-widest mb-1.5 block">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full bg-gray-50 border border-[#E0E4E9] rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-colors"
              />
            </div>
            <button className="w-full bg-brand text-white py-3.5 rounded-xl font-black shadow-lg hover:bg-brand-dark transition-all">
              SIGN IN
            </button>
          </div>
        </div>

        <p className="mt-8 text-xs text-text-secondary font-medium">
          By continuing, you agree to our <a href="#" className="text-brand hover:underline">Terms of Service</a> and <a href="#" className="text-brand hover:underline">Privacy Policy</a>.
        </p>
      </motion.div>
    </div>
  );
}
