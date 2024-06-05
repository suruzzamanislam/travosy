import { FiPhone } from 'react-icons/fi';
import HeroTitle from '../../Components/HeroTittle/HeroTitle';
import aboutImg from '../../assets/about.jpg';
import teamMember1 from '../../assets/teamMember1.jpg';
import teamMember2 from '../../assets/teamMember2.jpg';
import teamMember3 from '../../assets/teamMember3.jpg';
import teamMember4 from '../../assets/teamMember4.jpg';
import { TbBrandFacebook } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
const About = () => {
  return (
    <div>
      <HeroTitle title="About Us" route="ABOUT US"></HeroTitle>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-10 mt-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 relative ">
            <img className="rounded-xl" src={aboutImg} alt="" />
            <div className="flex items-center gap-x-3 absolute top-14 right-0 md:-right-16 bg-white px-6 py-3 rounded-lg shadow-2xl border border-gray-300">
              <FiPhone className="text-6xl p-4 text-red-500 bg-red-100 rounded-md shadow-md"></FiPhone>
              <div>
                <p className="font-sans">Travel Packages</p>
                <p className="font-sans font-semibold"> 50+</p>
              </div>
            </div>
            <div className="flex items-center gap-x-3 absolute bottom-14 md:-left-16 bg-white px-6 pr-16 py-3 rounded-lg shadow-2xl border border-gray-300">
              <FiPhone className="text-6xl p-4 text-red-500 bg-red-100 rounded-md shadow-md"></FiPhone>
              <div>
                <p className="font-sans font-semibold">Visitor </p>
                <p className="font-sans font-semibold">4,589</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:px-20 py-5 md:py-0 space-y-5">
            <p className="text-3xl font-sans font-semibold">
              World Best Travel <br /> Agency: Travosy
            </p>
            <p className="text-gray-500 font-sans">
              Get instant helpful resources about anything on the go, easily
              implement secure money transfer solutions, boost your daily
              efficiency, connect to other app users and create your own Travosy
              network, and much more with just a few taps. commodo consequat.
              Duis aute irure
            </p>
            <button className="text-lg font-sans font-semibold px-6 py-2 bg-orange-400 hover:text-white duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex flex-col items-center gap-y-3 mb-10">
            <h1 className="text-center text-3xl font-sans font-semibold">
              Our Team
            </h1>
            <p className="max-w-xl text-center text-gray-500 px-3">
              This is just a simple text made for this unique and awesome
              template, you can replace it with any text.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-7 items-center md:gap-x-10 lg:gap-x-20">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full relative group overflow-hidden">
                <img className="rounded-full" src={teamMember1} alt="" />
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute top-0 left-0 rounded-full flex justify-center items-end opacity-0   group-hover:opacity-100 duration-300">
                  <div className="flex gap-x-3 text-4xl mb-7 translate-y-20 group-hover:translate-y-0 duration-300">
                    <TbBrandFacebook className=" bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></TbBrandFacebook>
                    <IoLogoInstagram className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></IoLogoInstagram>
                    <FiPhone className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></FiPhone>
                  </div>
                </div>
              </div>
              <p className="text-xl font-sans font-semibold mt-2">Jack John</p>
              <p className="text-lg font-serif font-semibold">Agent</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full relative group overflow-hidden">
                <img className="rounded-full" src={teamMember2} alt="" />
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute top-0 left-0 rounded-full flex justify-center items-end opacity-0   group-hover:opacity-100 duration-300">
                  <div className="flex gap-x-3 text-4xl mb-7 translate-y-20 group-hover:translate-y-0 duration-300">
                    <TbBrandFacebook className=" bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></TbBrandFacebook>
                    <IoLogoInstagram className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></IoLogoInstagram>
                    <FiPhone className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></FiPhone>
                  </div>
                </div>
              </div>
              <p className="text-xl font-sans font-semibold mt-2">
                Krista John
              </p>
              <p className="text-lg font-serif font-semibold">Agent</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full relative group overflow-hidden">
                <img className="rounded-full" src={teamMember3} alt="" />
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute top-0 left-0 rounded-full flex justify-center items-end opacity-0   group-hover:opacity-100 duration-300">
                  <div className="flex gap-x-3 text-4xl mb-7 translate-y-20 group-hover:translate-y-0 duration-300">
                    <TbBrandFacebook className=" bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></TbBrandFacebook>
                    <IoLogoInstagram className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></IoLogoInstagram>
                    <FiPhone className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></FiPhone>
                  </div>
                </div>
              </div>
              <p className="text-xl font-sans font-semibold mt-2">
                Roger Jackson
              </p>
              <p className="text-lg font-serif font-semibold">Agent</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full relative group overflow-hidden">
                <img className="rounded-full" src={teamMember4} alt="" />
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent absolute top-0 left-0 rounded-full flex justify-center items-end opacity-0   group-hover:opacity-100 duration-300">
                  <div className="flex gap-x-3 text-4xl mb-7 translate-y-20 group-hover:translate-y-0 duration-300">
                    <TbBrandFacebook className=" bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></TbBrandFacebook>
                    <IoLogoInstagram className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></IoLogoInstagram>
                    <FiPhone className="bg-orange-600 p-2 hover:text-white rounded-md shadow-lg cursor-pointer"></FiPhone>
                  </div>
                </div>
              </div>
              <p className="text-xl font-sans font-semibold mt-2">
                Johnny English
              </p>
              <p className="text-lg font-serif font-semibold">Agent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
