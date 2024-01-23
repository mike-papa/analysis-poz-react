import GradesMapAll from "./GradesMapAll";
import GradesMapJDP from "./GradesMapJDP";
import GradesMapPOZ from "./GradesMapPOZ";
import GradesMapSzpital from "./GradesMapSzpital";

const GradesMapComponent: React.FC = () => {
  return (
    <div className="pt-10 text-black dark:text-white">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        Średnie oceny w województwach
      </h1>
      <div className="p-4 flex flex-col custom-md-1200px:flex-row justify-center items-center">
        <div className="">
          <div className="flex custom-md-1200px:h-[500px] custom-md-1200px:w-[600px] w-auto h-[500px]">
            <GradesMapPOZ />
          </div>

          <div className="max-w-2xl w-full">
            <div className="text-lg space-y-6 text-center">
              <p className="mb-6">Średnie oceny wszystkich obiektów POZ</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex custom-md-1200px:h-[500px] custom-md-1200px:w-[600px] w-auto h-[500px]">
            <GradesMapSzpital />
          </div>

          <div className="max-w-2xl w-full">
            <div className="text-lg space-y-6 text-center">
              <p className="mb-6">Średnie oceny wszystkich szpitali</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col custom-md-1200px:flex-row justify-center items-center">
        <div className="">
          <div className="flex custom-md-1200px:h-[500px] custom-md-1200px:w-[600px] w-auto h-[500px]">
            <GradesMapJDP />
          </div>

          <div className="max-w-2xl w-full">
            <div className="text-lg space-y-6 text-center">
              <p className="mb-6">Średnie oceny wszystkich obiektów JDP</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex custom-md-1200px:h-[500px] custom-md-1200px:w-[600px] w-auto h-[500px]">
            <GradesMapAll />
          </div>

          <div className="max-w-2xl w-full">
            <div className="text-lg space-y-6 text-center">
              <p className="mb-6">Średnie oceny wszystkich obiektów.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradesMapComponent;
