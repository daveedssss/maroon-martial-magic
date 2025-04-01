
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-2xl">
            <span className="text-maroon">DAVE HERMINO</span> TAEKWONDO
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-maroon font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-maroon font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/classes"
              className="text-white hover:text-maroon font-medium transition-colors"
            >
              Classes
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-maroon font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-maroon font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-white hover:text-maroon font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-maroon font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/classes"
                className="text-white hover:text-maroon font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Classes
              </Link>
              <Link
                to="/gallery"
                className="text-white hover:text-maroon font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-maroon font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
