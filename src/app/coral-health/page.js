"use client"; // Ensure this is treated as a Client Component

import React, { useState } from "react";
import Header from "../components/header";

const CoralHealth = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    console.log("Slider Value:", e.target.value); // Debug log
    setSliderValue(e.target.value);
  };

  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center text-white px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Coral Health</h1>

        {/* Good vs Poor Coral Health with Slider */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Good vs. Poor Coral Health
          </h2>
          <p className="text-lg mb-6 text-left">
            A healthy coral reef is teeming with life, vibrant colors, and extensive coral cover, serving as a critical habitat for diverse marine species. 
            In contrast, a degraded reef shows signs of bleaching, loss of coral cover, and a stark decline in biodiversity, often caused by climate change, 
            pollution, and human activities.
            Slide the handle to compare a healthy coral reef with vibrant colors
            and abundant marine life to a degraded reef suffering from bleaching
            and low biodiversity.
          </p>

          {/* Slider Container */}
          <div className="relative max-w-4xl w-full mb-12">
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
              {/* Good Coral Health (Before Image) */}
              <img
                src="high-coral-cover.png"
                alt="Coral reef with high cover and vibrant colors"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  clipPath: `inset(0 ${sliderValue}% 0 0)`, // Adjusts visible portion dynamically
                  zIndex: 2,
                }}
              />
              {/* Poor Coral Health (After Image) */}
              <img
                src="unhealthy-reef.png"
                alt="Coral reef with low cover and bleached corals"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                  zIndex: 1,
                }}
              />
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={handleSliderChange}
              className="slider-thumb w-full mt-4 appearance-none bg-gray-300 h-1 rounded focus:outline-none focus:ring focus:ring-purple-500"
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </section>

        {/* Coral Bleaching Section */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Coral Bleaching</h2>
          <p className="text-lg mb-6">
            Coral bleaching is a major threat to reef health worldwide, largely due to climate change. This image shows a reef in American Samoa healthy, before bleaching in 2014 (left), during bleaching in early 2015 (middle), and dead after bleaching late 2015 (right).
          </p>
          <div className="flex justify-center mb-6">
            <img
              src="OceanImageBank_TheOceanAgency_BeforeAfter_04.jpg"
              alt="Before, during, and after coral bleaching in American Samoa."
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <p className="text-sm mb-6">
            Image source: Ocean Image Bank, The Ocean Agency
          </p>
          <p className="text-lg mb-6">
            The image below shows a reef in Hawaii before bleaching in August 2015 (left) and after bleaching just a few months later in November 2015 (right).
          </p>
          <div className="flex justify-center mb-6">
            <img
              src="OceanImageBank_TheOceanAgency_BeforeAfter_06.jpg"
              alt="Before, and after coral bleaching in Hawaii."
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <p className="text-sm mb-6">
            Image source: Ocean Image Bank, The Ocean Agency
          </p>
        </section>

        {/* Coral Restoration Section */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Coral Restoration</h2>
          <p className="text-lg mb-6">
            Coral reef health can improve in the right conditions. This photo shows a coral reef near Komodo, Indonesia before (2015) and after (2019) restoration. Note the poor coral health on the left.
          </p>
          <div className="flex justify-center mb-6">
            <img
              src="OceanImageBank_MartinColognoli_25.jpg"
              alt="Before and after coral reef restoration in Indonesia"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <p className="text-sm mb-6">
            Image source: Ocean Image Bank, Martin Colognoli
          </p>
        </section>
      </div>
    </div>
  );
};

export default CoralHealth;
