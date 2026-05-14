import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [chat, setChat] = React.useState<{ role: string; text: string }[]>([
    { role: 'model', text: "Hi! I'm your TripVerse AI assistant. Where would you like to travel next?" }
  ]);
  const [loading, setLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMsg = { role: 'user', text: message };
    setChat(prev => [...prev, userMsg]);
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          history: chat.map(c => ({ role: c.role, parts: [{ text: c.text }] }))
        })
      });
      const data = await response.json();
      setChat(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (error) {
      console.error(error);
      setChat(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-40px)] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col h-[500px] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-black tracking-tight">TripVerse AI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Online Assistant</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-lg transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 scrollbar-hide">
              {chat.map((msg, i) => (
                <div key={i} className={cn(
                  "flex items-start gap-3",
                  msg.role === 'user' ? "flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border",
                    msg.role === 'user' ? "bg-white border-gray-200" : "bg-brand text-white border-brand"
                  )}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm max-w-[80%] font-medium leading-relaxed shadow-sm",
                    msg.role === 'user' 
                      ? "bg-brand text-white rounded-tr-none" 
                      : "bg-white text-text-primary rounded-tl-none border border-gray-100"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center border border-brand">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3">
              <input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about destinations, flights..." 
                className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-brand/20 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !message.trim()}
                className="bg-brand text-white p-3 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 disabled:scale-95 disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
            
            <div className="text-[10px] text-center pb-2 bg-white text-text-secondary font-bold uppercase tracking-widest flex items-center justify-center gap-1">
              <Sparkles size={10} className="text-brand" /> Powered by Gemini AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand text-white rounded-2xl shadow-2xl shadow-brand/40 flex items-center justify-center transition-all hover:bg-brand-dark relative z-[110]"
      >
        <MessageSquare size={32} />
        {!isOpen && (
          <div className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-black px-2 py-1 rounded-full animate-bounce">
            NEW
          </div>
        )}
      </motion.button>
    </div>
  );
};
