import scores from "../../data/calculate_objects_per_100k_by_type_and_voivodeship.json";
import CustomGradesMap from "./CustomMap";

const CalculateObjectsPer100kMapComponent: React.FC = () => {
  const getColorPOZ = (score: number) => {
    if (score > 1) {
      return "#07b80d";
    } else if (score > 0.7) {
      return "#87de6d";
    } else if (score > 0.4) {
      return "#fccf03";
    } else if (score > 0.1) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };
  const getColorSzpital = (score: number) => {
    if (score > 1) {
      return "#07b80d";
    } else if (score > 0.7) {
      return "#87de6d";
    } else if (score > 0.4) {
      return "#fccf03";
    } else if (score > 0.1) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };
  const getColorJDP = (score: number) => {
    if (score > 0.15) {
      return "#07b80d";
    } else if (score > 0.12) {
      return "#87de6d";
    } else if (score > 0.09) {
      return "#fccf03";
    } else if (score > 0.06) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };
  const getColorSum_all = (score: number) => {
    if (score > 1.2) {
      return "#07b80d";
    } else if (score > 1) {
      return "#87de6d";
    } else if (score > 0.8) {
      return "#fccf03";
    } else if (score > 0.6) {
      return "#fc7303";
    } else if (score > 0.4) {
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
        Liczba obiektów w województwach w przeliczeniu na 100 tys. mieszkańców
      </h1>
      <div className="flex flex-wrap justify-center items-stretch">
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="POZ_per_100k"
              getColor={getColorPOZ}
              popupText="Liczba na 100 tys. mieszkańców"
              isRoundedScore={false}
            />
          </div>
          <p className={descriptionClass}>
            Liczba wszystkich obiektów POZ w przeliczeniu na 100 tys.
            mieszkańców
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="SZPITAL_per_100k"
              getColor={getColorSzpital}
              popupText="Liczba na 100 tys. mieszkańców"
              isRoundedScore={false}
            />
          </div>
          <p className={descriptionClass}>
            Liczba wszystkich szpitali w przeliczeniu na 100 tys. mieszkańców
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="JDP_per_100k"
              getColor={getColorJDP}
              popupText="Liczba na 100 tys. mieszkańców"
              isRoundedScore={false}
            />
          </div>
          <p className={descriptionClass}>
            Liczba wszystkich obiektów JDP w przeliczeniu na 100 tys.
            mieszkańców
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="Sum_all_per_100k"
              getColor={getColorSum_all}
              popupText="Liczba na 100 tys. mieszkańców"
              isRoundedScore={false}
            />
          </div>
          <p className={descriptionClass}>
            Liczba wszystkich obiektów w przeliczeniu na 100 tys. mieszkańców
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculateObjectsPer100kMapComponent;
