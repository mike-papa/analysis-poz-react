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
        <div className="custom-md-1200px:mr-8 custom-md-1200px:ml-8">
          <p className={"text-lg px-4 text-left"}>
            Dla każdej strony internetowej została przeprowadzona analiza z
            wykorzystaniem narzędzia PageSpeed Insights (
            {
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://pagespeed.web.dev"
              >
                pagespeed.web.dev
              </a>
            }
            ,{" "}
            {
              <a
                className="text-blue-500 hover:text-blue-700"
                href="https://developers.google.com/speed/docs/insights/rest/v5/pagespeedapi/runpagespeed"
              >
                API
              </a>
            }
            ) dla urządzeń desktopowych. W wyniku analizy każda strona otrzymała
            ocenę od 0 do 100 w czterech kategoriach: wydajność, dostępność,
            najlepsze praktyki oraz SEO. Na tej podstawie została następnie
            obliczona średnia ocena dla każdej strony internetowej.
          </p>
          <br />
          <p className={"text-lg px-4 text-left"}>
            Wydajność: Ta kategoria mierzy, jak szybko strona ładuje i staje się
            gotowa do interakcji z użytkownikiem. Ocena wydajności opiera się na
            różnorodnych metrykach, takich jak szybkość wyświetlania treści
            (First Contentful Paint), szybkość osiągnięcia pełnej
            interaktywności (Time to Interactive), opóźnienie pierwszego
            wprowadzenia danych (First Input Delay), i wiele innych.
          </p>
          <br />
          <p className={"text-lg px-4 text-left"}>
            Dostępność: Ocena dostępności skupia się na tym, jak łatwo
            użytkownicy, w tym osoby z niepełnosprawnościami, mogą korzystać ze
            strony. Dostępność jest mierzona poprzez sprawdzenie, czy strona
            stosuje odpowiednie praktyki, takie jak semantyczne znaczniki HTML,
            odpowiednie etykietowanie elementów interaktywnych, odpowiedni
            kontrast kolorów, i czy strona jest funkcjonalna dla użytkowników
            korzystających z narzędzi wspomagających, tj. czytniki ekranu.
          </p>
          <br />
          <p className={"text-lg px-4 text-left"}>
            Najlepsze praktyki: Ocena czy strona stosuje się do ogólnie
            przyjętych dobrych praktyk w projektowaniu stron internetowych. Może
            to obejmować sprawdzenie, czy strona nie używa przestarzałych
            narzędzi, czy stosuje bezpieczne połączenia (HTTPS), czy unika
            błędów w konsoli przeglądarki, a także inne czynniki, które mogą
            wpływać na jakość i bezpieczeństwo witryny.
          </p>
          <br />
          <p className={"text-lg px-4 text-left"}>
            SEO (Search Engine Optimization): SEO dotyczy optymalizacji strony
            pod względem lepszego indeksowania przez wyszukiwarki i uzyskiwania
            wyższej pozycji w wynikach wyszukiwania. W tej kategorii analizowane
            są takie elementy, jak obecność metatagów opisowych, poprawne użycie
            nagłówków (h1, h2, itp.), dostępność treści dla
            wyszukiwarek-robotów, odpowiednia struktura URL i responsywność
            strony internetowej. Wysokie wyniki w SEO zazwyczaj przekładają się
            na lepszą widoczność w wyszukiwarkach i potencjalnie większy ruch na
            stronie internetowej.
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
