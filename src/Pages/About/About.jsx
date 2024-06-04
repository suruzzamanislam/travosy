import { FiPhone } from 'react-icons/fi';
import HeroTitle from '../../Components/HeroTittle/HeroTitle';
import aboutImg from '../../assets/about.jpg';
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
      </div>
    </div>
  );
};

export default About;
