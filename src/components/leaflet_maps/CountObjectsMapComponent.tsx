import scores from "../../data/count_objects_by_type_and_voivodeship.json";
import CustomGradesMap from "./CustomMap";

const CountObjectsMapComponent: React.FC = () => {
  const getColorPOZ = (score: number) => {
    if (score > 20) {
      return "#07b80d";
    } else if (score > 15) {
      return "#87de6d";
    } else if (score > 10) {
      return "#fccf03";
    } else if (score > 5) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };
  const getColorSzpital = (score: number) => {
    if (score > 20) {
      return "#07b80d";
    } else if (score > 15) {
      return "#87de6d";
    } else if (score > 10) {
      return "#fccf03";
    } else if (score > 5) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };
  const getColorJDP = (score: number) => {
    if (score > 4) {
      return "#07b80d";
    } else if (score > 3) {
      return "#87de6d";
    } else if (score > 2) {
      return "#fccf03";
    } else if (score > 1) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };
  const getColorSum_all = (score: number) => {
    if (score > 30) {
      return "#07b80d";
    } else if (score > 25) {
      return "#87de6d";
    } else if (score > 20) {
      return "#fccf03";
    } else if (score > 15) {
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
        Suma obiektów w województwach
      </h1>
      <div className="flex flex-wrap justify-center items-stretch">
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="POZ"
              getColor={getColorPOZ}
              popupText="Suma"
            />
          </div>
          <p className={descriptionClass}>Suma wszystkich obiektów POZ</p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="SZPITAL"
              getColor={getColorSzpital}
              popupText="Suma"
            />
          </div>
          <p className={descriptionClass}>Suma wszystkich szpitali</p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="JDP"
              getColor={getColorJDP}
              popupText="Suma"
            />
          </div>
          <p className={descriptionClass}>Suma wszystkich obiektów JDP</p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomGradesMap
              scores={scores}
              scoreProperty="Sum_all"
              getColor={getColorSum_all}
              popupText="Suma"
            />
          </div>
          <p className={descriptionClass}>Suma wszystkich obiektów</p>
        </div>
      </div>
    </div>
  );
};

export default CountObjectsMapComponent;
