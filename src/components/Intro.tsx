import Image from "next/image";
import Button from "./Button";
export default function IntroPage() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <div className="flex gap-2 items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/images/me.png"
              alt="me"
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <h2>Dylane Tano</h2>
        </div>
        <div className="text-md flex gap-2 items-center mt-2 md:mt-4">
          <span className="text-lg sm:text-lg md:text-xl font-semibold">
            FinTech Developer
          </span>
          <Image
            src="/images/canada.png"
            alt="Canada flag"
            width={32}
            height={32}
          />
        </div>
      </div>
      <p>
        I'm a fintech developer passionate about building reliable, scalable
        payment platforms and SaaS solutions. My journey started with web
        development, but I quickly gravitated toward fintech after realizing the
        impact that well-built payment systems can have on businesses.
      </p>
      <div className="flex justify-center">
        <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
          <Button>Download My Resume</Button>
        </a>
      </div>
    </section>
  );
}
