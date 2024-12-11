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
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("2030");
  const [showInstructions, setShowInstructions] = useState(false);
  const [colorblindMode, setColorblindMode] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [countryName, setCountryName] = useState("");
  const [ecoregion, setEcoregion] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleBleaching, setModalVisibleBleaching] = useState(false);
  const [featureValuesBleaching, setFeatureValuesBleaching] = useState({
    depth_m: 10,
    distance_to_shore: 50,
    climsst: 28,
    temperature_mean: 301,
    windspeed: 5,
    ssta_minimum: -1,
    ssta_maximum: 2,
    ssta_frequency: 0.5,
  });
  
  const [predictionBleaching, setPredictionBleaching] = useState(null);
  const [loadingBleaching, setLoadingBleaching] = useState(false);
  
  const handleFeatureChangeBleaching = (feature, value) => {
    setFeatureValuesBleaching((prev) => ({ ...prev, [feature]: value }));
  };
  
  const handleModalCloseBleaching = () => {
    setModalVisibleBleaching(false);
    setPredictionBleaching(null);
  };
  
  const apiUrlBleaching = "https://model-serving-1091990692437.us-central1.run.app/predict_bleaching";
  
  const handleSubmitBleaching = () => {
    // Format payload
    const requestBodyBleaching = {
      features: [
        [
          featureValuesBleaching.depth_m,
          featureValuesBleaching.distance_to_shore,
          featureValuesBleaching.climsst,
          featureValuesBleaching.temperature_mean,
          featureValuesBleaching.windspeed,
          featureValuesBleaching.ssta_minimum,
          featureValuesBleaching.ssta_maximum,
          featureValuesBleaching.ssta_frequency,
        ],
      ],
    };
  
    setPredictionBleaching(null); 
    setLoadingBleaching(true); // Show loading animation
    console.log("Requesting prediction with payload:", requestBodyBleaching);
  
    fetch(apiUrlBleaching, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBodyBleaching),
    })
      .then((response) => {
        console.log("API Response Status:", response.status); 
        if (!response.ok) {
          return response.text().then((text) => {
            console.error("API Error Response:", text); 
            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setPredictionBleaching(data.predictions[0]); // Update prediction state
        setLoadingBleaching(false); // Hide loading animation
      })
      .catch((error) => {
        console.error("Error during API call:", error);
        setPredictionBleaching("Error fetching prediction."); // Handle error
        setLoadingBleaching(false); // Hide loading animation
      });
  };
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

  const apiUrl = "https://model-serving-1091990692437.us-central1.run.app/predict";


const handleSubmit = () => {

  // format payload
  const requestBody = {
    features: [
      [
        featureValues.depth_m,
        featureValues.distance_to_shore,
        featureValues.turbidity,
        featureValues.cyclone_frequency,
        featureValues.climsst,
        featureValues.temperature_kelvin,
        featureValues.windspeed,
        featureValues.ssta_minimum,
        featureValues.ssta_maximum,
        featureValues.nutrient_indicator_algae,
      ],
    ],
  };
  setPrediction(null); 
  console.log("Requesting prediction with payload:", requestBody);
  setLoading(true); 
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
        return response.text().then((text) => {
          console.error("API Error Response:", text); 
          throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
        });
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data);
      setPrediction(data.predictions[0]); //  prediction state
      setLoading(false); // hide loading animation
    })
    .catch((error) => {
      console.error("Error during API call:", error);
      setPrediction("Error fetching prediction."); // handle error 
      setLoading(false); // hide loading animation
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

      map.on('mouseenter', 'latest-datapoints-layer', () => {
        map.getCanvas().style.cursor = 'pointer'; // Change cursor to pointing finger
      });
      
      map.on('mouseleave', 'latest-datapoints-layer', () => {
        map.getCanvas().style.cursor = ''; // Reset cursor to default
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
          lat: latitude_degrees, 
          lng: longitude_degrees, 
        });
        setCountryName(country_name);
        setEcoregion(ecoregion);
        setModalVisible(true);
      });

      map.addSource("dataset", {
        type: "geojson",
        data: "./bleaching.geojson",
      });
      map.addLayer({
        id: "predictions-layer",
        type: "circle",
        source: "dataset",
        layout: {},
        paint: {
          "circle-color": [
            "match",
            ["get", "bleaching_status"],
              "bleaching", "#ff0000",
              "Fair", "#ffa500",
              "low_bleaching", "#00ff00",
              "#cccccc",
          ],
          "circle-opacity": 0.8,
        },
        filter: ["==", ["get", "date_year"], String(year)],
        visibility: "none", // hidden by default
      });
      map.on("click", "predictions-layer", (e) => {
        const {
          depth_m,
          distance_to_shore,
          climsst,
          temperature_mean,
          windspeed,
          ssta_minimum,
          ssta_maximum,
          ssta_frequency,
          latitude_degrees,
          longitude_degrees,
          country_name,
          ecoregion,
        } = e.features[0].properties;
  
        // Populate feature values and open modal
        setFeatureValuesBleaching({
          depth_m,
          distance_to_shore,
          climsst,
          temperature_mean,
          windspeed,
          ssta_minimum,
          ssta_maximum,
          ssta_frequency,
        });
        setCoordinates({
          lat: latitude_degrees, 
          lng: longitude_degrees, 
        });
        setCountryName(country_name);
        setEcoregion(ecoregion);
        setModalVisibleBleaching(true);
      });

      map.on('mouseenter', 'predictions-layer', () => {
        map.getCanvas().style.cursor = 'pointer'; // Change cursor to pointing finger
      });
      
      map.on('mouseleave', 'predictions-layer', () => {
        map.getCanvas().style.cursor = ''; // Reset cursor to default
      });
      

      map.on("mousemove", "predictions-layer", (e) => {
        const { country_name, ecoregion, date_year, bleaching_status } = e.features[0].properties;
      
        const bleachingMessage =
          bleaching_status === "low_bleaching"
            ? "Low Bleaching (&lt;20% of Corals)" 
            : bleaching_status === "bleaching"
            ? "Moderate/Severe Bleaching (&ge;20% of Corals)"
            : "Unknown Bleaching Status";
      
        popup
          .setLngLat(e.lngLat)
          .setHTML(
            `
              <strong style="font-weight: 800;">Country/region:</strong> ${country_name}<br/>
              <strong style="font-weight: 800;">Ecoregion:</strong> ${ecoregion}<br/>
              <strong style="font-weight: 800;">Year:</strong> ${date_year}<br/>
              <strong style="font-weight: 800;">Bleaching Prediction:</strong> ${bleachingMessage}
            `
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

    if (mapRef.current.getLayer("predictions-layer")) {
      mapRef.current.setPaintProperty("predictions-layer", "circle-color", [
        "match",
        ["get", "bleaching_status"],
        "bleaching", colorBlindColors.Poor,
        "Fair", colorBlindColors.Fair,
        "low_bleaching", colorBlindColors.Good,
        "#cccccc",
      ]);
    }
  }, [colorblindMode]);

  useEffect(() => {
    if (mapRef.current && mapRef.current.getLayer("predictions-layer") && activeLayer === "predictions-layer") {
      mapRef.current.setFilter("predictions-layer", [
        "==",
        ["get", "date_year"],
        Number(year), // Ensure `year` is compared as a string
      ]);
    }
  }, [year, activeLayer]);
  

  const handleYearChange = (newYear) => {
    setYear(String(newYear)); // Update the year state as a string
    if (mapRef.current && mapRef.current.getLayer("predictions-layer")) {
      mapRef.current.setFilter("predictions-layer", [
        "==",
        ["get", "date_year"],
        Number(newYear), // Use the updated year for the filter
      ]);
    }
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
                maxWidth: "180px",
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
             justifyContent: "center", 
             marginTop: "10px",
            }}
          >
            <label style={{ marginRight: "10px" }}>Accessible Colors</label>
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
          <button id="togglePredictionsLayerButton" onClick={() => showLayer("predictions-layer")} className={`toggleButton ${activeLayer === "predictions-layer" ? "active" : ""}`}style={{ whiteSpace: "nowrap" }}>
            Coral Bleaching Predictions
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
             min="2030"
             max="2040"
             step="5"
             value={year}
             onChange={(e) => handleYearChange(e.target.value)}
           />
         </div>
        )}
      </div>

      {showInstructions && (
        <div className="instructions-popup">
          <h3>Map Tips</h3>
          <p>Use the toolbar to switch between <b>Reef Distributions</b>, <b>Last Known Reef Health</b>, and <b>Coral Bleaching Predictions</b>. Adjust the year using the slider to view predictions for different years. Hover over points for detailed information. Scroll to zoom in or out, and be sure to drag the map around to explore. A legend is available in the bottom left corner of the map. <br></br><br></br><b>Reef Distributions</b> shows where reefs are around the globe.<br></br><b>Last Known Reef Health</b> shows the most current reef health, based on hard coral cover, for each location. If you click on a datapoint, you can simulate changing environmental and climate features using our model to see how the coral cover would be predicted to change. <br></br><b>Coral Bleaching Predictions</b> are predictions of the percentage of corals bleached at various locations. If you click on a datapoint, you can simulate changing environmental and climate features using our model to see how coral bleaching would be predicted to change. You can read more about our prediction process on our main site.</p>
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
        {activeLayer === "reef-layer" && (
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
        )}

          {activeLayer === "latest-datapoints-layer" && (
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
                  backgroundColor: colorblindMode ? "#FF00AA" : "#00ff00",
                  marginRight: "10px",
                  borderRadius: "3px",
                }}
              ></div>
              <span>Good Coral Cover (&ge;40%)</span>
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
              <span>Fair Coral Cover (20-40%)</span>
            </div>
            <div className="legend-item" style={{ display: "flex", alignItems: "center" }}>
              <div
                className="legend-color"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: colorblindMode ? "#FFD700" : "#ff0000",
                  marginRight: "10px",
                  borderRadius: "3px",
                }}
              ></div>
              <span>Poor Coral Cover (&lt;20%)</span>
            </div>
            </>
          )}
            {activeLayer === "predictions-layer" && (
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
                    backgroundColor: colorblindMode ? "#FF00AA" : "#00ff00",
                    marginRight: "10px",
                    borderRadius: "3px",
                  }}
                ></div>
                <span>Low Bleaching (&lt;20% of Corals)</span>
              </div>
              <div className="legend-item" style={{ display: "flex", alignItems: "center" }}>
                <div
                  className="legend-color"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: colorblindMode ? "#FFD700" : "#ff0000",
                    marginRight: "10px",
                    borderRadius: "3px",
                  }}
                ></div>
                <span>Moderate/Severe Bleaching (&ge;20% of Corals)</span>
              </div>
            </>
        )}
      </div>

      {modalVisible && (
  <div className="modal">
    {/* Close Button (X) */}
    <button
      onClick={handleModalClose}
      style={{
        position: "absolute",
        top: "0px",
        right: "10px",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        color: "#715eb7",
      }}
    >
      &times;
    </button>
    <div style={{ marginBottom: "15px" }}>
      <p><strong>Coordinates:</strong> {coordinates.lat.toFixed(2)}, {coordinates.lng.toFixed(2)}</p>
      <p><strong>Country/Region:</strong> {countryName}</p>
      <p><strong>Ecoregion:</strong> {ecoregion}</p>
    </div>
    <h3></h3>
    {Object.keys(featureValues).map((feature) => {
      let min = 0; // default min value
      let max = 100; // default max value
      let text = "";
      let tooltiptext = ""

      switch (feature) {
        case "depth_m":
          text = "Depth (m)";
          tooltiptext = "Depth of site in meters";
          break;
        case "distance_to_shore":
          text = "Distance to Shore (m)";
          tooltiptext = "Distance of site to shore in meters";
          break;
        case "turbidity":
          min = 0.0;
          max = 1.1635;
          text = "Turbidity (m⁻¹)";
          tooltiptext = "Measure of water clarity based on the diffuse attenuation coefficient of light at 490 nm (Kd490), given in reciprocal meters (m⁻¹)";
          break;
        case "cyclone_frequency":
          min = 19.86;
          max = 92.3;
          text = "Cyclone Frequency";
          tooltiptext = "Number of cyclone events from 1964 to 2014";
          break;
        case "climsst":
          min = 262.15;
          max = 307.04;
          text = "Climatological Sea Surface Temperature (SST) (K)";
          tooltiptext = "Climatological Sea Surface Temperature (SST) based on weekly SSTs for the study time frame, created using a harmonics approach, given in Kelvin";
          break;
        case "temperature_kelvin":
          min = 291.64;
          max = 307.05;
          text = "Sea Surface Temperature (SST) (K)";
          tooltiptext = "Sea Surface Temperature (SST) in Kelvin";
          break;
        case "windspeed":
          min = 0.0;
          max = 14.0;
          text = "Windspeed (m/hr)";
          tooltiptext = "Windspeed, which can affect waves and temperature, in meters per hour";
          break;
        case "ssta_minimum":
          min = -7.33;
          max = 0.0;
          text = "Sea Surface Temperature Anomaly (SSTA) Minimum (°C/K)";
          tooltiptext = "Sea Surface Temperature Anomaly: weekly SST minus weekly climatological SST in degrees Celsius or Kelvin. Minimum SSTA is the minimum SSTA over the study period.";
          break;
        case "ssta_maximum":
          min = 0.0;
          max = 13.19;
          text = "Sea Surface Temperature Anomaly (SSTA) Maximum (°C/K)";
          tooltiptext = "Sea Surface Temperature Anomaly: weekly SST minus weekly climatological SST in degrees Celsius or Kelvin. Maximum SSTA is the maximum SSTA over the study period.";
          break;
        case "nutrient_indicator_algae":
          min = 0.0;
          max = 87.5;
          text = "Nutrient Indicator Algae Percent Cover";
          tooltiptext = "The percent cover of nutrient indicator algae can indicate levels of nutrients in the water or nutrient pollution."
          break;
        default:
          break;
      }

      return (
        <div key={feature} style={{ marginBottom: "15px"}}>
          <label class="label-with-tooltip" data-tooltip={tooltiptext}>{text}:</label>
          {["depth_m", "distance_to_shore"].includes(feature) ? (
            <span style={{ marginLeft: "10px" }}>{featureValues[feature]}</span>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="range"
                id={feature}
                name={feature}
                className="year-slider"
                min={min}
                max={max}
                step={0.01}
                value={featureValues[feature]}
                onChange={(e) => handleFeatureChange(feature, parseFloat(e.target.value))}
              />
              <span style={{ marginLeft: "10px" }}>{featureValues[feature]}</span>
            </div>
          )}
        </div>
      );
    })}

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
  {/* Get Prediction Button */}
  <button
    className="toggleButton"
    onClick={() => {
      setPrediction(null); // clear previous prediction
      setLoading(true); // loading animation
      handleSubmit(); // prediction API call
    }}
  >
    Get Prediction
  </button>

  {/* Loading Animation */}
  {loading && (
    <div style={{ marginTop: "20px", fontSize: "16px", fontWeight: "bold", color: "#715eb7" }}>
      Loading...
      <div
        style={{
          marginTop: "10px",
          width: "50px",
          height: "50px",
          border: "5px solid #f3f3f3",
          borderTop: "5px solid #715eb7",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
    </div>
  )}

  {/* Prediction Display */}
{!loading && prediction && (
  <div
    style={{
      marginTop: "20px",
      width: "250px",
      padding: "15px",
      borderRadius: "20px",
      backgroundColor:
        colorblindMode
          ? prediction === "poor"
            ? "#FFD700"
            : prediction === "fair"
            ? "#00D900"
            : prediction === "good"
            ? "#FF00AA"
            : "#cccccc"
          : prediction === "poor"
          ? "#ff0000"
          : prediction === "fair"
          ? "#ffa500"
          : prediction === "good"
          ? "#00ff00"
          : "#cccccc",
      color: "#fff",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {prediction === "good" && "Healthy (≥20% Hard Coral Cover)"}
    {prediction === "poor" && "Unhealthy (<20% Hard Coral Cover)"}
    {prediction === "fair" && "Fair"}
  </div>
)}
</div>

<div ref={mapContainerRef} style={{ width: "100%", height: "100%" }}></div>
</div>
)}

{modalVisibleBleaching && (
  <div className="modal">
    {/* Close Button (X) */}
    <button
      onClick={handleModalCloseBleaching}
      style={{
        position: "absolute",
        top: "0px",
        right: "10px",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        color: "#715eb7",
      }}
    >
      &times;
    </button>
    <div style={{ marginBottom: "15px" }}>
      <p><strong>Coordinates:</strong> {coordinates.lat.toFixed(2)}, {coordinates.lng.toFixed(2)}</p>
      <p><strong>Country/Region:</strong> {countryName}</p>
      <p><strong>Ecoregion:</strong> {ecoregion}</p>
    </div>
    <h3></h3>
    {Object.keys(featureValuesBleaching).map((feature) => {
      let min = 0; // default min value
      let max = 100; // default max value
      let text = "";
      let tooltiptext = ""

      switch (feature) {
        case "depth_m":
          text = "Depth (m)";
          tooltiptext = "Depth of site in meters";
          break;
        case "distance_to_shore":
          text = "Distance to Shore (m)";
          tooltiptext = "Distance of site to shore in meters";
          break;
        case "climsst":
          min = 270;
          max = 307.04;
          text = "Climatological Sea Surface Temperature (SST) (K)";
          tooltiptext = "Climatological Sea Surface Temperature (SST) based on weekly SSTs for the study time frame, created using a harmonics approach, given in Kelvin";
          break;
        case "temperature_mean":
          min = 291;
          max = 307;
          text = "Mean Sea Surface Temperature (SST) (K)";
          tooltiptext = "Mean Sea Surface Temperature (SST) in Kelvin";
          break;
        case "windspeed":
          min = 0.0;
          max = 14.0;
          text = "Windspeed (m/hr)";
          tooltiptext = "Windspeed, which can affect waves and temperature, in meters per hour";
          break;
        case "ssta_minimum":
          min = -7.33;
          max = 2;
          text = "Sea Surface Temperature Anomaly (SSTA) Minimum (°C/K)";
          tooltiptext = "Sea Surface Temperature Anomaly: weekly SST minus weekly climatological SST in degrees Celsius or Kelvin. Minimum SSTA is the minimum SSTA over the study period.";
          break;
        case "ssta_maximum":
          min = 0.0;
          max = 16;
          text = "Sea Surface Temperature Anomaly (SSTA) Maximum (°C/K)";
          tooltiptext = "Sea Surface Temperature Anomaly: weekly SST minus weekly climatological SST in degrees Celsius or Kelvin. Maximum SSTA is the maximum SSTA over the study period.";
          break;
        case "ssta_frequency":
          min = 0.0;
          max = 52;
          text = "Sea Surface Temperature Anomaly (SSTA) Frequency";
          tooltiptext = "Sea Surface Temperature Anomaly Frequency: number of times over the previous 52 weeks that SSTA >=1 degree C/K"
          break;
        default:
          break;
      }

      return (
        <div key={feature} style={{ marginBottom: "15px"}}>
          <label class="label-with-tooltip" data-tooltip={tooltiptext}>{text}:</label>
          {["depth_m", "distance_to_shore"].includes(feature) ? (
            <span style={{ marginLeft: "10px" }}>{featureValuesBleaching[feature]}</span>
          ) : (
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="range"
                id={feature}
                name={feature}
                className="year-slider"
                min={min}
                max={max}
                step={0.01}
                value={featureValuesBleaching[feature]}
                onChange={(e) => handleFeatureChangeBleaching(feature, parseFloat(e.target.value))}
              />
              <span style={{ marginLeft: "10px" }}>{featureValuesBleaching[feature].toFixed(2)}</span>
            </div>
          )}
        </div>
      );
    })}

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
  {/* Get Prediction Button */}
  <button
    className="toggleButton"
    onClick={() => {
      setPredictionBleaching(null); // clear previous prediction
      setLoadingBleaching(true); // loading animation
      handleSubmitBleaching(); // prediction API call
    }}
  >
    Get Prediction
  </button>

  {/* Loading Animation */}
  {loadingBleaching && (
    <div style={{ marginTop: "20px", fontSize: "16px", fontWeight: "bold", color: "#715eb7" }}>
      Loading...
      <div
        style={{
          marginTop: "10px",
          width: "50px",
          height: "50px",
          border: "5px solid #f3f3f3",
          borderTop: "5px solid #715eb7",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
    </div>
  )}

  {/* Prediction Display */}
{!loadingBleaching && predictionBleaching && (
  <div
    style={{
      marginTop: "20px",
      width: "250px",
      padding: "15px",
      borderRadius: "20px",
      backgroundColor:
        colorblindMode
          ? predictionBleaching === "bleaching"
            ? "#FFD700"
            : predictionBleaching === "fair"
            ? "#00D900"
            : predictionBleaching === "low_bleaching"
            ? "#FF00AA"
            : "#cccccc"
          : predictionBleaching === "bleaching"
          ? "#ff0000"
          : predictionBleaching === "fair"
          ? "#ffa500"
          : predictionBleaching === "low_bleaching"
          ? "#00ff00"
          : "#cccccc",
      color: "#fff",
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {predictionBleaching === "low_bleaching" && "Low Bleaching (<20%)"}
    {predictionBleaching === "bleaching" && "Moderate/Severe Bleaching (≥20%)"}
    </div>
)}

</div>

    <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }}></div>
  </div>
)}
      



      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}