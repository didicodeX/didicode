import Image from "next/image";

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

export default function Service({ image, title, description }: ServiceProps) {
  return (
    <div
      className="p-6 bg-slate-50 dark:bg-primary-900 border border-slate-100 dark:border-primary-700 shadow-md rounded-lg size-80 grid items-center justify-items-center 
      transition-transform transform hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-700 duration-300 cursor-pointer"
    >
      <Image src={image} alt={title} width={100} height={100} className="transition-transform duration-300 hover:rotate-6" />
      <h3 className="text-xl font-SpaceGrotesk font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}
