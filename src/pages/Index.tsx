import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Trailer from '@/components/Trailer';
import Episodes from '@/components/Episodes';
import Cast from '@/components/Cast';
import Media from '@/components/Media';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <NavBar />
      <main>
        <Hero />
        <Trailer />
        <Episodes />
        <Cast />
        {/* <Media /> */}
        <FinalCTA />
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default Index;
