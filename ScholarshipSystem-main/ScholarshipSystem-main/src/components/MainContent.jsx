import { useState, useEffect } from "react";
import carouselImage1 from "../assets/carousel1.jpg";
import carouselImage2 from "../assets/carousel2.jpg";

const MainContent = () => {
  const [currentImage, setCurrentImage] = useState(carouselImage1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === carouselImage1 ? carouselImage2 : carouselImage1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Contact Faculty - Left */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[320px] border-l-4 border-blue-500 pl-4 text-center sm:text-left">
          <h2 className="font-bold text-xl mb-2 text-blue-700">Contact Faculty:</h2>
          <p className="text-lg text-gray-700">
            Scholarship Mam No.:<br />
            Scholarship Query Post <br />
            Email:
          </p>
        </div>

        {/* Carousel - Center */}
        <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden relative min-h-[320px] flex items-center justify-center">
          <img 
            src={currentImage} 
            alt="Carousel" 
            className="w-full h-full object-cover transition-all duration-500 ease-in-out rounded-lg"
          />
        </div>

        {/* Notice Board - Right */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start min-h-[320px] border-l-4 border-green-500 pl-4 text-center sm:text-left">
          <h2 className="font-bold text-xl mb-2 text-green-700">Notice Board</h2>
          <p className="text-lg text-gray-700">Latest announcements and updates.</p>
        </div>

      </div>
    </div>
  );
};

export default MainContent;
