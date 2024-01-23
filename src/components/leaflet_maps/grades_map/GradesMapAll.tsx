import { MapContainer, GeoJSON, Marker, useMap } from "react-leaflet";
import L, { LatLngExpression, Layer, StyleFunction } from "leaflet";
import "leaflet/dist/leaflet.css";
import rawGeojsonData from "../wojewodztwa-medium.json"; // Load GeoJSON data for the map
import scores from "./mean_objects_score_by_type_and_voivodeship.json"; // Load scoring data used for styling regions
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

// Cast the raw GeoJSON data to the appropriate FeatureCollection type
const geojsonData: GeoJSON.FeatureCollection =
  rawGeojsonData as GeoJSON.FeatureCollection;

// React functional component to render the map
const GradesMap: React.FC = () => {
  // Retrieve the current theme context to apply different styles based on the theme
  const { isDarkMode } = useContext(ThemeContext);

  /*-------------------------------------------below color voivodships based on score -------------------------------------------*/

  // Function to determine the color based on a given score
  const getColor = (score: number) => {
    if (score > 84) {
      return "#03fc13";
    } else if (score > 82) {
      return "#d3fc03";
    } else if (score > 80) {
      return "#fccf03";
    } else if (score > 78) {
      return "#fc7303";
    } else if (score > 76) {
      return "#fc0303";
    } else if (score > 74) {
      return "#fc0303";
    }
  };

  // Define a style function for the GeoJSON layer based on the feature's score
  const mapStyle: StyleFunction<any> = (feature) => {
    // Find the score for the region
    const score =
      scores.find((o) => o.woj === feature?.properties.nazwa)?.Mean_all ?? 0; //If 'score' is 'undefined', use 0 as the default value
    // Return style with the corresponding color
    return {
      fillColor: getColor(score),
      weight: 1,
      opacity: 1,
      color: `${isDarkMode ? "white" : "black"}`,
      fillOpacity: 0.7,
    };
  };

  /*-------------------------------------------below handle events-------------------------------------------*/

  // Handle layer events, such as binding popups with additional information
  const onEachFeature = (feature: GeoJSON.Feature, layer: Layer) => {
    const score = scores.find(
      (o) => o.woj === feature.properties?.nazwa
    )?.Mean_all;
    if (feature.properties && feature.properties.nazwa) {
      layer.bindPopup(
        // Bind a popup with the region's name and score
        `<strong>Województwo: ${feature.properties.nazwa}<br>Ocena: ${score}</strong>`,
        { autoPan: false }
      );
    }
  };

  /*-------------------------------------------below markers with score-------------------------------------------*/

  // Function to create a custom Leaflet icon with a label
  const createLabelIcon = (labelText: string) => {
    return L.divIcon({
      className: "flex justify-center items-center",
      html: `<div class="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">${labelText}</div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
  };
  // Generate markers for each feature in the GeoJSON data based on their score
  const createScoreMarkers = (geojsonData: GeoJSON.FeatureCollection) => {
    return geojsonData.features.map((feature: GeoJSON.Feature) => {
      const score =
        scores.find((o) => o.woj === feature.properties?.nazwa)?.Mean_all ?? 0;
      if (
        feature.geometry.type === "Polygon" ||
        feature.geometry.type === "MultiPolygon"
      ) {
        // Assuming that the feature is a Polygon or MultiPolygon, create a marker at the center of the polygon

        const latLngs = feature.geometry.coordinates[0].map(
          ([lng, lat]): LatLngExpression => {
            // Ensure that lng and lat are numbers
            const numericLng = Number(lng);
            const numericLat = Number(lat);
            return [numericLat, numericLng];
          }
        );

        const center = L.polygon(latLngs).getBounds().getCenter();
        return (
          <Marker
            key={feature.properties?.nazwa}
            position={center}
            icon={createLabelIcon(Math.round(score).toString() ?? "")}
          />
        );
      } else {
        // Handle other geometry types or throw an error
        throw new Error(`Unsupported geometry type: ${feature.geometry.type}`);
      }
    });
  };

  /*-------------------------------------------below responsiveness-------------------------------------------*/

  // Dynamically calculate zoom level based on window width
  const getResponsiveZoom = (): number => {
    if (window.innerWidth < 768) return 5.5;
    if (window.innerWidth >= 768 && window.innerWidth < 1024) return 5.5;
    return 6;
  };

  const [zoom, setZoom] = useState(getResponsiveZoom());

  // Update zoom level on window resize
  useEffect(() => {
    function handleResize() {
      setZoom(getResponsiveZoom());
    }
    window.addEventListener("resize", handleResize);

    // This function will be called when the component will be deleted.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Updates map zoom level when the 'zoom' state changes
  function MapUpdater({ zoom }: { zoom: number }) {
    const map = useMap();
    useEffect(() => {
      map.setView(map.getCenter(), zoom);
    }, [zoom]);

    return null; // This component does not render anything
  }

  return (
    <MapContainer
      center={[52.0693, 19.0]}
      zoomSnap={0.1}
      zoom={5.5}
      className="h-[100%] w-[100%] bg-inherit z-10"
      scrollWheelZoom={false}
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      attributionControl={false}
    >
      <MapUpdater zoom={zoom} />
      <GeoJSON
        data={geojsonData}
        style={mapStyle}
        onEachFeature={onEachFeature}
      />
      {createScoreMarkers(geojsonData)}
    </MapContainer>
  );
};

export default GradesMap;
