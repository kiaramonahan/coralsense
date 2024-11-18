import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="background-image">
        <img src="home_page_image.png" alt="Image of coral reef" />
      </div>
    </div>
  );
}
