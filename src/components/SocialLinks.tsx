import Image from "next/image";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/didicodeX",
    hasVariant: true,
  },
  {
    name: "gmail",
    href: "mailto:dylane@didicode.com",
    hasVariant: false,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/dylane-didicode/",
    hasVariant: false,
  },
  {
    name: "X (formerly Twitter)",
    href: "https://x.com/didicodeDX",
    hasVariant: true,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.hasVariant ? (
            <>
              <Image
                src={`/images/icons/${link.name}_light.svg`}
                alt={link.name}
                width={28}
                height={28}
                className="block dark:hidden"
              />
              <Image
                src={`/images/icons/${link.name}_dark.svg`}
                alt={link.name}
                width={28}
                height={28}
                className="hidden dark:block"
              />
            </>
          ) : (
            <Image
              src={`/images/icons/${link.name}.svg`}
              alt={link.name}
              width={28}
              height={28}
            />
          )}
        </a>
      ))}
    </div>
  );
}
