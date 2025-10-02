import { useState, useEffect, useRef } from 'react';
import LoadingScreen from './LoadingScreen';
import Index from '@/pages/Index';
import AudioPlayer from './AudioPlayer';

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [musicAutoPlay, setMusicAutoPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnterSite = () => {
    // Create audio element and play immediately on user interaction
    const audio = new Audio('/powerpoint-crazy-song-249520.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    
    audio.play().then(() => {
      console.log('Direct audio play successful');
      // Store the audio element reference for the AudioPlayer component
      if (audioRef.current) {
        audioRef.current.src = audio.src;
        audioRef.current.currentTime = audio.currentTime;
      }
      setMusicAutoPlay(true);
      setShowLoadingScreen(false);
    }).catch((error) => {
      console.error('Direct audio play failed:', error);
      // Fallback: still proceed to main site
      setMusicAutoPlay(true);
      setShowLoadingScreen(false);
    });
  };

  return (
    <>
      {showLoadingScreen ? (
        <LoadingScreen onEnter={handleEnterSite} />
      ) : (
        <>
          <Index />
          <AudioPlayer autoPlay={musicAutoPlay} ref={audioRef} />
        </>
      )}
    </>
  );
};

export default App;
