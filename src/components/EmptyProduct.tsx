export default function EmptyProduct({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="flex flex-col md:gap-y-2 lg:gap-y-4 xl:gap-y-6 items-center justify-center bg-gradient-to-r from-pink-400 via-pink-400 to-pink-300 rounded-lg p-2 md:p-6 lg:p-8 xl:p-12">
      <h3 className="text-2xl lg:text-3xl text-white font-medium text-pretty">
        {title}
      </h3>
      <img
        src={image}
        alt={title}
        className="size-52 lg:size-60 object-contain"
      />
    </div>
  );
}
