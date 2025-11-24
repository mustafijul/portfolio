// Header.jsx
import profile from '../../public/vite.svg'
import pp from '../../public/me.jpg'

const Header = () => {
  return (
    <div className='flex gap-8'>
      {/* header text div */}

      <div>
        <h1 className="text-6xl font-bold">Hi, I'm Tamim</h1>
        <div className="text-xl text-gray-700 mt-2">
          <p>MERN Stack Developer turned Builder.
I love <br /> creating useful products and solving problems. <br />
Passionate about helping people and bringing ideas to life.</p>
          
        </div>
      </div>

      {/* img div */}

      <div >
        <img className='rounded-full w-32 h-32 p-3' src={pp} alt="" />
      </div>
      
    </div>
  );
};

export default Header;
