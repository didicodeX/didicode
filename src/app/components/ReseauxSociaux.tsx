import Image from 'next/image';

export default function ReseauxSociaux(){
  return (
    <div className="bg-red flex gap-4">
      <a href="">
        <Image src="/icons/github_dark.svg" alt="github" width={32} height={32} />
      </a>
      <a href="">
        <Image src="/icons/gmail.svg" alt="github" width={32} height={32} />
      </a>
      <a href="">
        <Image src="/icons/whatsapp.svg" alt="github" width={32} height={32} />
      </a>
    </div>
  )
}