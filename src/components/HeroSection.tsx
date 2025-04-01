
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: "url('/taekwondo-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            MASTER THE ART OF <span className="text-maroon">TAEKWONDO</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Join Dave Hermino's Taekwondo Gym and discover the path to physical excellence,
            mental discipline, and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-maroon hover:bg-maroon-light text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/classes">
                View Classes
              </Link>
            </Button>
            <Button 
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
