import React from "react";
import orionlogo from "../assets/orionlogo.png";
import Arrow from "../assets/Arrow.png";
import Homeimg from "../assets/Homemain.png";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-0 bg-white shadow-md z-1 overflow-hidden h-16">
        <div className="flex items-center">
          <img src={orionlogo} alt="Orion logo" className="h-20 w-60 mr-2" />
          <span className="text-blue-900 text-2xl font-bold"></span>
        </div>
        <div className="hidden md:flex space-x-36">
          <button className="text-green-500 font-semibold">Learn</button>
          <button className="text-blue-900">Practice</button>
          <button className="text-blue-900">Assessments</button>
          <div className="space-x-3">
            <button className="text-blue-900 border border-blue-900 px-4 py-1 rounded">
              Login
            </button>
            <button className="bg-blue-900 text-white px-4 py-1 rounded">
              Sign-up
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <div className="absolute top-20 left-40 -mb-16 -ml-16 z-10">
          <img src={Arrow} alt="Decorative arrow" width={100} height={100}/>
        </div>
        <div className="md:w-1/2 mb-8 font-semibold md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-10">
            The only learning platform that helps you score better marks and
            support self-growth.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Study with a self-aware adaptive system, understand, remember, and
            master subjects without worry, and know your academic strengths and
            weaknesses to truly succeed.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-950 text-white px-6 py-2 rounded">
              Start Now - It's FREE
            </button>
            <button className="border border-blue-900 text-blue-900 px-6 py-2 rounded">
              Book a Demo
            </button>
          </div>
        </div>
              <div className="md:w-1/2 md:">
          <img
            src={Homeimg}
            alt="Home img"
            className="object-fit ml-40 w-30px h-30px rounded-lg shadow-lg  "
          />
        </div>
      </main>
    </div>
  );
}
