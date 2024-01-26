import scores from "../../../data/mean_objects_score_by_type_and_voivodeship.json";
import CustomGradesMap from "./CustomGradesMap";

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
            <CustomGradesMap
              scores={scores}
              scoreProperty="POZ"
              getColor={getColor}
            />
          </div>
          <p className={descriptionClass}>
            Średnie oceny wszystkich obiektów POZ
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="SZPITAL"
              getColor={getColor}
            />
          </div>
          <p className={descriptionClass}>Średnie oceny wszystkich szpitali</p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="JDP"
              getColor={getColor}
            />
          </div>
          <p className={descriptionClass}>
            Średnie oceny wszystkich obiektów JDP
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="Mean_all"
              getColor={getColor}
            />
          </div>
          <p className={descriptionClass}>Średnie oceny wszystkich obiektów</p>
        </div>
      </div>
    </div>
  );
};

export default GradesMapComponent;
