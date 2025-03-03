import Image from "next/image";
interface Link {
  url: string;
  text: string;
}

interface Items {
  links: Link[];
  iconPath: string;
}
const ListWithLinks = ({ links, iconPath }: Items) => {
  return (
    <ul className="space-y-2 mt-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 flex gap-2 items-center hover:underline"
          >
            <Image
              src={iconPath}
              width={25}
              height={25}
              alt="link icon"
              className="w-30 object-contain"
            />
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListWithLinks;
