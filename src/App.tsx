import Navbar from './components/Navbar';
import CategorySection from './components/sections/Category';
import HeroSection from './components/sections/Hero';

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <CategorySection />
    </div>
  );
}
