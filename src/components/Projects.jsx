import React from "react";
import mantic from "../../public/mantic.png";
import juris from "../../public/juris.png";
import quize from "../../public/quize.png";
import { FiGlobe } from "react-icons/fi";

export default function Projects() {
  return (
    <div>
      <div className="mt-20">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <p className="bg-black p-1 text-white w-24 rounded-full text-center">
            My Projects
          </p>
        </div>

        <div className="text-center my-5">
          <h1 className="text-5xl font-bold">Checkout My Latest Work</h1>
        </div>

        {/* === Cards start here === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mb-10">
          {/* Card 1 */}
          <div className="border-gray-300 rounded-xl shadow-lg p-3 bg-white">
            <img src={mantic} alt="" />

            <h2 className="text-xl text-gray-700 font-bold mt-3">Job Mantic</h2>
            <p className="text-gray-600 mt-1 text-xs">
              Job Mantic is a modern job-hunting platform I built to simplify
              the process of finding meaningful career opportunities. With a
              clean UI. Basically It's just front end with modern ui design.
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-3">
              <p className="text-xs bg-gray-200 p-2 rounded-xl">React</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Tailwind css</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Daisy ui</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Motion</p>
            </div>

              <a
              href="https://jobmantic.vercel.app/"
              target="_blank"
              className="bg-black p-1 text-white w-24 rounded-full text-center text-xs flex items-center justify-center gap-1 mt-3"
            >
              <FiGlobe size={12} />
              Website
            </a>
          </div>

          {/* card 2 */}
          <div className="border-gray-300 rounded-xl shadow-lg p-3 bg-white">
            <img src={juris} alt="" />

            <h2 className="text-xl text-gray-700 font-bold mt-3">
              Trust juris
            </h2>
            <p className="text-gray-600 mt-1 text-xs">
              TrustJuris is a legal assistance platform I designed to make
              accessing legal help simpler and more approachable. Focused on a
              clean and professional front-end experience, it allows users to
              explore legal services, understand their options, and connect with
              the right resources quickly.
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-3">
              <p className="text-xs bg-gray-200 p-2 rounded-xl">React</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Tailwind css</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Daisy ui</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Motion</p>
            </div>
            <p className="text-xs bg-gray-200 p-2 rounded-xl w-10 mt-2">
              Slider
            </p>
            {/* website link */}
            <a
              href="https://trust-juris.vercel.app/"
              target="_blank"
              className="bg-black p-1 text-white w-24 rounded-full text-center text-xs flex items-center justify-center gap-1 mt-3"
            >
              <FiGlobe size={12} />
              Website
            </a>
          </div>

          {/* card 3 */}
          <div className="border-gray-300 rounded-xl shadow-lg p-3 bg-white">
            <img src={quize} alt="" />

            <h2 className="text-xl text-gray-700 font-bold mt-3">Quizemeter</h2>
            <p className="text-gray-600 mt-1 text-xs">
              Quizemeter is an interactive quiz platform built using the MERN
              stack, designed to make learning fun and engaging. It allows users
              to explore various quiz categories, test their knowledge, and
              track their progress through a smooth and dynamic interface. With
              its fast performance and real-time interactions, Quizemeter
              showcases my ability to build full-stack applications that are
              both educational and highly user-focused.
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-3">
              <p className="text-xs bg-gray-200 p-2 rounded-xl">React</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Tailwind css</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Daisy ui</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">JS</p>
            </div>

            <div className="flex gap-4 mt-3 mb-3">
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Node js</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">MongoDB</p>
              <p className="text-xs bg-gray-200 p-2 rounded-xl">Docker</p>
            </div>

            <a
              href="https://quizemeter.com"
              target="_blank"
              className="bg-black p-1 text-white w-24 rounded-full text-center text-xs flex items-center justify-center gap-1"
            >
              <FiGlobe size={12} />
              Website
            </a>
          </div>
        </div>
        {/* === Cards end === */}
      </div>
    </div>
  );
}
