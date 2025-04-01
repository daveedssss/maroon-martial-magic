
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Dumbbell, Trophy, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Gym</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Expert Training" 
                description="Learn from Master Dave Hermino with over 20 years of experience in Taekwondo."
                icon={<Trophy size={40} />}
              />
              <FeatureCard 
                title="Modern Facilities" 
                description="Train in our state-of-the-art facility with quality equipment and spacious training areas."
                icon={<Dumbbell size={40} />}
              />
              <FeatureCard 
                title="Supportive Community" 
                description="Join a friendly and motivating community that supports your martial arts journey."
                icon={<Users size={40} />}
              />
            </div>
          </div>
        </section>
        
        {/* Classes Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kids Taekwondo</h3>
                  <p className="text-gray-600 mb-4">Ages 5-12 | Beginner to Intermediate</p>
                  <p className="text-gray-700">Build confidence, discipline and physical fitness in a fun, supportive environment.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Teen Taekwondo</h3>
                  <p className="text-gray-600 mb-4">Ages 13-17 | All Levels</p>
                  <p className="text-gray-700">Develop strength, agility and self-defense skills while building character.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Adult Taekwondo</h3>
                  <p className="text-gray-600 mb-4">Ages 18+ | All Levels</p>
                  <p className="text-gray-700">Master traditional techniques, improve fitness and relieve stress in our adult program.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="My child has gained so much confidence since joining Dave's Taekwondo classes. The instructors are patient and encouraging."
                name="Maria Santos"
                role="Parent"
              />
              <TestimonialCard 
                quote="I've been training here for 2 years and have seen incredible improvements in my fitness and mental focus. Great atmosphere!"
                name="John Rivera"
                role="Adult Student"
              />
              <TestimonialCard 
                quote="Master Hermino's teaching style is exceptional. He really cares about each student's progress and creates a motivating environment."
                name="Sarah Kim"
                role="Teen Student"
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-maroon text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Taekwondo Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join us today and discover the physical and mental benefits of training with Dave Hermino's Taekwondo Gym.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-maroon font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
