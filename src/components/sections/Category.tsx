import {
  fetchCategories,
  setSelectedCategory,
} from '@/stores/slice/productSlice';
import { AppDispatch, RootState } from '@/stores/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CategorySection() {
  const { loading, error, categories } = useSelector(
    (state: RootState) => state.products
  );
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    dispatch(setSelectedCategory(category));
  };

  const colors = [
    'from-sky-400 via-sky-500 to-sky-500',
    'from-emerald-400 via-emerald-500 to-emerald-500',
    'from-orange-400 via-orange-500 to-orange-500',
    'from-violet-400 via-violet-500 to-violet-500',
  ];

  const categoryImage = [
    '/electronics.png',
    '/jewelry.png',
    '/man-shirt.png',
    '/woman-shirt.png',
  ];

  return (
    <section className="wrapper mt-8 md:mt-10 mb-4">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-6 xl:gap-8">
        <button
          onClick={() => handleCategoryClick('all')}
          className={`group relative bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-fuchsia-500 rounded-md p-4 hover:scale-105 transition-transform duration-300 ring-4 ${
            activeCategory === 'all' ? 'ring-yellow-400' : 'ring-transparent'
          }`}
        >
          <img
            src="/all.png"
            alt="All"
            className="group-hover:-rotate-12 transition-transform duration-300 absolute bottom-[-10px] left-[-10px] w-14 md:w-16 object-contain"
          />
          <p className="text-base text-white font-medium text-right">
            All Categories
          </p>
        </button>
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-neutral-300 rounded-md animate-pulse p-4"
            ></div>
          ))
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`group relative bg-gradient-to-tr 
              ${colors[index % colors.length]} ring-4 ${
                activeCategory === category
                  ? 'ring-yellow-400'
                  : 'ring-transparent'
              } rounded-md p-4 hover:scale-105 transition-transform duration-300`}
            >
              <img
                src={categoryImage[index % categoryImage.length]}
                alt={category}
                className="group-hover:-rotate-12 transition-transform duration-300 absolute bottom-[-10px] left-[-10px] w-14 md:w-16 object-contain"
              />
              <p className="text-base text-white font-medium capitalize text-right">
                {category}
              </p>
            </button>
          ))
        )}
      </ul>
    </section>
  );
}
