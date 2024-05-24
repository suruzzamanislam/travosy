import './Home.css';
import { FaRegClock } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import { TbBrandFacebook } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { CiTwitter } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { LuSearch } from 'react-icons/lu';
import user from '../../assets/user.jpg';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext } from 'react';
import { allEvents } from '../../AllProvider/AllProvider';
import { FaVideo } from 'react-icons/fa';
import { LiaUserFriendsSolid } from 'react-icons/lia';

const Home = () => {
  const { isOpen, setOpen } = useContext(allEvents);

  const NavItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/tour">Tour</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    // header section
    <div id="Home">
      {/* header */}
      <header id="header" className="lg:h-[97vh] pb-16 md:pb-0">
        <div>
          {/* small header */}
          <div
            id="h_smaller_header"
            className="bg-[#0F172A] text-gray-300 py-3 text-sm"
          >
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex flex-wrap gap-1 justify-center  md:justify-between">
              <div className="flex items-center gap-x-2 md:gap-x-3">
                <FaRegClock className="text-lg text-red-600"></FaRegClock>
                <span>Mon-Sat: 9am to 6pm</span>
                <IoLocationOutline className="text-lg text-red-600"></IoLocationOutline>
                <span>Houston, USA 485</span>
              </div>
              <div className="flex items-center gap-x-2 md:gap-x-3">
                <CiMail className="text-lg text-red-600"></CiMail>
                <span>contact@example.com</span>
                <TbBrandFacebook className="text-lg hover:text-red-500 cursor-pointer"></TbBrandFacebook>
                <IoLogoInstagram className="text-lg hover:text-red-500 cursor-pointer"></IoLogoInstagram>
                <CiTwitter className="text-lg hover:text-red-500 cursor-pointer"></CiTwitter>
                <FiPhone className="text-lg hover:text-red-500 cursor-pointer"></FiPhone>
              </div>
            </div>
          </div>
          {/* navbar */}
          <nav className=" py-3">
            <div className=" w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex justify-between">
              <img src={logo} alt="" />
              <div className="flex items-center gap-x-5 text-xl text-white">
                <ul className="md:flex gap-x-5 hidden text-gray-100">
                  {NavItem}
                </ul>
                <button>
                  <LuSearch></LuSearch>
                </button>
                <button>
                  <img
                    className="w-9 h-9 rounded-full border-2 border-green-500"
                    src={user}
                    alt=""
                  />
                </button>
                <button className="md:hidden">
                  <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>
                </button>

                <ul
                  className={`absolute left-0 top-[73px] bg-slate-500 w-full flex py-5 gap-y-3 flex-col items-center justify-center ${
                    isOpen ? 'mobile_menu_down' : 'mobile_menu_up'
                  }`}
                >
                  {NavItem}
                </ul>
              </div>
            </div>
          </nav>
          {/* hero */}
          <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-y-6 justify-between mt-6 md:mt-14">
            <div className="text-white space-y-2 md:space-y-9">
              <p className="font-mono text-xl  md:text-3xl">
                Find Your Ideal Stay
              </p>
              <p className="text-3xl md:text-6xl font-semibold md:leading-normal">
                Where Do You <br /> Want To Go?
              </p>
              <p className="md:text-xl text-gray-300">
                Planning for a trip? We will organize your trip with the best{' '}
                <br />
                places and within best budget!
              </p>
              <div className="flex items-center gap-x-3">
                <button className=" px-5 py-2 rounded-md bg-[#EF4444] hover:bg-transparent hover:border border-[#EF4444]">
                  View Packages
                </button>
                <button className=" w-9 h-9 flex items-center justify-center   rounded-full bg-[#EF4444] hover:bg-transparent hover:border border-[#EF4444]">
                  <FaVideo></FaVideo>
                </button>
              </div>
            </div>
            <form className="bg-white p-8 rounded-lg space-y-5">
              <h1 className="text-xl md:text-2xl font-serif font-semibold mb-3">
                Search Your Destinations
              </h1>
              <div>
                <label
                  htmlFor="search"
                  className="block mb-1 text-lg font-sans"
                >
                  Search:
                </label>
                <div className="relative">
                  <input
                    className="focus:outline-none bg-gray-200 rounded-md w-full py-2 pl-8"
                    type="text"
                    name=""
                    id="search"
                  />
                  <span className="absolute left-2 top-3">
                    <LuSearch></LuSearch>
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="search"
                  className="block mb-1 text-lg font-sans"
                >
                  Select Your Date:
                </label>
                <div>
                  <input
                    className="focus:outline-none bg-gray-200 rounded-md w-full py-2 pl-2 pr-2 appearance-auto"
                    type="date"
                    name=""
                    id="search"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="search"
                  className="block mb-1 text-lg font-sans"
                >
                  Select Your Date:
                </label>
                <div>
                  <input
                    className="focus:outline-none bg-gray-200 rounded-md w-full py-2 pl-2 pr-2 appearance-auto"
                    type="date"
                    name=""
                    id="search"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="">
                  {' '}
                  No. of Person
                </label>
                <div className="relative mt-2">
                  <select
                    className="focus:outline-none bg-gray-200 rounded-md w-full py-2 pl-8 appearance-none"
                    name=""
                    id=""
                  >
                    {' '}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <span className="absolute left-2 top-[9px]">
                    <LiaUserFriendsSolid className="text-xl"></LiaUserFriendsSolid>
                  </span>
                </div>
              </div>
              <div>
                <button className="w-full bg-[#EF4444] py-2 text-white rounded-md hover:text-black">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
