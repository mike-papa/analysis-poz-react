// LandingPage.tsx
import caduceus from "../assets/caduceus.svg";
import stethoscope from "../assets/stethoscope.svg";
import pills from "../assets/pillswebp.webp";
const LandingPage = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-light-one via-light-two to-light-three
      dark:from-dark-one dark:via-dark-two dark:to-dark-three"
    >
      <img
        src={caduceus}
        alt="Caduceus"
        className="absolute w-[100px] md:w-[250px] left-10 top-20 opacity-70 z-0"
      />
      <img
        src={stethoscope}
        alt="Stethoscope"
        className="absolute w-[100px] md:w-[200px] right-10 bottom-10 opacity-70 z-0"
      />
      <img
        src={pills}
        alt="Pills"
        className="absolute w-[100px] md:w-[200px] left-10 bottom-10 opacity-70 z-0"
      />
      <div className="z-10 dark:text-white text-black  text-center p-12">
        <h1 className="text-6xl font-bold mb-6">
          2024 Analiza Podmiotów <br></br> z Aktualną Akredytacją<br></br>
          Ministra Zdrowia
        </h1>
        <p className="text-xl mb-4">
          Na podstawie danych z 26 listopada 2023 r.
        </p>
        <div className="mt-12">
          <a
            href="#overview"
            className="bg-white text-gray-800 font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Przegląd
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
