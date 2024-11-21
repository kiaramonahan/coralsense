import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-[#1e2e4d] flex items-center justify-between z-10 px-4">
      <div className="logo-image">
        <Link href="/">
          <img src="/logo.png" alt="Coral Sense" className="h-10" />
        </Link>
      </div>

      {/* Navbar */}
      <nav className="navbar flex space-x-6">
        <Link href="/start-here" className="text-white">Start Here</Link>
        <Link href="/coral-health" className="text-white">Coral Health</Link>
        <Link href="/datasets" className="text-white">Datasets</Link>
        <Link href="/about-us" className="text-white">About Us</Link>
        <Link href="/get-involved" className="text-white">Get Involved</Link>
        <Link href="/mapbox" className="text-white">Launch Tool</Link>
      </nav>
    </header>
  );
}
