"use client"

import LandingPage from "@/components/LandingPage";
import LandingPage2 from "@/components/LandingPage2";




function HeroSection() {
  return (
    <>
      {/* first Hero section */}
      <div className="bg-gray-50">
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              {/* Text Section */}
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                    Dare to experience the Journey you have always wanted.
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                    India's first travel itinerary maker & sharing platform.
                  </p>
                </div>
                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                  <div className="hidden sm:block">
                    <svg
                      className="text-gray-400"
                      width={16}
                      height={39}
                      viewBox="0 0 16 39"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.72265"
                        y1="10.584"
                        x2="15.7226"
                        y2="0.583975"
                      />
                      <line
                        x1="0.72265"
                        y1="17.584"
                        x2="15.7226"
                        y2="7.58398"
                      />
                      <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                      <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                      <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center lg:justify-end">
                <img
                  className="w-full max-w-md rounded-lg" // You can add max-w-md to limit image size
                  src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* second hero section */}
      <div className="bg-gray-50">
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              {/* Image on the left with fixed size */}
              <div className="flex justify-center lg:justify-start">
                <img
                  className="h-auto max-w-full"
                  src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
              {/* Text on the right */}
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                    Dare to experience the Journey you have always wanted.
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                    India's first travel itinerary maker & sharing platform.
                  </p>
                </div>
                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                  <div className="hidden sm:block">
                    <svg
                      className="text-gray-400"
                      width={16}
                      height={39}
                      viewBox="0 0 16 39"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="0.72265"
                        y1="10.584"
                        x2="15.7226"
                        y2="0.583975"
                      />
                      <line
                        x1="0.72265"
                        y1="17.584"
                        x2="15.7226"
                        y2="7.58398"
                      />
                      <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                      <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                      <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Crousals */}
     <LandingPage /> 
     <LandingPage2 />
    </>
  );
}

export default HeroSection;
