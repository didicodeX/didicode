import Image from "next/image";
import Button from "./Button";
//https://flowcv.com/resume/vilihu3ewa6u
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
            JavaScript Developer
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
        Passionate web developer specializing in JavaScript technologies. I’m proficient in React and Node.js, and have successfully built real-world projects including a learning platform and a donation website. Graduated from CCNB in 2025, I’m actively looking for my first full-time role where I can keep learning, contribute to impactful projects, and grow within a dynamic team.
      </p>
      <div className="flex justify-center">
        {/* 👉 Link around the button */}
        <a href="/doc/CV_Tano_Dylane.pdf" download="CV_Tano_Dylane.pdf">
          <Button text="Download My CV" />
        </a>
      </div>
    </section>
  );
}
