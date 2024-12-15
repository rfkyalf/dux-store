import { Heart, ShoppingCart } from 'lucide-react';
import Badge from './Badge';

export default function Navbar() {
  return (
    <div className="w-full bg-neutral-50 border-b border-pink-200">
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
            <Badge total_item={1} />
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
