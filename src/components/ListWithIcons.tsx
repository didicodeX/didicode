import Image from "next/image";
interface Items {
  items: string[];
  iconPath: string
}
const ListWithIcons = ({ items, iconPath }: Items) => {
  return (
    <ul className="pl-5 flex flex-col gap-y-4">
      {items.map((item: string, index: number) => (
        <li key={index} className="flex items-center gap-2">
          <Image
            src={iconPath}
            width={25}
            height={25}
            alt="icon"
            className="w-30 object-contain"
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListWithIcons;
