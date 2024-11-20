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
      </div>
    </div>
  );
};

export default CoralHealth;
