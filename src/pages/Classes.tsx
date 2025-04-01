
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Classes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Classes</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the perfect Taekwondo program for you and your family
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                At Dave Hermino Taekwondo, we offer a variety of classes designed to accommodate
                different age groups and skill levels. Each program is carefully structured to
                provide appropriate challenges and skill development.
              </p>
              
              <div className="grid gap-10 mb-12">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="/little-tigers.jpg" 
                        alt="Little Tigers Program" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2 text-maroon">Little Tigers Program (Ages 4-6)</h3>
                      <p className="text-gray-700 mb-4">
                        Our Little Tigers program is specially designed for young children to develop 
                        basic motor skills, listening skills, and social interaction in a fun, 
                        positive environment. Classes focus on:
                      </p>
                      <ul className="list-disc pl-5 mb-4 text-gray-700">
                        <li>Basic movements and coordination</li>
                        <li>Following instructions and developing focus</li>
                        <li>Building confidence and social skills</li>
                        <li>Introduction to Taekwondo in an age-appropriate manner</li>
                      </ul>
                      <div className="mt-4">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                          Mon & Wed: 4:30 PM - 5:15 PM
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          Sat: 9:00 AM - 9:45 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="/kids-program.jpg" 
                        alt="Kids Program" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2 text-maroon">Kids Program (Ages 7-12)</h3>
                      <p className="text-gray-700 mb-4">
                        Our kids program builds on fundamental skills while introducing more 
                        advanced techniques. We emphasize discipline, respect, and perseverance 
                        while making classes engaging and fun.
                      </p>
                      <ul className="list-disc pl-5 mb-4 text-gray-700">
                        <li>Taekwondo forms (poomsae) and techniques</li>
                        <li>Self-defense applications</li>
                        <li>Physical fitness and coordination</li>
                        <li>Character development and life skills</li>
                      </ul>
                      <div className="mt-4">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                          Mon, Wed, Fri: 5:30 PM - 6:30 PM
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          Sat: 10:00 AM - 11:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="/teens-program.jpg" 
                        alt="Teens Program" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2 text-maroon">Teens Program (Ages 13-17)</h3>
                      <p className="text-gray-700 mb-4">
                        Our teens program focuses on developing strong technical skills while 
                        addressing the unique physical and emotional aspects of adolescence. 
                        We emphasize self-confidence, goal-setting, and personal achievement.
                      </p>
                      <ul className="list-disc pl-5 mb-4 text-gray-700">
                        <li>Advanced techniques and combinations</li>
                        <li>Sparring tactics and strategies</li>
                        <li>Strength and conditioning</li>
                        <li>Leadership skills and peer mentoring</li>
                      </ul>
                      <div className="mt-4">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                          Tue & Thu: 6:00 PM - 7:15 PM
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          Sat: 11:15 AM - 12:30 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="/adult-program.jpg" 
                        alt="Adult Program" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold mb-2 text-maroon">Adult Program (Ages 18+)</h3>
                      <p className="text-gray-700 mb-4">
                        Our adult program provides a comprehensive martial arts experience suitable for 
                        beginners and experienced practitioners alike. Classes combine technical training 
                        with practical applications and physical conditioning.
                      </p>
                      <ul className="list-disc pl-5 mb-4 text-gray-700">
                        <li>Traditional and modern Taekwondo techniques</li>
                        <li>Practical self-defense training</li>
                        <li>Fitness and stress reduction</li>
                        <li>Optional competition preparation</li>
                      </ul>
                      <div className="mt-4">
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mr-2">
                          Mon, Wed, Fri: 7:00 PM - 8:30 PM
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          Sat: 1:00 PM - 2:30 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6">
                  We invite you to schedule a free trial class to experience our training firsthand. 
                  Our friendly staff will help determine the best program for you or your child.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="bg-maroon hover:bg-maroon-light text-white px-6 py-3"
                    asChild
                  >
                    <Link to="/contact">
                      Schedule a Trial Class
                    </Link>
                  </Button>
                  <Button 
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3"
                    asChild
                  >
                    <a href="tel:09942553507">
                      <Phone className="mr-2 h-4 w-4" /> Call Us: 09942553507
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Classes;
