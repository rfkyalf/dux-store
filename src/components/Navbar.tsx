import { Heart, ShoppingCart } from 'lucide-react';
import Badge from './Badge';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';

export default function Navbar() {
  const { favorites } = useSelector((state: RootState) => state.products);

  const totalFavorites = favorites.length;
  return (
    <div className="w-full shadow shadow-pink-200 bg-neutral-50 fixed z-40">
      <div className="wrapper py-4 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img
            src="/logo.png"
            alt="DuxStore Logo"
            className="size-6 lg:size-7 object-cover"
          />
          <h1 className="text-lg lg:text-xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text">
            DuxStore
          </h1>
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <div className="relative">
            <Heart className="size-6 text-neutral-600" />
            <Badge total_item={totalFavorites} />
          </div>
          <div className="relative">
            <ShoppingCart className="size-6 text-neutral-600" />
            <Badge total_item={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
