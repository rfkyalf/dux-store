import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-gradient-to-r from-pink-400 via-pink-400 to-pink-300">
      <div className="wrapper py-4 flex flex-col md:flex-row md:gap-x-8 gap-y-4">
        <div className="relative flex flex-col gap-y-2 w-full md:w-[300px] bg-white p-4 rounded-xl">
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#db277720_1px,transparent_1px),linear-gradient(to_bottom,#db277720_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
          <Logo />
          <p className="text-sm md:text-base text-neutral-500">
            DuxStore is a simple e-commerce platform powered by Redux and
            FakeStoreAPI.
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-white text-base md:text-lg font-medium">
            Find me on:
          </p>
          <ul className="flex items-center gap-x-2">
            <li>
              <a href="https://www.linkedin.com/in/rifkyalfarez/">
                <img
                  src="/linkedin.png"
                  alt="linkedin"
                  className="size-8 hover:scale-105"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/rfkyalf">
                <img
                  src="/github.png"
                  alt="github"
                  className="size-8 hover:scale-105"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rfkyalf/">
                <img
                  src="/instagram.png"
                  alt="instagram"
                  className="size-8 hover:scale-105"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper flex items-center justify-center py-2 border-t border-white">
        <p className="text-sm md:text-base text-white font-medium">
          Created by{' '}
          <span className="bg-white hover:bg-white/90 text-pink-600 px-2 rounded-lg">
            <a href="https://www.rifkyalfarez.my.id">Rifky Alfarez</a>
          </span>
        </p>
      </div>
    </footer>
  );
}
