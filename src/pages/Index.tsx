
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Gym</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dave Hermino Taekwondo Gym offers a unique training experience focused on
                technical excellence, physical fitness, and mental discipline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Expert Instruction"
                description="Train with Master Dave Hermino and his team of certified instructors with years of experience."
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                }
              />
              
              <FeatureCard
                title="Modern Facilities"
                description="Train in our state-of-the-art facilities with modern equipment and spacious training areas."
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                }
              />
              
              <FeatureCard
                title="All Skill Levels"
                description="Programs designed for all ages and skill levels, from beginners to competitive athletes."
                icon={
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                }
              />
            </div>
          </div>
        </section>
        
        {/* Classes Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Classes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the perfect Taekwondo program for you. We offer a variety of classes 
                to help you achieve your martial arts goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
                <img 
                  src="/kids-class.jpg" 
                  alt="Kids Class" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Kids Classes</h3>
                  <p className="text-gray-200 mb-4">Ages 5-12. Focus on coordination, discipline, and fun.</p>
                  <Button className="bg-maroon hover:bg-maroon-light text-white w-full" asChild>
                    <Link to="/classes">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
                <img 
                  src="/teen-class.jpg" 
                  alt="Teen Class" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Teen Classes</h3>
                  <p className="text-gray-200 mb-4">Ages 13-17. Building strength, confidence, and technique.</p>
                  <Button className="bg-maroon hover:bg-maroon-light text-white w-full" asChild>
                    <Link to="/classes">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300"></div>
                <img 
                  src="/adult-class.jpg" 
                  alt="Adult Class" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Adult Classes</h3>
                  <p className="text-gray-200 mb-4">Ages 18+. Comprehensive martial arts training.</p>
                  <Button className="bg-maroon hover:bg-maroon-light text-white w-full" asChild>
                    <Link to="/classes">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                className="bg-maroon hover:bg-maroon-light text-white px-6 py-3 text-lg"
                asChild
              >
                <Link to="/classes">
                  View All Classes
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our community about how training at Dave Hermino Taekwondo has 
                transformed their lives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Training at Dave Hermino's gym has been life-changing. My confidence has improved, and I'm in the best shape of my life."
                name="John Doe"
                role="Student for 2 years"
              />
              
              <TestimonialCard
                quote="My son has flourished since joining the kids program. The instructors are patient and make learning fun while teaching discipline."
                name="Maria Rodriguez"
                role="Parent"
              />
              
              <TestimonialCard
                quote="As a competitive athlete, I've trained at many places, but the technical instruction here is unmatched. Highly recommended!"
                name="Alex Chen"
                role="Black Belt"
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 bg-maroon text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step toward mastering Taekwondo. Join our community today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white hover:bg-gray-100 text-maroon font-bold px-8 py-6 text-lg"
                asChild
              >
                <Link to="/classes">
                  View Schedule
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
