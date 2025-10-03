import { useState, useRef } from 'react';
import logoTrashUtility from '/ChatGPT Image Oct 2, 2025 at 03_33_40 PM.png';

interface LoadingScreenProps {
  onEnter: () => void;
}

const LoadingScreen = ({ onEnter }: LoadingScreenProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setIsTransitioning(true);
    // Add a small delay for smooth transition
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  const handleMouseEnter = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(console.error);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/loadingscreenbg.png" 
          alt="Loading Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Loading Mascot */}
      <div className="absolute bottom-0 left-4 sm:left-8 lg:left-12 z-20">
        <img
          src="/loadingmascot.png"
          alt="Loading Mascot"
          className="h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] object-contain drop-shadow-lg hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src={logoTrashUtility} 
            alt="Trash Utility Logo" 
            className="h-48 sm:h-56 lg:h-64 object-contain mx-auto drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={handleEnter}
          />
        </div>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          onMouseEnter={handleMouseEnter}
          disabled={isTransitioning}
          className={`
            px-16 py-6 bg-gradient-to-r from-purple-600 to-blue-600 
            text-white font-bold text-2xl rounded-2xl
            shadow-lg hover:shadow-xl transform hover:scale-105 
            transition-all duration-300 relative overflow-hidden
            cursor-pointer
            ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-500 hover:to-blue-500'}
          `}
        >
          <span className="relative z-10">USE TRASH UTILITY</span>
          
          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 hover:opacity-20 transition-opacity duration-300" />
          
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]" />
        </button>

        {/* Subtitle */}
        <p className="text-white/70 text-lg mt-6 font-medium">
          Enter the Digital Wasteland
        </p>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-[float_6s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hidden Audio for Button Hover */}
      <audio
        ref={hoverAudioRef}
        preload="auto"
        src="/button.mp3"
      />
    </div>
  );
};

export default LoadingScreen;
