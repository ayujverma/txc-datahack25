import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import txcLogo from "./assets/txc.png";
import mldsLogo from "./assets/mlds2.png";
import chevronLogo from "./assets/chevron.png";

const questions = [
  "How should I attend?",
  "What can I win?",
  "How many people per team?",
  "How much does this cost to attend?",
  "What will I be doing?",
  "Can I work on something I've already started?",
  "I'm interested in becoming a sponsor!",
  "I have another question!"
];

const answers = [
  <span>Sign up <a href="https://your-signup-link.com" className="text-[#8791F2]">here</a>! You can also find the schedule <a href="https://your-schedule-link.com" className="text-[#8791F2]">here</a>.</span>,
    "A variety of prizes can be won including Overall Best Project and Best Visualization. The top three teams will receive $2000, $1000, and $500 respectively.",
    "There can be a maximum of 4 people per team. You may specify your team when applying so that you are all considered together.",
    "Texas Datahack is absolutely free for all UT students!",
    "You will get to explore and manipulate interesting data sets while working with a team and presenting to other teams and judges! You will also get to listen to workshops from our sponsors! Hint: The current dataset has a musical feel.",
    "No. You will have a lot of freedom in what to create at the hackathon, but the projects will have to utilize the datasets that we provide. This helps us create a more level playing field for the contestants.",
    "Please reach out to mlds.utexas@gmail.com.",
    "You can email us at mlds.utexas@gmail.com."
]

const icons = [
  "▶️", "🏆", "🫂", "🆓", "💻", "🆕", "🤝", "❓",
];

const aboutUs = [
    "Texas Convergent is a product development education organization founded on project-based learning. We strive to be at the center of interdisciplinary product development on campus, and equip students with the hard and soft skills needed to build solutions as well as develop an entrepreneurial mindset.",
    "We strive to encourage students to pursue and share their interests in the field of data science and machine learning. We hold weekly meetings on Tuesday nights in the form of technical and career-related data science workshops, technical talks by faculty members, and presentations by guests from industry. We also plan extra social events where members will have the opportunity to meet with researchers and recruiters in the field. Beyond lectures, we support participation in online ML competitions, and generally pursue projects that interest us."
];

const Datahack = () => {
  return (
    <div className="relative min-h-screen font-inter text-white bg-gray-900 bg-geometric-lines bg-cover bg-center bg-repeat opacity-1000">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-8xl font-bold text-[#8791F2] mb-4">
          <ReactTyped strings={["Datahack 2025"]} typeSpeed={100} backSpeed={100} loop />
        </h1>
        <p className="mt-2 text-xl text-[#c7d881]">Date: March 08, 2025 | Location: Welch Hall | Time: 8:30 AM - 6:00 PM</p>
        <div className="mt-4 space-x-4">
          <a
            href="[Registration Link]"
            className="bg-[#8791F2] px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-[#5e65a9] transition-transform transform hover:scale-105 text-white"
          >
            Register
          </a>
          <a
            href="[Welcome Packet Link]"
            className="bg-[#DEF190] px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-[#c7d881] transition-transform transform hover:scale-105 text-black"
          >
            View Welcome Packet
          </a>
        </div>
      </header>

      {/* Mission Section */}
      <section className="px-6 md:px-20 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#8791F2]">Our Mission</h2>
        <p className="text-lg text-white bg-gray-800 p-6 rounded-lg text-center shadow-lg">
        Texas Datahack is an all day competition hosted by MLDS and Texas 
        Convergent where you can put your data science, coding, and creativity 
        skills to the test and create a meaningful project with real world data. 
        You will get to explore and manipulate interesting data sets to figure 
        out how interpret geolocation data. Prizes will be supplied, and we will 
        also have workshops the week of the event to prepare you for the 
        competition, so if you are new to data science, don't let that discourage 
        you from applying, all majors are welcome.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6 text-[#8791F2]">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer relative"
            >
              <span className="absolute top-4 left-4 text-3xl">{icons[index]}</span>
              <h3 className="text-xl font-semibold mt-6 text-[#DEF190]">{question}</h3>
              <p className="mt-2 text-white">{answers[index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="px-6 md:px-20 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#8791F2]">Sponsors</h2>
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://careers.chevron.com/search-jobs?acm=ALL&alrpm=ALL&ascf=[%7B%22key%22:%22ALL%22,%22value%22:%22%22%7D]" target="_blank" rel="noopener noreferrer">
            <img src={chevronLogo} alt="Chevron" className="w-48 h-48 cursor-pointer bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 relative" />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-6 md:px-20 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[#8791F2]">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[txcLogo, mldsLogo].map((logo, index) => (
            <div key={index} className="relative w-full h-48">
              <div className="h-full transform transition-transform duration-500 bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg text-[#8791F2]">
                  <img src={logo} alt={`Logo ${index + 1}`} className="w-64 h-64 object-contain" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg text-white opacity-0 transform rotate-y-180 hover:opacity-100">
                  {aboutUs[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center">
        <p className="text-lg text-white">Texas Convergent</p>
        <div className="flex justify-center space-x-4 mt-2">
          <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
        </div>
        <p className="mt-2 text-sm text-white">&copy; 2025 Texas Convergent. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Datahack;
