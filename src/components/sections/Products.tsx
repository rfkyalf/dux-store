import {
  addCart,
  addFavorite,
  fetchProducts,
  removeCart,
  removeFavorite,
} from '@/stores/slice/productSlice';
import { AppDispatch, RootState } from '@/stores/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../CardProduct';

export default function ProductsSection() {
  const { loading, error, filteredProducts, favorites, cart } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(favorites);
  console.log(cart);

  return (
    <section className="wrapper my-8">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6">
        {loading ? (
          Array.from({ length: 10 }).map((_, i) => (
            <li
              key={i}
              className="bg-neutral-300 h-[200px] rounded-xl animate-pulse"
            ></li>
          ))
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          filteredProducts.map((product) => {
            const isFavorited = favorites.some((fav) => fav.id === product.id);
            const handleAddToFav = () => {
              if (isFavorited) {
                dispatch(removeFavorite(product.id));
              } else {
                dispatch(addFavorite(product));
              }
            };
            const isInCart = cart.some((crt) => crt.id === product.id);
            const handleAddtoCart = () => {
              if (isInCart) {
                dispatch(removeCart(product.id));
              } else {
                dispatch(addCart(product));
              }
            };

            return (
              <CardProduct
                key={product.id}
                product={product}
                isFavorited={isFavorited}
                isInCart={isInCart}
                addToCart={handleAddtoCart}
                addToFav={handleAddToFav}
              />
            );
          })
        )}
      </ul>
    </section>
  );
}
