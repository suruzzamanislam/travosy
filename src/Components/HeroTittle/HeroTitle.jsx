import { NavLink } from 'react-router-dom';
import './HeroTitle.css';
import { LuSearch } from 'react-icons/lu';
import Hamburger from 'hamburger-react';
import { useContext } from 'react';
import { allEvents } from '../../AllProvider/AllProvider';
import logo from '../../assets/logo.png';
import user from '../../assets/user.jpg';
import PropTypes from 'prop-types';

const HeroTitle = ({ route, title }) => {
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
    <div className="h-[50vh] mb-10 bg-transparent" id="Hero_banner">
      {/* navbar */}
      <nav className=" py-3 before:opacity-100 bg-transparent">
        <div className=" w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex justify-between">
          <img src={logo} alt="" />
          <div className="flex items-center gap-x-5 text-xl text-black">
            <ul className="md:flex gap-x-5 hidden text-black">{NavItem}</ul>
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
              className={`absolute z-50 left-0 top-[73px] bg-slate-500 w-full flex py-5 gap-y-3 flex-col  items-center justify-center ${
                isOpen ? 'mobile_menu_down' : 'mobile_menu_up'
              }`}
            >
              {NavItem}
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex items-center flex-col ">
        <h1 className="text-4xl font-serif font-semibold mt-16 md:mt-24">
          {title}
        </h1>
        <ul className="flex mt-28 md:mt-36 gap-x-2 items-center font-semibold text-white font-serif">
          <li>
            <NavLink className="md:text-gray-700" to="/">
              TRAVOSY
            </NavLink>
          </li>
          <li>&gt;</li>
          <li>{route}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroTitle;
HeroTitle.propTypes = {
  route: PropTypes.string,
  title: PropTypes.string,
};
