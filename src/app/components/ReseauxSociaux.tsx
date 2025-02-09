import Image from "next/image";

export default function ReseauxSociaux() {
  return (
    <div className="bg-red flex gap-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        {/* Icône en mode Light */}
        <Image
          src="/icons/github_light.svg"
          alt="GitHub Light"
          width={28}
          height={28}
          className="block dark:hidden"
        />

        {/* Icône en mode Dark */}
        <Image
          src="/icons/github_dark.svg"
          alt="GitHub Dark"
          width={28}
          height={28}
          className="hidden dark:block"
        />
      </a>
      <a href="">
        <Image src="/icons/gmail.svg" alt="github" width={28} height={28} />
      </a>
      <a href="">
        <Image src="/icons/whatsapp.svg" alt="github" width={28} height={28} />
      </a>
    </div>
  );
}
