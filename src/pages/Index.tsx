import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Trailer from '@/components/Trailer';
import TrashUtilitySection from '@/components/TrashUtilitySection';
import JoinTrashSection from '@/components/JoinTrashSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <NavBar />
      <main>
        <Hero />
        <Trailer />
        <TrashUtilitySection />
        <JoinTrashSection />
      </main>
    </div>
  );
};

export default Index;
