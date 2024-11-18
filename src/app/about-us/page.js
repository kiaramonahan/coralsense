import Header from "../components/header";

export default function AboutUs() {
  return (
    <div className="pt-16 bg-[#1e2e4d] min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {/* Container for About Us Content */}
        <div className="max-w-4xl text-white text-center px-6 py-8 bg-opacity-80 rounded-lg">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6"><br></br>About Us</h1>

          {/* Mission Statement */}
          <p className="text-lg mb-4">
          Our mission is to harness the power of machine learning and time series forecasting to monitor and model the health of coral reefs on a global scale. 
          We aim to provide an accessible tool that offers valuable insights into the futures of these fragile ecosystems and highlights the ways humans depend on them.
          By mapping coral reef health and sharing actionable data, we empower communities, conservationists, and policymakers to take informed action in protecting and restoring coral reefs worldwide.
          Together, we can improve the trajectory of these vital marine habitats for future generations while promoting sustainable stewardship of our oceans.
          </p>

          {/* Vision */}
          <p className="text-lg mb-6">
            Coral reefs, the foundation of marine biodiversity, are facing
            unprecedented challenges from climate change, pollution, and human
            impact. With cutting-edge data analysis and predictive modeling, we
            aim to lead global efforts in reef conservation, providing insights
            that drive sustainable action for a healthier planet.
          </p>

          {/* Our Approach */}
          <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
          <p className="text-lg">
            Coral Sense integrates satellite imagery, underwater surveys, and
            advanced machine learning algorithms to monitor the current health
            of coral reefs and project their future conditions. By analyzing key
            environmental factors like water temperature, pollution levels, and
            historical reef data, we generate precise insights to inform
            actionable conservation strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
