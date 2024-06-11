import React, { useState } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const slides = [
    {
      image: "./images/Customer1.webp",
      paragraph: [
        "Quick response time, great communication to Case Managers, very happy with the Admission process!",
        "Mallory Fick",
        "Chief Marketing Officer",
      ],
    },
    {
      image: "./images/Customer2.webp",
      paragraph: [
        "You are the Best! Thank you for all your work today!",
        "Rachel Guglielmo",
        "Admission Director",
      ],
    },
    {
      image: "./images/Customer3.webp",
      paragraph: [
        "I heard great things about the work that Offshore team is doing!!! Thank you for doing that..",
        "Catherine Shea Ellis",
        "Admission Director",
      ],
    },
    {
      image: "./images/Customer4.webp",
      paragraph: [
        "You are such an important part to this company. Our company had gone so much changes lately but the most positive one, is all of you. Thank you for everything you do everyday!",
        "Erika Nichols",
        "Director of Case Management",
      ],
    },
    {
      image: "./images/Customer5.webp",
      paragraph: [
        "Thank you, Offshore Accounts Payable Team! You are exceeding my every expectation",
        "Rylee TenBrock",
        "",
      ],
    },
    {
      image: "./images/Customer6.webp",
      paragraph: [
        "You are all doing so great! Keep up the good job!",
        "Margeaux Donovan",
        "Accounts Payable Specialist",
      ],
    },
    {
      image: "./images/Customer7.webp",
      paragraph: [
        "I would like to thank you for being such a great additions to the Accounts Payable Team!",
        "Rebecca Wallace",
        "Regional Controller",
      ],
    },
  ];

  return (
    <div className="carousel-container">
      <div className="mt-10 carousel relative flex justify-center items-center">
        {currentSlide % 2 === 0 && (
          <div className="slide-content flex flex-col lg:flex-row items-center">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="carousel-image w-full lg:w-[50%] h-[30vh] min-h-[25vh] max-w-3xl"
            />
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
                  {slides[currentSlide].paragraph[0]}
                </p>
              </div>
              <div className="px-4 py-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {slides[currentSlide].paragraph[1]}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">
                  {slides[currentSlide].paragraph[2]}
                </p>
              </div>
            </div>
          </div>
        )}

        {currentSlide % 2 !== 0 && (
          <div className="slide-content flex flex-box">
            <div className="slide-content flex flex-col lg:flex-row items-center">
              <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                  <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
                    {slides[currentSlide].paragraph[0]}
                  </p>
                </div>
                <div className="px-4 py-2">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {slides[currentSlide].paragraph[1]}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs">
                    {slides[currentSlide].paragraph[2]}
                  </p>
                </div>
              </div>
              <img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="carousel-image w-full lg:w-[50%] h-[30vh] min-h-[25vh] max-w-3xl"                
              />
            </div>
          </div>
        )}

        <div className="carousel-controls absolute bottom-2 left-0 right-0 flex justify-between">
          <button
            onClick={goToPreviousSlide}
            className="mx-2 cursor-pointer rounded-full px-2 py-1 text-white bg-primary sm:px-3 sm:py-1.5 lg:px-4 lg:py-2"
          >
            &lt;{" "}
          </button>
          <button
            onClick={goToNextSlide}
            className="mx-2 cursor-pointer rounded-full px-2 py-1 text-white bg-primary sm:px-3 sm:py-1.5 lg:px-4 lg:py-2"
          >
            {" "}
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
