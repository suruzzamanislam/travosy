import './Home.css';
import { FaRegClock } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import { TbBrandFacebook } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { CiTwitter } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { LuSearch } from 'react-icons/lu';
import { LuMoveRight } from 'react-icons/lu';
import { FaHeart } from 'react-icons/fa';

import user from '../../assets/user.jpg';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext } from 'react';
import { allEvents } from '../../AllProvider/AllProvider';
import { FaVideo } from 'react-icons/fa';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import top_destination_1 from '../../assets/top_destination_1.jpg';
import top_destination_2 from '../../assets/top_destination_2.jpg';
import top_destination_3 from '../../assets/top_destination_3.jpg';
import top_destination_4 from '../../assets/top_destination_4.jpg';
import top_destination_5 from '../../assets/top_destination_5.jpg';
import top_destination_6 from '../../assets/top_destination_6.jpg';
import top_destination_7 from '../../assets/top_destination_7.jpg';
import top_destination_8 from '../../assets/top_destination_8.jpg';
import faqImg from '../../assets/h_banner_3.jpg';
import say_user_1 from '../../assets/say_user_1.jpg';
import say_user_2 from '../../assets/say_user_2.jpg';
import say_user_3 from '../../assets/say_user_3.jpg';
import say_user_4 from '../../assets/say_user_4.jpg';
import say_user_5 from '../../assets/say_user_5.jpg';
import say_user_6 from '../../assets/say_user_6.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// FAQ
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
      title: 'How does it work ?',
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      title: 'Do I need a designer to use Travosy ?',
      content:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
      title: 'What do I need to do to start selling ?',
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      title: 'What happens when I receive an order ?',
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
    {
      title: 'How does it work  ?',
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`,
    },
  ],
};
const styles = {
  // bgColor: 'white',
  titleTextColor: 'blue',
  rowTitleColor: 'red',
  rowContentColor: 'grey',
  arrowColor: 'red',
};

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
      {/* main */}
      <main>
        {/* Top Destinations */}
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-10 md:my-24">
          <div className="flex flex-col items-center gap-y-3 mb-10">
            <h1 className="text-center text-3xl font-sans font-semibold">
              Top Destinations
            </h1>
            <p className="max-w-xl text-center text-gray-500 px-3">
              Planning for a trip? We will organize your trip with the best
              places and within best budget!
            </p>
          </div>
          <div>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_1}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Room, Italy</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_2}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Singapore</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_3}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Gua, India</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_4}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Wistler, Canada</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_5}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Lampur, Malaycia</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_6}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Paris, France</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_7}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Sudeny, Australia</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-y-1">
                  <div className="top_destination rounded-full">
                    <img
                      className="rounded-full"
                      src={top_destination_8}
                      alt=""
                    />
                  </div>
                  <p className="font-semibold">Virginia Beach</p>
                  <p className="text-gray-500">3 Hotels</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* tour packages */}
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-10 md:my-24">
          <div className="flex flex-col items-center gap-y-3 mb-5 md:mb-10">
            <h1 className="text-center text-3xl font-sans font-semibold">
              Tours Packages
            </h1>
            <p className="max-w-xl text-center text-gray-500 px-3">
              Planning for a trip? We will organize your trip with the best
              places and within best budget!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-4">
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_1}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">Dubai</span>
                </div>
                <p className="text-lg">Cuba Sailing Adventure</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">5.0(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 58 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_2}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">Italy</span>
                </div>
                <p className="text-lg">Tour in New York</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">5.2(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 52 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_3}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">Maldivas</span>
                </div>
                <p className="text-lg">Discover Greece</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">5.0(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 50 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_4}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">USA</span>
                </div>
                <p className="text-lg">Museum of Modern Art</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">5.5(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 60 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_5}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">Bali</span>
                </div>
                <p className="text-lg">Peek Mountain View</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">4.9(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 45 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_6}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">Bangkok</span>
                </div>
                <p className="text-lg">Hot Baloon Journey</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">5.0(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 59 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_7}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">Singapore</span>
                </div>
                <p className="text-lg">Orca Camp Kayaking Tripney</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">5.7(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 54 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md border shadow-md group">
              <div className="overflow-hidden rounded-md relative">
                <img
                  className="rounded-md scale-125 group-hover:scale-100 duration-300"
                  src={top_destination_8}
                  alt=""
                />
                <span className="absolute top-3 translate-y-5 group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100 right-3 w-8 h-8 rounded-full  flex justify-center items-center cursor-pointer group">
                  <FaHeart className="w-full h-full p-2 rounded-full text-gray-300 bg-white hover:text-red-500"></FaHeart>
                </span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex gap-x-2 items-center">
                  <IoLocationOutline className="text-red-600"></IoLocationOutline>
                  <span className="text-gray-500">Thiland</span>
                </div>
                <p className="text-lg">Caño Cristales River Trip</p>
                <div className="text-orange-400 flex gap-x-2 items-center pb-3">
                  <span className="text-gray-500">Rating:</span>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <span className="text-gray-700">5.8(30)</span>
                </div>
                <div className="border-t py-2 flex justify-between items-center ">
                  <p className="text-lg text-red-500">$ 50 / Day</p>
                  <button className="flex items-center gap-x-2 text-gray-500 hover:text-red-500">
                    Explore Now <LuMoveRight></LuMoveRight>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="flex items-center gap-x-2 text-gray-500 justify-center hover:text-red-600 duration-100">
              See More Tours <LuMoveRight></LuMoveRight>
            </button>
          </div>
        </div>
        {/* Users Say */}
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-10 md:my-24">
          <div className="flex flex-col items-center gap-y-3 mb-10">
            <h1 className="text-center text-3xl font-sans font-semibold">
              What Our Users Say
            </h1>
            <p className="max-w-xl text-center text-gray-500 px-3">
              This is just a simple text made for this unique and awesome
              template, you can replace it with any text.
            </p>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" ">
                  <div className="flex bg-white justify-center flex-col items-center text-center gap-y-5 border border-gray-300 p-7">
                    <FaQuoteLeft className="text-2xl text-red-500"></FaQuoteLeft>
                    <p className="text-gray-500 px-7">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                    <div className="text-orange-400 flex gap-x-2">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                  </div>
                  <div className="w-5 h-5 border border-gray-600 rotate-45 relative mx-auto bottom-3 -z-10"></div>
                  <div className="flex flex-col items-center justify-center gap-y-1 mt-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={say_user_1}
                      alt=""
                    />
                    <p>Calvin Carlo</p>
                    <p className="text-gray-600">Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="flex bg-white justify-center flex-col items-center text-center gap-y-5 border border-gray-300 p-7">
                    <FaQuoteLeft className="text-2xl text-red-500"></FaQuoteLeft>
                    <p className="text-gray-500 px-7">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                    <div className="text-orange-400 flex gap-x-2">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                  </div>
                  <div className="w-5 h-5 border border-gray-600 rotate-45 relative mx-auto bottom-3 -z-10"></div>
                  <div className="flex flex-col items-center justify-center gap-y-1 mt-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={say_user_2}
                      alt=""
                    />
                    <p>Christa Smith</p>
                    <p className="text-gray-600">Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="flex bg-white justify-center flex-col items-center text-center gap-y-5 border border-gray-300 p-7">
                    <FaQuoteLeft className="text-2xl text-red-500"></FaQuoteLeft>
                    <p className="text-gray-500 px-7">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                    <div className="text-orange-400 flex gap-x-2">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                  </div>
                  <div className="w-5 h-5 border border-gray-600 rotate-45 relative mx-auto bottom-3 -z-10"></div>
                  <div className="flex flex-col items-center justify-center gap-y-1 mt-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={say_user_3}
                      alt=""
                    />
                    <p>Jemina CLone</p>
                    <p className="text-gray-600">Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="flex bg-white justify-center flex-col items-center text-center gap-y-5 border border-gray-300 p-7">
                    <FaQuoteLeft className="text-2xl text-red-500"></FaQuoteLeft>
                    <p className="text-gray-500 px-7">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                    <div className="text-orange-400 flex gap-x-2">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                  </div>
                  <div className="w-5 h-5 border border-gray-600 rotate-45 relative mx-auto bottom-3 -z-10"></div>
                  <div className="flex flex-col items-center justify-center gap-y-1 mt-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={say_user_4}
                      alt=""
                    />
                    <p>Smith Vodka</p>
                    <p className="text-gray-600">Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="flex bg-white justify-center flex-col items-center text-center gap-y-5 border border-gray-300 p-7">
                    <FaQuoteLeft className="text-2xl text-red-500"></FaQuoteLeft>
                    <p className="text-gray-500 px-7">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                    <div className="text-orange-400 flex gap-x-2">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                  </div>
                  <div className="w-5 h-5 border border-gray-600 rotate-45 relative mx-auto bottom-3 -z-10"></div>
                  <div className="flex flex-col items-center justify-center gap-y-1 mt-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={say_user_5}
                      alt=""
                    />
                    <p>Cristino Murfi</p>
                    <p className="text-gray-600">Manager</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="flex bg-white justify-center flex-col items-center text-center gap-y-5 border border-gray-300 p-7">
                    <FaQuoteLeft className="text-2xl text-red-500"></FaQuoteLeft>
                    <p className="text-gray-500 px-7">
                      The most well-known dummy text is the Lorem Ipsum, which
                      is said to have originated in the 16th century.
                    </p>
                    <div className="text-orange-400 flex gap-x-2">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </div>
                  </div>
                  <div className="w-5 h-5 border border-gray-600 rotate-45 relative mx-auto bottom-3 -z-10"></div>
                  <div className="flex flex-col items-center justify-center gap-y-1 mt-3">
                    <img
                      className="w-16 h-16 rounded-full"
                      src={say_user_6}
                      alt=""
                    />
                    <p>Smith Vodka</p>
                    <p className="text-gray-600">Manager</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* FAQ */}
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-10 md:my-24">
          <div className="flex flex-col items-center gap-y-3 mb-5 md:mb-10">
            <h1 className="text-center text-3xl font-sans font-semibold">
              Frequently Asked Questions
            </h1>
            <p className="max-w-xl text-center text-gray-500 px-3">
              This is just a simple text made for this unique and awesome
              template, you can replace it with any text.
            </p>
          </div>
          <div className="flex flex-col md:flex-row  gap-x-8">
            <div className="md:w-1/2">
              <img className="w-full" src={faqImg} alt="" />
            </div>
            <div className="md:w-1/2">
              <Faq data={data} styles={styles} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
