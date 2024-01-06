import { MapContainer, GeoJSON } from "react-leaflet";
import { Layer, StyleFunction } from "leaflet";
import "leaflet/dist/leaflet.css";
import rawGeojsonData from "./wojewodztwa-medium.json"; // Load GeoJSON data for the map
import scores from "./region-scores.json"; // Load scoring data used for styling regions

// Cast the raw GeoJSON data to the appropriate FeatureCollection type
const geojsonData: GeoJSON.FeatureCollection =
  rawGeojsonData as GeoJSON.FeatureCollection;

const MyGeoJSONMap = () => {
  // Function to determine the color based on a given score
  const getColor = (score: number) => {
    switch (score) {
      case 5:
        return "#03fc13";
      case 4:
        return "#d3fc03";
      case 3:
        return "#fccf03";
      case 2:
        return "#fc7303";
      default:
        return "#fc0303";
    }
  };

  // Define a style function for the GeoJSON layer based on the feature's score
  const mapStyle: StyleFunction<any> = (feature) => {
    // Find the score for the region
    const score =
      scores.find((o) => o.nazwa === feature?.properties.nazwa)?.score ?? 0; //If 'score' is 'undefined', use 0 as the default value
    // Return style with the corresponding color
    return {
      fillColor: getColor(score),
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: 0.7,
    };
  };

  // Function to handle events for each feature on the GeoJSON layer
  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer) => {
    const score = scores.find(
      (o) => o.nazwa === feature.properties?.nazwa
    )?.score;
    if (feature.properties && feature.properties.nazwa) {
      layer.bindPopup(
        // Bind a popup with the region's name and score
        `<strong>${feature.properties.nazwa}</strong><br>Score: ${score}`
      );
    }
  };

  return (
    <MapContainer
      center={[52.0693, 19.0]}
      zoom={6}
      className="h-[500px] w-[600px] bg-[#242424]"
      scrollWheelZoom={false}
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      attributionControl={false}
    >
      {/* TileLayer can be enabled if needed */}
      <GeoJSON
        data={geojsonData}
        style={mapStyle}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
};

export default MyGeoJSONMap;
