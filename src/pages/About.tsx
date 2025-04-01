
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Gym</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about Dave Hermino Taekwondo and our mission to empower through martial arts
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  <Avatar className="h-32 w-32 border-2 border-maroon">
                    <AvatarImage src="/lovable-uploads/33e9d2d0-b839-4797-b2b2-471021a9e58a.png" alt="Dave Hermino" />
                    <AvatarFallback className="bg-maroon text-white text-3xl">DH</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Dave Hermino</h2>
                    <p className="text-maroon font-semibold text-xl mb-2">Founder & Head Instructor</p>
                    <p className="text-gray-600">
                      Certified Taekwondo Master with over 15 years of experience
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6">Our Story</h3>
                <p className="text-gray-700 mb-4">
                  Dave Hermino Taekwondo was founded with a passion for sharing the transformative 
                  power of martial arts with our community. What began as a small training group 
                  has grown into a full-fledged academy dedicated to excellence in Taekwondo instruction.
                </p>
                <p className="text-gray-700 mb-4">
                  Master Dave Hermino brings over 15 years of experience and a deep understanding 
                  of traditional Taekwondo principles combined with modern training methods. 
                  His vision has always been to create not just skilled martial artists, but 
                  balanced individuals who carry the tenets of Taekwondo into every aspect of life.
                </p>
                <p className="text-gray-700">
                  Today, our gym serves students of all ages and abilities, helping them discover 
                  their potential through dedicated training and personalized instruction.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/about-image.jpg" 
                  alt="Dave Hermino Taekwondo" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Philosophy</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide our teaching and training methodology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Courtesy</h3>
                <p className="text-gray-600">
                  Showing respect and proper etiquette to all, regardless of rank or status.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Being honest with yourself and others in all actions and decisions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Perseverance</h3>
                <p className="text-gray-600">
                  Continuing despite challenges and obstacles on the path to improvement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discipline</h3>
                <p className="text-gray-600">
                  Building self-control in all aspects of training and daily life.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Our Instructors</h2>
                <p className="text-gray-700 mb-4">
                  Our team consists of certified instructors who are not only technically proficient 
                  but also passionate about teaching. Each instructor brings their unique experience 
                  and specialization to provide a well-rounded learning experience.
                </p>
                <p className="text-gray-700 mb-4">
                  Led by Master Dave Hermino, our instructors undergo continuous training to stay 
                  updated with the latest teaching methodologies and Taekwondo techniques. Many 
                  of our instructors are former competitors with national and international experience.
                </p>
                <p className="text-gray-700">
                  We pride ourselves on maintaining a positive, encouraging environment where 
                  students can learn at their own pace while being challenged to reach their full potential.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/instructors.jpg" 
                  alt="Our Instructors" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-maroon text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the benefits of training at Dave Hermino Taekwondo firsthand.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white hover:bg-gray-100 text-maroon font-bold px-8 py-3 text-lg"
                asChild
              >
                <Link to="/classes">
                  Explore Classes
                </Link>
              </Button>
              <Button 
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 text-lg"
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

export default About;
