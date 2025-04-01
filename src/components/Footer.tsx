
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-maroon">DAVE HERMINO</span> TAEKWONDO
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering lives through the discipline and art of Taekwondo.
              Join our community and transform your mind, body, and spirit.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-maroon transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-maroon transition-colors">
                About
              </Link>
              <Link to="/classes" className="text-gray-400 hover:text-maroon transition-colors">
                Classes
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-maroon transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-maroon transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-maroon mr-2 mt-1" />
                <span>09942553507</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-maroon mr-2 mt-1" />
                <span>davesebastienghermino@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-maroon mr-2 mt-1" />
                <span>Dave Hermino Taekwondo Gym</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Dave Hermino Taekwondo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
