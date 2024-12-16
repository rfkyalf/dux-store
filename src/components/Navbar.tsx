import { Heart, Minus, Plus, ShoppingCart } from 'lucide-react';
import Badge from './Badge';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/stores/store';
import DialogModal from './Dialog';
import CardProduct from './CardProduct';
import {
  addCart,
  addFavorite,
  clearCart,
  decrementCart,
  removeCart,
  removeFavorite,
} from '@/stores/slice/productSlice';
import EmptyProduct from './EmptyProduct';
import Logo from './Logo';
import { useToast } from '@/hooks/use-toast';

export default function Navbar() {
  const { favorites, cart } = useSelector((state: RootState) => state.products);
  const dispatch: AppDispatch = useDispatch();
  const { toast } = useToast();

  const totalFavorites = favorites.length;
  const totalCart = cart.length;
  const totalPrice = cart.reduce(
    (acc, crt) => acc + crt.quantity * crt.price,
    0
  );

  const handleCheckOut = () => {
    const audio = new Audio('/audio.mp3');
    audio.play();
    dispatch(clearCart());
    toast({
      description:
        '✅ Congratulations! Your purchase has been checked out. Thank you for shopping!',
    });
  };

  return (
    <div className="w-full shadow shadow-pink-200 bg-neutral-50 fixed top-0 z-40">
      <div className="wrapper py-4 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <DialogModal
            trigger={
              <div className="relative">
                <Heart className="size-6 text-neutral-600" />
                <Badge total_item={totalFavorites} />
              </div>
            }
            title={
              <div className="relative">
                <img
                  src="/favorite.png"
                  alt="Favorite"
                  className="absolute top-[-50px] right-[-50px] h-[100px] object-contain"
                />
                <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-400 bg-clip-text">
                  Favorites Products
                </p>
              </div>
            }
            content={
              <>
                {favorites.length === 0 && (
                  <EmptyProduct
                    title="Opps, There's nothing here. Please add some."
                    image="/empty.png"
                  />
                )}
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4">
                  {favorites.map((fav) => {
                    const isFavorited = favorites.some(
                      (fav) => fav.id === fav.id
                    );
                    const handleAddToFav = () => {
                      if (isFavorited) {
                        dispatch(removeFavorite(fav.id));
                      } else {
                        dispatch(addFavorite(fav));
                      }
                    };

                    const isInCart = cart.some((crt) => crt.id === fav.id);
                    const handleAddtoCart = () => {
                      if (isInCart) {
                        dispatch(removeCart(fav.id));
                      } else {
                        dispatch(addCart(fav));
                      }
                    };

                    return (
                      <CardProduct
                        key={fav.id}
                        product={fav}
                        addToCart={handleAddtoCart}
                        isInCart={isInCart}
                        isFavorited={isFavorited}
                        addToFav={handleAddToFav}
                      />
                    );
                  })}
                </ul>
              </>
            }
          />
          <DialogModal
            trigger={
              <div className="relative">
                <ShoppingCart className="size-6 text-neutral-600" />
                <Badge total_item={totalCart} />
              </div>
            }
            title={
              <div className="relative">
                <img
                  src="/cart1.png"
                  alt="Cart"
                  className="absolute top-[-50px] right-[-50px] h-[100px] object-contain"
                />
                <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-400 bg-clip-text">
                  Shopping Cart
                </p>
              </div>
            }
            content={
              <>
                {cart.length === 0 && (
                  <EmptyProduct
                    title="Opps, There's nothing here. Please add some."
                    image="/empty.png"
                  />
                )}
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {cart.map((crt) => {
                    return (
                      <li
                        key={crt.id}
                        className="flex flex-col gap-y-2 border-b border-dashed py-2 md:py-4 border-neutral-300"
                      >
                        <div className="flex items-center gap-x-2">
                          <img
                            src={crt.image}
                            alt={crt.title}
                            className="size-14 object-cover object-center bg-pink-300 rounded-lg p-1"
                          />
                          <div className="flex flex-col">
                            <h3 className="text-neutral-800 font-medium text-base">
                              {crt.title.length > 15
                                ? crt.title.slice(0, 15) + '...'
                                : crt.title}
                            </h3>
                            <p className="text-sm text-neutral-700">
                              $ {crt.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-x-2">
                            <button
                              onClick={() => dispatch(decrementCart(crt.id))}
                              className="bg-neutral-700 px-1 rounded-lg"
                            >
                              <Minus className="size-4 text-white" />
                            </button>
                            <p className="border border-neutral-300 rounded-lg px-2">
                              {crt.quantity}
                            </p>
                            <button
                              onClick={() => dispatch(addCart(crt))}
                              className="bg-neutral-700 px-1 rounded-lg"
                            >
                              <Plus className="size-4 text-white" />
                            </button>
                          </div>
                          <p className="bg-green-500 text-white text-sm px-2 py-1 rounded-lg">
                            ${(crt.quantity * crt.price).toFixed(2)}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </>
            }
            footer={
              <>
                <div className="flex items-center justify-between pt-4">
                  <p className="text-base  bg-green-500 text-white px-2 py-1 rounded-lg w-fit">
                    ${totalPrice.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-x-4">
                    <button
                      onClick={() => dispatch(clearCart())}
                      disabled={totalCart === 0}
                      className="bg-red-500 text-white text-base px-2 py-1 rounded-lg disabled:bg-red-500/50"
                    >
                      Clear
                    </button>
                    <button
                      onClick={handleCheckOut}
                      disabled={totalPrice === 0}
                      className="bg-neutral-900 text-white text-base px-2 py-1 rounded-lg disabled:bg-neutral-900/50"
                    >
                      Check Out
                    </button>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
