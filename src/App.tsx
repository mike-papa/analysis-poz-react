import "./App.css";
import Navbar from "./components/Navbar";
import MyGeoJSONMap from "./components/leaflet_maps/MapComponent";
import MyChart from "./components/chartjs_charts/MyChart";
import LandingPage from "./components/LandingPage";
import Overview from "./components/Overview";
import { ThemeProvider } from "./context/ThemeContext";
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
            <MyGeoJSONMap />
            <MyChart />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
