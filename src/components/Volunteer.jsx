import React from "react";
import sds from "../../public/sds.png";
import luicf from "../../public/luicf.png";

export default function Volunteer() {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-xl font-bold mb-3">Volunteery Works</h1>
        {/* voluteery div */}

        {/* === Cards start here === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mb-10">
          {/* card 1 */}
          <div className="border-gray-300 rounded-xl shadow-lg p-3 bg-white">
            <img src={luicf} alt="" />

            <h2 className="text-xl text-gray-700 font-bold mt-3">
              Leading University <br /> Islamic Cultural Forum
            </h2>
            <p className="mt-2 text-xs font-bold">Vice President</p>
            <p className="mt-2 text-xs">Date: 2025-present</p>
          </div>

          {/* Card 2 */}
          <div className="border-gray-300 rounded-xl shadow-lg p-3 bg-white">
            <img src={sds} alt="" />

             <h2 className="text-xl text-gray-700 font-bold mt-3">
             Students Dawah Society
            </h2>
            <p className="mt-2 text-xs font-bold">Vice President</p>
            <p className="mt-2 text-xs">Date: 2023-2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
