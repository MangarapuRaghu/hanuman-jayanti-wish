
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  const audioRef = useRef(null);
  const [showLove, setShowLove] = useState(false);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  const handleTap = (e) => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
    setShowLove(true);
    setTimeout(() => setShowLove(false), 3000);
  };

  return (
    <div onClick={handleTap} className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <audio ref={audioRef} src="/hanuman-mantra.mp3" loop />
      <motion.img
        src="/hanuman-motion.gif"
        alt="Lord Hanuman"
        initial={{ scale: 0.95 }}
        animate={{ scale: [0.95, 1, 0.95] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-64 h-64 object-contain mb-6 neon-glow"
      />
      <h1 className="text-2xl text-center neon-text px-4">
        Jai Bajrang Bali! May his blessings be with you always.
      </h1>
      {showLove && (
        <motion.div
          className="absolute text-pink-400 font-bold text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
        >
          Love From Raghu Mangarapu
        </motion.div>
      )}
    </div>
  );
}
