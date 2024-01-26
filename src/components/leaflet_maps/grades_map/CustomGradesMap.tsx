import { MapContainer, GeoJSON, Marker, useMap } from "react-leaflet";
import L, { LatLngExpression, Layer, StyleFunction } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import rawGeojsonData from "../../../data/wojewodztwa-medium.json";

interface CustomGradesMapProps {
  scores: any[];
  scoreProperty: string;
  getColor: (score: number) => string;
}
const geojsonData: GeoJSON.FeatureCollection =
  rawGeojsonData as GeoJSON.FeatureCollection;

const CustomGradesMap: React.FC<CustomGradesMapProps> = ({
  scores,
  scoreProperty,
  getColor,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  // Define a style function for the GeoJSON layer based on the feature's score
  const mapStyle: StyleFunction<any> = (feature) => {
    // Find the score for the region
    const score =
      scores.find((o) => o.woj === feature?.properties.nazwa)?.[
        scoreProperty
      ] ?? 0; //If 'score' is 'undefined', use 0 as the default value
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
    const score = scores.find((o) => o.woj === feature.properties?.nazwa)?.[
      scoreProperty
    ];
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
        scores.find((o) => o.woj === feature.properties?.nazwa)?.[
          scoreProperty
        ] ?? 0;
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
    const width = window.innerWidth;
    if (width < 480) {
      return 5.4;
    } else if (width >= 0 && width < 1000) {
      return 5.6;
    } else if (width >= 0 && width < 1200) {
      return 5.6;
    } else if (width >= 1200 && width < 1300) {
      return 5.6;
    } else if (width >= 1300 && width < 1400) {
      return 5.8;
    } else {
      return 6;
    }
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

export default CustomGradesMap;
