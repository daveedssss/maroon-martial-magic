
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const images = [
    {
      src: "/gallery/image1.jpg",
      alt: "Taekwondo training session",
      category: "Training"
    },
    {
      src: "/gallery/image2.jpg",
      alt: "Belt promotion ceremony",
      category: "Events"
    },
    {
      src: "/gallery/image3.jpg",
      alt: "Competition team",
      category: "Competitions"
    },
    {
      src: "/gallery/image4.jpg",
      alt: "Kids class",
      category: "Training"
    },
    {
      src: "/gallery/image5.jpg",
      alt: "Demonstration team",
      category: "Events"
    },
    {
      src: "/gallery/image6.jpg",
      alt: "Master class",
      category: "Training"
    },
    {
      src: "/gallery/image7.jpg",
      alt: "Summer camp",
      category: "Events"
    },
    {
      src: "/gallery/image8.jpg",
      alt: "Breaking techniques",
      category: "Demonstrations"
    },
    {
      src: "/gallery/image9.jpg",
      alt: "Adult class sparring",
      category: "Training"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Moments captured from classes, events, and competitions
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-700">
                Browse through photos of our Taekwondo community in action. From training sessions
                to special events, these images showcase the spirit and energy of our gym.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden shadow-md group relative"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={image.src || "/placeholder.svg"} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-white text-sm font-medium">
                      {image.category}
                    </span>
                    <h3 className="text-white text-lg font-semibold">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700">
                For more photos and updates, follow us on social media.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
