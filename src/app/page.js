import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      {/* Text Section */}
      <div style={{ maxWidth: "50%", color: "white", padding: "20px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", whiteSpace: "nowrap", marginBottom: "20px", fontFamily: "Helvetica"}}>
            Welcome to CoralSense
          </h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.5", fontFamily: "Helvetica-light" }}>
          "Coral reefs are a jeweled belt around the middle of the planet." - Dr. Sylvia Earle, Oceanographer
          </p>
        </div>
      <div className="background-image">
        <img src="home_page_image.png" alt="Image of coral reef" />
      </div>
    </div>
  );
}