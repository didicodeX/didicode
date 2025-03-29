import Image from "next/image";

export default function ReseauxSociaux() {
  return (
    <div className="bg-red flex gap-4 items-center">
      <a href="https://github.com/didicodeX" target="_blank" rel="noopener noreferrer">
        {/* Icône en mode Light */}
        <Image
          src="/images/icons/Github_light.svg"
          alt="GitHub Light"
          width={28}
          height={28}
          className="block dark:hidden"
        />

        {/* Icône en mode Dark */}
        <Image
          src="/images/icons/Github_dark.svg"
          alt="GitHub Dark"
          width={28}
          height={28}
          className="hidden dark:block"
        />
      </a>
      <a href="mailto:dylane@didicode.com">
        <Image src="images/icons/gmail.svg" alt="github" width={28} height={28} />
      </a>
      <a href="https://wa.me/15066554409">
        <Image src="images/icons/whatsapp.svg" alt="github" width={28} height={28} />
      </a>
    </div>
  );
}
