import "./App.css";
import Navbar from "./components/Navbar";
import MyGeoJSONMap from "./components/leaflet_maps/MapComponent";
import MyChart from "./components/chartjs_charts/MyChart";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <>
      <div className="bg-[#242424]">
        <div className="">
          <Navbar />
        </div>
        <div className="w-full md:w-[calc(100%-250px)]">
          <section id="landing-page">
            <LandingPage />
          </section>
          <MyGeoJSONMap />
          <MyChart />
        </div>
      </div>
    </>
  );
}

export default App;
