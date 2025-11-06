import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import ScreensPreview from './components/ScreensPreview';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <main>
        <FeatureCards />
        <ScreensPreview />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;
