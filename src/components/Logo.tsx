import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-x-2">
      <img
        src="/logo.png"
        alt="DuxStore Logo"
        className="size-6 lg:size-7 object-cover"
      />
      <h1
        className={cn(
          'text-lg lg:text-xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text',
          className
        )}
      >
        DuxStore
      </h1>
    </div>
  );
}
