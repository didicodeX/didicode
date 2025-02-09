import Button from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-SpaceGrotesk font-bold text-4xl">Maîtrise les techs du web pour devenir développeur et vivre de tes compétences</h1>
      <p className="font-text text-lg text-secondary mt-4">
        Ceci est une démonstration de mon design system minimaliste 🎨
      </p>
      <a href="#" className="text-link hover:text-link-hover text-md mt-4">
        Découvrir plus
      </a>
      <Button/>
    </div>
  );
}
