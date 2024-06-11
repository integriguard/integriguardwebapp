// import React, { useState, useEffect } from 'react';

// function Carousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     // './images/Hero1.png',
//     // './images/Hero2.png',
//     // './images/Hero3.png',
//     // './images/Hero4.png',
//     // './images/Hero5.png'
//     'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
//     'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
//     'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
//     'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg'
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % slides.length);
//     }, 4000); // Adjust the interval duration as needed (in milliseconds)

//     return () => clearInterval(interval);
//   }, [currentSlide, slides.length]);


//   return (
//     <div className="carousel-container">
//       <div className="carousel relative flex justify-center items-center">
//         {slides.map((slide, index) => (
//           <div class="md:shrink-0">
//              <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`carousel-image min-h-screen min-h-[25vh] w-full h-auto object-cover ${index === currentSlide ? '' : 'hidden'}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Carousel;



// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const slides = [
    './images/HeaderCarouselPic0.webp',
    './images/HeaderCarouselPic1.webp',
    './images/HeaderCarouselPic2.webp',
    './images/HeaderCarouselPic3.webp',
    './images/HeaderCarouselPic4.webp'
  ];

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000); // Adjust the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);


  return (
    <div className="carousel-container">
      <div className="carousel relative flex justify-center items-center">
        {slides.map((slide, index) => (
          // <div class="md:shrink-0">
             <img key={index} src={slide} alt={`Slide ${index + 1}`} className={`carousel-image rounded-3xl min-h-[25vh] w-full h-auto object-cover ${index === currentSlide ? '' : 'hidden'}`} />
          // </div>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="carousel-container">
  //     <div className="carousel relative flex justify-center items-center">
  //       <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="carousel-image w-full h-auto min-h-screen min-h-[30vh]" />
  //       <div className="carousel-controls absolute bottom-2 left-0 right-0 flex justify-between">
  //         <button onClick={goToPreviousSlide} className="mx-2 cursor-pointer rounded-full px-2 py-1 text-gray-500 bg-gray-200 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2">&lt; </button>
  //         <button onClick={goToNextSlide} className="mx-2 cursor-pointer rounded-full px-2 py-1 text-gray-500 bg-gray-200 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2"> &gt;</button>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Carousel;



