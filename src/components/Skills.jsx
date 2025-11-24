import React from "react";

export default function Skills() {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-xl font-bold">Skills</h1>
        {/* skills div */}

        <div className="flex gap-2 mt-3">
          <p className="bg-black p-1 text-white w-20 rounded-full text-center">
            React
          </p>
          <p className="bg-black p-1 text-white w-24 rounded-full text-center">
            TypeScript
          </p>
          <p className="bg-black p-1 text-white w-12 rounded-full text-center">
            Git
          </p>
          <p className="bg-black p-1 text-white w-20 rounded-full text-center">
            Next.js
          </p>
          <p className="bg-black p-1 text-white w-20 rounded-full text-center">
            Node.js
          </p>
          <p className="bg-black p-1 text-white w-24 rounded-full text-center">
            JavaScript
          </p>
        </div>
      </div>
    </div>
  );
}
