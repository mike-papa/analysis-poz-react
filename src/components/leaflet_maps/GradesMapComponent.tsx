import scores from "../../data/mean_objects_score_by_type_and_voivodeship.json";
import CustomMap from "./CustomMap";
import EntititiesScoresDistributionChart from "../chartjs_charts/EntitiesScoresDistributionChart";

const GradesMapComponent: React.FC = () => {
  const getColor = (score: number) => {
    if (score > 84) {
      return "#07b80d";
    } else if (score > 82) {
      return "#87de6d";
    } else if (score > 80) {
      return "#fccf03";
    } else if (score > 78) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };

  const mapContainer = "mb-2 custom-md-1200px:mb-8 custom-md-1200px:w-1/2";
  const mapClass = "h-[450px]  min-w-[500px]";
  const descriptionClass = "text-center text-lg px-4";
  return (
    <div className="pt-10 text-black dark:text-white">
      <h1 className="text-4xl font-extrabold custom-md-1200px:mb-10 mb-5 text-center">
        Średnie oceny w województwach
      </h1>
      <div className="flex flex-wrap justify-center items-stretch">
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomMap
              scores={scores}
              scoreProperty="POZ"
              getColor={getColor}
              popupText="Ocena"
            />
          </div>
          <p className={descriptionClass}>
            Średnie oceny wszystkich obiektów POZ
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomMap
              scores={scores}
              scoreProperty="SZPITAL"
              getColor={getColor}
              popupText="Ocena"
            />
          </div>
          <p className={descriptionClass}>Średnie oceny wszystkich szpitali</p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomMap
              scores={scores}
              scoreProperty="JDP"
              getColor={getColor}
              popupText="Ocena"
            />
          </div>
          <p className={descriptionClass}>
            Średnie oceny wszystkich obiektów JDP
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomMap
              scores={scores}
              scoreProperty="Mean_all"
              getColor={getColor}
              popupText="Ocena"
            />
          </div>
          <p className={descriptionClass}>Średnie oceny wszystkich obiektów</p>
        </div>
        <div className=" w-full ">
          <h1 className="text-xl font-extrabold mb-5 text-center">
            Rozkład ocen wszystkich obiektów
          </h1>
          <EntititiesScoresDistributionChart />
        </div>
      </div>
    </div>
  );
};

export default GradesMapComponent;
