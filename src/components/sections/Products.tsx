import { fetchProducts } from '@/stores/slice/productSlice';
import { AppDispatch, RootState } from '@/stores/store';
import { Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductsSection() {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="wrapper my-8">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-6">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="bg-gradient-to-bl from-pink-500 via-pink-500 to-pink-400 flex flex-col justify-between gap-y-1 p-2 rounded-xl"
            >
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
                <p className="bg-blue-500 p-1 rounded-full">
                  <Plus className="size-5 text-white" />
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
