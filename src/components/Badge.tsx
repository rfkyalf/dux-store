import { cn } from '@/lib/utils';

export default function Badge({
  total_item,
  className,
}: {
  total_item: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'absolute -top-2 -right-2 size-4 bg-pink-500 rounded-full flex items-center justify-center text-xs text-pink-50',
        className
      )}
    >
      {total_item}
    </div>
  );
}
