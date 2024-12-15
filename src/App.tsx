import Navbar from './components/Navbar';
import CategorySection from './components/sections/Category';
import HeroSection from './components/sections/Hero';
import ProductsSection from './components/sections/Products';

export default function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <ProductsSection />
    </div>
  );
}
