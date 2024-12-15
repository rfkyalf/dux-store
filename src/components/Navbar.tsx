import { Heart, ShoppingCart } from 'lucide-react';
import Badge from './Badge';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/stores/store';
import DialogModal from './Dialog';
import CardProduct from './CardProduct';
import { addFavorite, removeFavorite } from '@/stores/slice/productSlice';

export default function Navbar() {
  const { favorites } = useSelector((state: RootState) => state.products);
  const dispatch: AppDispatch = useDispatch();

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
                  <div className="flex flex-col md:gap-y-2 lg:gap-y-4 xl:gap-y-6 items-center justify-center bg-gradient-to-r from-pink-400 via-pink-400 to-pink-300 rounded-lg p-2 md:p-6 lg:p-8 xl:p-12">
                    <h3 className="text-2xl lg:text-3xl text-white font-medium text-pretty">
                      Opps, There's nothing here. Please add some.
                    </h3>
                    <img
                      src="/empty.png"
                      alt="Empty"
                      className="size-52 lg:size-60 object-contain"
                    />
                  </div>
                )}
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4">
                  {favorites.map((fav) => {
                    const isFavorited = favorites.some(
                      (fav) => fav.id === fav.id
                    );
                    return (
                      <CardProduct
                        key={fav.id}
                        product={fav}
                        isFavorited={isFavorited}
                        onClick={() => {
                          if (isFavorited) {
                            dispatch(removeFavorite(fav.id));
                          } else {
                            dispatch(addFavorite(fav));
                          }
                        }}
                      />
                    );
                  })}
                </ul>
              </>
            }
          />
          <div className="relative">
            <ShoppingCart className="size-6 text-neutral-600" />
            <Badge total_item={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
