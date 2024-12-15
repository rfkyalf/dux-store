import { fetchCategories } from '@/stores/slice/productSlice';
import { AppDispatch, RootState } from '@/stores/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CategorySection() {
  const { categories } = useSelector((state: RootState) => state.products);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
    <div className="wrapper mt-8 md:mt-10 mb-4">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-6 xl:gap-8">
        <li className="relative bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-fuchsia-500 rounded-md p-4">
          <img
            src="/all.png"
            alt="All"
            className="absolute bottom-[-10px] left-[-10px] w-14 md:w-16 object-contain"
          />
          <p className="text-base text-neutral-50 font-medium text-right">
            All Categories
          </p>
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className={`relative bg-gradient-to-tr 
              ${colors[index % colors.length]} rounded-md p-4`}
          >
            <img
              src={categoryImage[index % categoryImage.length]}
              alt={category}
              className="absolute bottom-[-10px] left-[-10px] w-14 md:w-16 object-contain"
            />
            <p className="text-base text-neutral-50 font-medium capitalize text-right">
              {category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
