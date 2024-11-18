import Header from "../components/header";

export default function StartHere() {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {/* Container Content */}
        <div className="max-w-4xl text-white text-center px-6 py-8 bg-opacity-80 rounded-lg">
      
          {/* Content */}
          <div className="text-left">
          <h1 className="text-4xl font-bold mb-6"><br></br>The Problem:</h1>
            <p>
            Coral reefs around the world are being threatened by climate change, pollution, overfishing, nutrient changes, and pathogens. 
            <br></br><br></br>Coral reefs are incredibly important ecosystems that are biodiversity hotspots, containing 25% of all marine life. Humans depend on reefs as well - hundreds of millions of people depend on reefs for coastal protection, income, and food.

            </p>

            <h1 className="text-4xl font-bold mb-6"><br></br>Our Mission:</h1>
            <p>
            Our mission is to harness the power of machine learning and time series forecasting to monitor and model the health of coral reefs on a global scale. We aim to provide an accessible tool that offers valuable insights into the futures of these fragile ecosystems and highlights the ways humans depend on them. By mapping coral reef health and sharing actionable data, we empower communities, conservationists, and policymakers to take informed action in protecting and restoring coral reefs worldwide. Together, we can improve the trajectory of these vital marine habitats for future generations while promoting sustainable stewardship of our oceans.

            </p>

            <h1 className="text-4xl font-bold mb-6"><br></br>Our Predictions:</h1>
            <p>
            We have combined 6 datasets and employed machine learning and time-series models to predict reef health in select locations around the world for the next <b>5 years</b>.
            <br></br><br></br>
            </p>
            <h2 className="text-2xl font-semibold mt-4">What is Reef Health?</h2>
            <p>
              <br></br>
              Reef health is complex and can be determined in many ways. 
              <br></br><br></br>
              We define a healthy reef as one with a hard coral cover percentage of 20% or greater. Coral cover is a <a href="https://www2.gbrmpa.gov.au/sites/default/files/2024-02/Reef%20Authority-Factsheet-Coral%20Cover.pdf" target="_blank" className="underline text-blue-300">simple, robust, widely used measure to determine coral reef condition.</a> Our 20% cutoff was determined using input from several sources, including <a href="https://www.healthyreefs.org/en/healthy-reefs-data/indicators/reef-health-index" target="_blank" className="underline text-blue-300">Healthy Reefs</a>, which categorizes coral cover below 20% as "Fair", "Poor", and "Critical", while coral cover above 20% is categorized as "Good" or "Very Good".
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

