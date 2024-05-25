import { TbBrandFacebook } from 'react-icons/tb';
import logo from '../../assets/logo.png';
import { IoLocationOutline, IoLogoInstagram } from 'react-icons/io5';
import { CiMail, CiTwitter } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { MdChevronRight } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className=" bg-[#161C28] py-5 md:py-16">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto text-white grid gap-y-5 md:grid-cols-4 gap-x-9">
        <div className="space-y-5">
          <img src={logo} alt="" />
          <p className="text-gray-300 tracking-wider">
            Planning for a trip? We will organize your trip with the best places
            and within best budget!
          </p>
          <div className="flex gap-x-4 items-center">
            <TbBrandFacebook className="text-2xl hover:text-red-500 cursor-pointer"></TbBrandFacebook>
            <IoLogoInstagram className="text-2xl hover:text-red-500 cursor-pointer"></IoLogoInstagram>
            <CiTwitter className="text-2xl hover:text-red-500 cursor-pointer"></CiTwitter>
            <FiPhone className="text-2xl hover:text-red-500 cursor-pointer"></FiPhone>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-sans mb-4">Office</h1>
          <h2>Travosy Tour & Travels</h2>
          <div className="flex gap-x-2 mt-4">
            <span className="mt-1">
              <IoLocationOutline className="text-xl text-red-600"></IoLocationOutline>
            </span>
            <p className="text-gray-300">
              C/54 Northwest Freeway, <br />
              Suite 558, <br />
              Houston, USA 485
            </p>
          </div>
          <div className="flex items-center gap-x-2 mt-4">
            <span className="">
              <CiMail className="text-xl text-red-600"></CiMail>
            </span>
            <p className="text-gray-300">contact@example.com</p>
          </div>
          <div className="flex items-center gap-x-2 mt-4">
            <span>
              <FiPhone className="text-xl text-red-600"></FiPhone>
            </span>
            <p>+8801880992236</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-sans mb-4">Company</h1>
          <ul className=" space-y-3 text-gray-300">
            <li className="flex items-center gap-x-2 hover:text-gray-400 cursor-pointer">
              <MdChevronRight></MdChevronRight>
              <span>About Us</span>
            </li>
            <li className="flex items-center gap-x-2 hover:text-gray-400 cursor-pointer">
              <MdChevronRight></MdChevronRight>
              <span>Services</span>
            </li>
            <li className="flex items-center gap-x-2 hover:text-gray-400 cursor-pointer">
              <MdChevronRight></MdChevronRight>
              <span>Team</span>
            </li>
            <li className="flex items-center gap-x-2 hover:text-gray-400 cursor-pointer">
              <MdChevronRight></MdChevronRight>
              <span>Pricing</span>
            </li>
            <li className="flex items-center gap-x-2 hover:text-gray-400 cursor-pointer">
              <MdChevronRight></MdChevronRight>
              <span>Blog</span>
            </li>
            <li className="flex items-center gap-x-2 hover:text-gray-400 cursor-pointer">
              <MdChevronRight></MdChevronRight>
              <span>Login</span>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-sans mb-4">Newsletter</h1>
          <p className="text-gray-300">
            Sign up and receive the latest tips via email.
          </p>
          <div className="relative">
            <label htmlFor="email" className="text-gray-300">
              Writer your email <span className="text-red-500">*</span>
            </label>
            <input
              className="focus:outline-none pl-10 bg-[#1F2937] py-2 w-full mt-2 rounded-md"
              type="text"
              placeholder="Email"
            />
            <span className="absolute left-3 top-[43px]">
              <CiMail className="text-lg"></CiMail>
            </span>
          </div>
          <div>
            <button className="bg-[#EF4444] w-full py-2 rounded-md hover:text-black duration-100">
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
