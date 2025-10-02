import { useState, useEffect, useRef } from 'react';
import LoadingScreen from './LoadingScreen';
import Index from '@/pages/Index';
import AudioPlayer from './AudioPlayer';

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [musicAutoPlay, setMusicAutoPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnterSite = () => {
    // Create main audio element and play immediately on user interaction
    const audio1 = new Audio('/newsong.mp3');
    audio1.loop = true;
    audio1.volume = 0.5;
    
    // Create mega horn audio element (play once, no loop)
    const audio2 = new Audio('/mega-horn-398654.mp3');
    audio2.loop = false;
    audio2.volume = 0.4;
    
    // Play both audio tracks
    Promise.all([audio1.play(), audio2.play()]).then(() => {
      console.log('Both audio tracks playing successfully');
      // Store the main audio element reference for the AudioPlayer component
      if (audioRef.current) {
        audioRef.current.src = audio1.src;
        audioRef.current.currentTime = audio1.currentTime;
      }
      setMusicAutoPlay(true);
      setShowLoadingScreen(false);
    }).catch((error) => {
      console.error('Audio play failed:', error);
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
