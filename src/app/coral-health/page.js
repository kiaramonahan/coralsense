import React from 'react';
import Header from "../components/header";

const CoralHealth = () => {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center text-white px-6 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Coral Health: Good vs Poor</h1>
        
        {/* Section for Good Coral Health */}
        <section className="max-w-4xl mb-12">
          <h2 className="text-3xl font-semibold mb-4">Good Coral Health</h2>
          <p className="text-lg mb-6">
            A coral reef with good health typically has high coral cover, vibrant colors, and abundant marine life.
          </p>
          <div className="flex justify-center mb-6">
            <img 
              src="high-coral-cover.png" 
              alt="Coral reef with high cover and vibrant colors" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </section>

        {/* Section for Poor Coral Health */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4">Poor Coral Health</h2>
          <p className="text-lg mb-6">
            A coral reef with poor health often exhibits low coral cover, pale or bleached corals, and a decline in marine biodiversity.
          </p>
          <div className="flex justify-center">
            <img 
              src="unhealthy-reef.png" 
              alt="Coral reef with low cover and bleached corals" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </section>
        <br></br><br></br><br></br>
        {/* Section for Coral Bleaching */}
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
          <br></br>
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

        {/* Section for Coral Restoration */}
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
          Image source: Ocean Image Bank, Martinn Colognoli 
          </p>
        </section>
      </div>
    </div>
  );
};

export default CoralHealth;
