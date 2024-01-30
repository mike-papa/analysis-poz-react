import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Overview from "./components/Overview";
import { ThemeProvider } from "./context/ThemeContext";
import EntityTypeComponent from "./components/chartjs_charts/enity_type_chart/EntityTypeComponent";
import GradesMapComponent from "./components/leaflet_maps/GradesMapComponent";
import PatronsComponent from "./components/patrons/PatronsComponent";
import CountObjectsMapComponent from "./components/leaflet_maps/CountObjectsMapComponent";
import CalculateObjectsPer100kMapComponent from "./components/leaflet_maps/CalculateObjectsPer100kMapComponent";
import DigitizationAnalysisMapComponent from "./components/leaflet_maps/DigitizationAnalysisMapComponent";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="bg-light-six dark:bg-dark-six">
          <div className="">
            <Navbar />
          </div>
          <div className="w-full md:w-[calc(100%-250px)]">
            <section id="landing-page">
              <LandingPage />
            </section>
            <section id="overview">
              <Overview />
            </section>
            <section id="entity-type-chart">
              <EntityTypeComponent />
            </section>
            <section id="count-objects-map-component">
              <CountObjectsMapComponent />
            </section>
            <section id="calculate-objects-per-100k-map-component">
              <CalculateObjectsPer100kMapComponent />
            </section>
            <section id="grades-map-component">
              <GradesMapComponent />
            </section>
            <section id="digitization-analysis-map-component">
              <DigitizationAnalysisMapComponent />
            </section>
            <section id="patrons-component">
              <PatronsComponent />
            </section>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
