import { ShoppingBag } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative wrapper h-[400px] md:h-[300px] lg:h-fit bg-gradient-to-tr from-pink-400 via-pink-400 to-pink-300 my-4 flex flex-col rounded-xl mt-20">
      <div className="flex flex-col gap-y-2 lg:gap-y-3 p-4 md:p-6 lg:p-16 md:max-w-[400px] lg:max-w-[650px]">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-pretty">
          Better Choices, Better Deals
        </h2>
        <p className="text-sm lg:text-base text-white/90 text-pretty">
          Shop from a variety of products while enjoying exceptional deals and a
          premium shopping experience.
        </p>
        <button className="group w-fit bg-white text-pink-600 text-base font-medium flex items-center gap-x-2 mt-4 lg:mt-6 rounded-lg px-6 py-2 focus:ring ring-pink-600 border-2 border-transparent hover:border-pink-600 transition duration-300">
          <ShoppingBag className="size-5 translate-x-[-15px] group-hover:translate-x-0 opacity-0 transition duration-200 group-hover:opacity-100" />
          <p className="translate-x-[-15px] transition-transform duration-300 group-hover:translate-x-0">
            Shop Now
          </p>
        </button>
      </div>
      <img
        src="/hero.png"
        alt="Hero Image"
        className="h-[200px] lg:h-[260px] object-contain absolute bottom-[-20px] right-[-20px]"
      />
    </section>
  );
}
