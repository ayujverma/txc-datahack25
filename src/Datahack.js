import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Datahack = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold">Datahack</h1>
        <p className="mt-2 text-lg">Date: [Insert Date] | Location: [Insert Location] | Time: [Insert Time]</p>
        <div className="mt-4 space-x-4">
          <a
            href="[Registration Link]"
            className="bg-blue-600 px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Register
          </a>
          <a
            href="[Welcome Packet Link]"
            className="bg-gray-700 px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            View Welcome Packet
          </a>
        </div>
      </header>

      {/* Mission Section */}
      <section className="px-6 md:px-20 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-300">
          Texas Convergent's Datahack aims to bring together data enthusiasts
          to solve real-world problems through collaboration, creativity, and innovation.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">FAQ</h2>
        <div className="space-y-6">
          {[...Array(8)].map((_, index) => (
            <details key={index} className="bg-gray-800 p-4 rounded-lg">
              <summary className="cursor-pointer text-lg font-semibold">Question {index + 1}?</summary>
              <p className="mt-2 text-gray-300">Answer to question {index + 1}.</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="px-6 md:px-20 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Sponsors</h2>
        <p className="text-lg text-gray-300">Our amazing sponsors who make this event possible.</p>
        <div className="flex justify-center mt-6 space-x-6">
          {/* Replace with actual sponsor logos */}
          <div className="w-32 h-16 bg-gray-700 flex items-center justify-center">Sponsor 1</div>
          <div className="w-32 h-16 bg-gray-700 flex items-center justify-center">Sponsor 2</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-lg">Texas Convergent</p>
        <div className="flex justify-center space-x-4 mt-2">
          <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
        </div>
        <p className="mt-2 text-sm">&copy; 2025 Texas Convergent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Datahack;