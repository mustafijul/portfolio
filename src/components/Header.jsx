// Header.jsx

import pp from "../../public/me.jpg";

const Header = () => {
  return (
    <div className="flex sm:flex-row gap-8">
      {/* header text div */}

      <div>
        <h1 className="text-4xl sm:text-6xl font-bold">Hi, I'm Tamim</h1>

        <div className="sm:text-xs md:text-xl text-gray-700 mt-2">
          <p>
            MERN Stack Developer turned Builder. I love <br /> creating useful
            products and solving problems. <br />
            Passionate about helping people and bringing ideas to life.
          </p>
        </div>
      </div>

      {/* img div */}

      <div >
        <img
  className="rounded-full w-24 h-24 sm:w-32 sm:h-32 p-3"
  src={pp}
  alt=""
/>
      </div>
    </div>
  );
};

export default Header;