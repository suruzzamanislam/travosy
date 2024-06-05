import { CiMail, CiTwitter } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline, IoLogoInstagram } from 'react-icons/io5';
import { TbBrandFacebook } from 'react-icons/tb';

const SmallHeader = () => {
  return (
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
  );
};

export default SmallHeader;
