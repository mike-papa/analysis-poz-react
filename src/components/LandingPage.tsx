// LandingPage.tsx
import caduceus from "../assets/caduceus.svg";
import stethoscope from "../assets/stethoscope.svg";
import pills from "../assets/pillswebp.webp";
const LandingPage = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-green-300 to-teal-200">
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
      <div className="z-10 text-white text-center p-12">
        <h1 className="text-6xl font-bold mb-6">
          2024 Analiza Podmiotów <br></br> z Aktualną Akredytacją<br></br>
          Ministra Zdrowia
        </h1>
        <p className="text-xl mb-4">
          Na podstawie danych z 26 listopada 2023 r.
        </p>
        <button className="mt-4 bg-white text-gray-800 font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition duration-300">
          Przegląd
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
