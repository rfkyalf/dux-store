import { Product } from '@/stores/slice/productSlice';
import { Heart, ShoppingCart } from 'lucide-react';

export default function CardProduct({
  product,
  addToFav,
  addToCart,
  isFavorited,
  isInCart,
}: {
  product: Product;
  addToFav: () => void;
  addToCart: () => void;
  isFavorited: boolean;
  isInCart: boolean;
}) {
  return (
    <li className="bg-gradient-to-bl from-pink-400 via-pink-400 to-pink-300 flex flex-col justify-between gap-y-1 p-2 rounded-xl">
      <img
        src={product.image}
        alt={product.title}
        className="h-[150px] object-cover object-center rounded-lg"
      />
      <h3 className="text-base text-white" title={product.title}>
        {product.title.length > 15
          ? product.title.slice(0, 15) + '...'
          : product.title}
      </h3>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm bg-emerald-500 px-2 py-1 rounded-lg text-white font-medium">
          $ {product.price}
        </p>
        <div className="flex items-center gap-x-2">
          <button
            aria-label={
              isFavorited ? 'Remove from favorites' : 'Add to favorites'
            }
            onClick={addToFav}
            className={`p-1 rounded-full ${
              isFavorited ? 'bg-rose-600' : 'bg-white'
            }`}
          >
            <Heart
              className={`size-5 ${
                isFavorited ? 'text-white' : 'text-rose-600'
              }`}
            />
          </button>
          <button
            onClick={addToCart}
            className={` p-1 rounded-full ${
              isInCart ? 'bg-blue-500' : 'bg-white'
            }`}
            aria-label={isInCart ? 'Remove from cart' : 'Add to cart'}
          >
            <ShoppingCart
              className={`size-5 ${isInCart ? 'text-white' : 'text-blue-500'}`}
            />
          </button>
        </div>
      </div>
    </li>
  );
}
