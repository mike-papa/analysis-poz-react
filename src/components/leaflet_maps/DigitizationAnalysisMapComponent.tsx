import website_analysis from "../../data/website_analysis.json";
import CustomMap from "./CustomMap";
import WebScoresDistributionChart from "../chartjs_charts/WebScoresDistributionChart";

const DigitizationAnalysisMapComponent: React.FC = () => {
  const getColor1 = (score: number) => {
    if (score > 98) {
      return "#07b80d";
    } else if (score > 96) {
      return "#87de6d";
    } else if (score > 94) {
      return "#fccf03";
    } else if (score > 92) {
      return "#fc7303";
    } else if (score > 0) {
      return "#fc0303";
    } else {
      return "";
    }
  };
  const getColor2 = (score: number) => {
    if (score > 86) {
      return "#07b80d";
    } else if (score > 84) {
      return "#87de6d";
    } else if (score > 82) {
      return "#fccf03";
    } else if (score > 80) {
      return "#fc7303";
    } else if (score > 78) {
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
        Poziom cyfryzacji
      </h1>
      <div className="flex flex-wrap justify-center items-stretch">
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomMap
              scores={website_analysis}
              scoreProperty="count"
              getColor={getColor1}
              popupText="Ocena"
            />
          </div>
          <p className={descriptionClass}>
            Odsetek wszystkich obiektów ze stroną internetową
          </p>
        </div>
        <div className={mapContainer}>
          <div className={mapClass}>
            <CustomMap
              scores={website_analysis}
              scoreProperty="average_website_score"
              getColor={getColor2}
              popupText="Ocena"
              isRoundedScore={false}
            />
          </div>
          <p className={descriptionClass}>
            Średnie oceny wszystkich stron internetowych w województwach
          </p>
        </div>

        <div className=" w-full mt-14 mb-14">
          <h1 className="text-xl font-extrabold mb-5 text-center">
            Średnie oceny wszystkich stron internetowych w województwach
          </h1>
          <WebScoresDistributionChart />
        </div>
      </div>
    </div>
  );
};

export default DigitizationAnalysisMapComponent;
