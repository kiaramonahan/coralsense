"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

export default function Map() {
  const mapContainerRef = useRef(null);
  const [activeLayer, setActiveLayer] = useState("reef-layer"); // default reef layer
  const mapRef = useRef(null);
  const [year, setYear] = useState(2018);
  const [showInstructions, setShowInstructions] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [countryName, setCountryName] = useState("");
  const [ecoregion, setEcoregion] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [featureValues, setFeatureValues] = useState({
    depth_m: 10,
    distance_to_shore: 50,
    turbidity: 1.5,
    cyclone_frequency: 2,
    climsst: 28,
   temperature_kelvin: 301,
   windspeed: 5,
    ssta_minimum: -1,
    ssta_maximum: 2,
   nutrient_indicator_algae: 0.5,
  });
  const [prediction, setPrediction] = useState(null);

  const handleFeatureChange = (feature, value) => {
   setFeatureValues((prev) => ({ ...prev, [feature]: value }));
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setPrediction(null);
  };

  const handleSubmit = () => {
    const apiUrl = "https://model-serving-1091990692437.us-central1.run.app/predict";
  
    // Ensure the features are sent in the correct order
    const featureOrder = [
      "depth_m",
      "distance_to_shore",
      "turbidity",
      "cyclone_frequency",
      "climsst",
      "temperature_kelvin",
      "windspeed",
      "ssta_minimum",
      "ssta_maximum",
      "nutrient_indicator_algae",
    ];
  
    const requestBody = {
      features: [
        featureOrder.map((key) => featureValues[key]), // Create array based on the correct order
      ],
    };
  
    console.log("Requesting prediction with payload:", requestBody);
  
    // Make the API call
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        console.log("API Response Status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response Data:", data);
        setPrediction(data.predictions[0]); // Update prediction with the first value
      })
      .catch((error) => {
        console.error("Error during API call:", error);
        setPrediction("Error fetching prediction");
      });
  };
  
  
  
  


  useEffect(() => {
    if (mapRef.current) return;
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2lraW1hcHMiLCJhIjoiY20wbGw1ZHRlMDYxczJzcHlmOG4ydGFvNSJ9.3NwtcJ6HLLFMaL-u_qEqyg';
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/kikimaps/cm1vadaos007w01rdfsc80cdv",
      zoom: 2,
      center: [200, 20],
      bearingSnap: 0,
      projection: "mercator",
      pitchWithRotate: false,
      interactive: true,
    });
    map.scrollZoom.enable();
    map.addControl(new mapboxgl.NavigationControl({showCompass: false}));

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on("load", function () {
      map.addSource("reefs", {
        type: "geojson",
        data: "./reef_locations.geojson",
      });
      map.addLayer({
        id: "reef-layer",
        type: "fill",
        source: "reefs",
        layout: {},
        paint: {
          "fill-color": "#00faff",
          "fill-opacity": 0.6,
        },
        visibility: "visible", 
      });

      map.addSource("latest_datapoints", {
        type: "geojson",
        data: "./latest_datapoints.geojson",
      });
      map.addLayer({
        id: "latest-datapoints-layer",
        type: "circle",
        source: "latest_datapoints",
        layout: {},
        paint: {
          "circle-color": [
            "match",
            ["get", "hard_coral_class"],
              "Poor", "#ff0000",
              "Fair", "#ffa500",
              "Good", "#00ff00",
              "#cccccc",
          ],
          "circle-opacity": 0.8,
        },
        visibility: "none", // hidden by default
      });

      map.on("mousemove", "latest-datapoints-layer", (e) => {
        const { country_name, ecoregion, hard_coral_class, date_year } = e.features[0].properties;
        popup
          .setLngLat(e.lngLat)
          .setHTML(
            `<strong>Country/region:</strong> ${country_name}<br/>
            <strong>Ecoregion:</strong> ${ecoregion}<br/>
            <strong>Year:</strong> ${date_year}<br/>
            <strong>Hard Coral Cover:</strong> ${hard_coral_class}`
          )
          .addTo(map);
      });

      map.on("mouseleave", "latest-datapoints-layer", () => {
        popup.remove();
      });

      map.on("click", "latest-datapoints-layer", (e) => {
        const {
          depth_m,
          distance_to_shore,
          turbidity,
          cyclone_frequency,
          climsst,
          temperature_kelvin,
          windspeed,
          ssta_minimum,
          ssta_maximum,
          nutrient_indicator_algae,
          latitude_degrees,
          longitude_degrees,
          country_name,
          ecoregion,
        } = e.features[0].properties;
  
        // Populate feature values and open modal
        setFeatureValues({
          depth_m,
          distance_to_shore,
          turbidity,
          cyclone_frequency,
          climsst,
          temperature_kelvin,
          windspeed,
          ssta_minimum,
          ssta_maximum,
          nutrient_indicator_algae,
        });
        setCoordinates({
          lat: latitude_degrees, // Use latitude_degrees
          lng: longitude_degrees, // Use longitude_degrees
        });
        setCountryName(country_name);
        setEcoregion(ecoregion);
        setModalVisible(true);
      });

      map.addSource("dataset", {
        type: "geojson",
        data: "./cleaned_data.geojson",
      });
      map.addLayer({
        id: "predictions-layer",
        type: "circle",
        source: "dataset",
        layout: {},
        paint: {
          "circle-color": [
            "match",
            ["get", "hard_coral_class"],
              "Poor", "#ff0000",
              "Fair", "#ffa500",
              "Good", "#00ff00",
              "#cccccc",
          ],
          "circle-opacity": 0.8,
        },
        filter: ["==", ["number", ["get", "date_year"]], year],
        visibility: "none", // hidden by default
      });

      map.on("mousemove", "predictions-layer", (e) => {
        const { country_name, ecoregion, hard_coral_class } = e.features[0].properties;
        popup
          .setLngLat(e.lngLat)
          .setHTML(
            `<strong>Country/region:</strong> ${country_name}<br/>
            <strong>Ecoregion:</strong> ${ecoregion}<br/>
             <strong>Hard Coral Cover Prediction:</strong> ${hard_coral_class}`
          )
          .addTo(map);
      });

      map.on("mouseleave", "predictions-layer", () => {
        popup.remove();
      });

      mapRef.current = map;

      showLayer("reef-layer");
    });

    return () => map.remove();
  }, []);

  // Update map layers dynamically when colorblind mode toggles
  useEffect(() => {
    if (!mapRef.current) return;

    const colorBlindColors = colorblindMode
      ? {
          Poor: "#FFD700",
          Fair: "#00D900",
          Good: "#FF00AA",
        }
      : {
          Poor: "#ff0000",
          Fair: "#ffa500",
          Good: "#00ff00",
        };

    // Update colors for latest-datapoints-layer
    if (mapRef.current.getLayer("latest-datapoints-layer")) {
      mapRef.current.setPaintProperty("latest-datapoints-layer", "circle-color", [
        "match",
        ["get", "hard_coral_class"],
        "Poor", colorBlindColors.Poor,
        "Fair", colorBlindColors.Fair,
        "Good", colorBlindColors.Good,
        "#cccccc",
      ]);
    }

    // Update colors for predictions-layer
    if (mapRef.current.getLayer("predictions-layer")) {
      mapRef.current.setPaintProperty("predictions-layer", "circle-color", [
        "match",
        ["get", "hard_coral_class"],
        "Poor", colorBlindColors.Poor,
        "Fair", colorBlindColors.Fair,
        "Good", colorBlindColors.Good,
        "#cccccc",
      ]);
    }
  }, [colorblindMode]);

  useEffect(() => {
    if (mapRef.current && mapRef.current.getLayer("predictions-layer") && activeLayer === "predictions-layer") {
      mapRef.current.setFilter("predictions-layer", [
        "==",
        ["number", ["get", "date_year"]],
        year,
      ]);
    }
  }, [year, activeLayer]);

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value, 10));
  };

  const showLayer = (layerToShow) => {
    if (mapRef.current) {
      mapRef.current.setLayoutProperty("reef-layer", "visibility", "none");
      mapRef.current.setLayoutProperty("latest-datapoints-layer", "visibility", "none");
      mapRef.current.setLayoutProperty("predictions-layer", "visibility", "none");
      mapRef.current.setLayoutProperty(layerToShow, "visibility", "visible");
    }
    if (activeLayer !== layerToShow) {
      setActiveLayer(layerToShow);
    }
  };

  const toggleColorblindMode = () => {
    setColorblindMode(!colorblindMode);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "10px",
          borderRadius: "15px",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <div className="logo-image" style={{ display: "flex", alignItems: "center" }}>
          <Link legacyBehavior href="/">
            <img
              src="logo_no_background.png"
              alt="Logo"
              style={{
                maxWidth: "150px",
                height: "auto",
                marginBottom: "10px",
              }}
            />
          </Link>

          <button
            className="question-icon"
            onClick={() => setShowInstructions(!showInstructions)}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
            }}
          >
            ?
          </button>
        </div>

        {/* Colorblind Mode Toggle */}
          <div
            style={{
             display: "flex",
             alignItems: "center",
             justifyContent: "center", // Center horizontally
             marginTop: "10px",
            }}
          >
            <label style={{ marginRight: "10px" }}>Colorblind Mode</label>
            <label className="switch">
             <input type="checkbox" checked={colorblindMode} onChange={toggleColorblindMode} />
             <span className="slider round"></span>
            </label>
          </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
          <button id="toggleReefLayerButton" onClick={() => showLayer("reef-layer")} className={`toggleButton ${activeLayer === "reef-layer" ? "active" : ""}`}>
            Reef Distributions
          </button>
          <button id="toggleLatestDatapointsLayerButton" onClick={() => showLayer("latest-datapoints-layer")} className={`toggleButton ${activeLayer === "latest-datapoints-layer" ? "active" : ""}`}>
            Last Known Reef Health
          </button>
          <button id="togglePredictionsLayerButton" onClick={() => showLayer("predictions-layer")} className={`toggleButton ${activeLayer === "predictions-layer" ? "active" : ""}`}>
            Reef Health Predictions
          </button>
        </div>

        {activeLayer === "predictions-layer" && (
         <div className="session" id="sliderbar" style={{ marginTop: "15px", textAlign: "center" }}>
           <h2>
             Year: <label id="active-year">{year}</label>
           </h2>
           <input
             id="year-slider"
             className="year-slider"
             type="range"
             min="2016"
             max="2020"
             step="1"
             value={year}
              onChange={handleYearChange}
           />
         </div>
        )}
      </div>

      {showInstructions && (
        <div className="instructions-popup">
          <h3>Map Tips</h3>
          <p>Use the toolbar to switch between <b>Reef Distributions</b>, <b>Last Known Reef Health</b>, and <b>Reef Health Predictions</b>. Adjust the year using the slider to view predictions for different years. Hover over points for detailed information. Scroll to zoom in or out, and be sure to drag the map around to explore. A legend is available in the bottom left corner of the map. <br></br><br></br><b>Reef Distributions</b> shows where reefs are around the globe.<br></br><b>Last Known Reef Health</b> shows the most current reef health, based on hard coral cover, for each location. <br></br><b>Reef Health Predictions</b> are predictions of hard coral cover from our models. You can read more about our prediction process on our main site.</p>
          <button onClick={() => setShowInstructions(false)} className="close-button">Close</button>
        </div>
      )}

      <div
        id="legend"
        style={{
          position: "absolute",
          bottom: "30px",
          left: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "10px",
          borderRadius: "15px",
          zIndex: 1,
        }}

        
      >
        {activeLayer === "reef-layer" ? (
          <div className="legend-item" style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            <div
              className="legend-color"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#00faff",
                marginRight: "10px",
                borderRadius: "3px",
              }}
            ></div>
            <span>Reef</span>
          </div>
        ) : (
          <>
            <div className="legend-item" style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
              <div
                className="legend-color"
                style={{
                  width: "20px",
                 height: "20px",
                 backgroundColor: "#00faff",
                 marginRight: "10px",
                 borderRadius: "3px",
                }}
              ></div>
              <span>Reef</span>
              </div>
            <div className="legend-item" style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
              <div
                className="legend-color"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: colorblindMode ? "#FFD700" : "#00ff00",
                  marginRight: "10px",
                  borderRadius: "3px",
                }}
              ></div>
              <span>Good Coral Cover</span>
            </div>
            <div className="legend-item" style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
              <div
                className="legend-color"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: colorblindMode ? "#00D900" : "#ffa500",
                  marginRight: "10px",
                  borderRadius: "3px",
                }}
              ></div>
              <span>Fair Coral Cover</span>
            </div>
            <div className="legend-item" style={{ display: "flex", alignItems: "center" }}>
              <div
                className="legend-color"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: colorblindMode ? "#FF00AA" : "#ff0000",
                  marginRight: "10px",
                  borderRadius: "3px",
                }}
              ></div>
              <span>Poor Coral Cover</span>
            </div>
          </>
        )}
      </div>

      {modalVisible && (
  <div className="modal">
    <h2>Reef Details</h2>
    <div style={{ marginBottom: "15px" }}>
      <p><strong>Coordinates:</strong> {coordinates.lat.toFixed(2)}, {coordinates.lng.toFixed(2)}</p>
      <p><strong>Country:</strong> {countryName}</p>
      <p><strong>Ecoregion:</strong> {ecoregion}</p>
    </div>
    <h3>Adjust Features</h3>
    {Object.keys(featureValues).map((feature) => (
  <div key={feature} style={{ marginBottom: "15px" }}>
    <label htmlFor={feature}>{feature.replace("_", " ")}:</label>
    {["depth_m", "distance_to_shore"].includes(feature) ? (
      // display for depth_m and distance_to_shore
      <span style={{ marginLeft: "10px" }}>{featureValues[feature]}</span>
    ) : (
      // sliders for other features
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="range"
          id={feature}
          name={feature}
          className="year-slider"
          min={0} 
          max={100} 
          step={0.1}
          value={featureValues[feature]}
          onChange={(e) => handleFeatureChange(feature, parseFloat(e.target.value))}
        />
        <span style={{ marginLeft: "10px" }}>{featureValues[feature]}</span>
      </div>
    )}
  </div>
))}


    <button onClick={handleSubmit}>Get Prediction</button>
    {prediction && <p>Prediction: {prediction}</p>} {/* Display the prediction */}
    <button onClick={handleModalClose}>Close</button>
  </div>
)}


      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}