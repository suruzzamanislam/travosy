import { IoLocationOutline } from 'react-icons/io5';
import HeroTitle from '../../Components/HeroTittle/HeroTitle';
import contactImg from '../../assets/contact.svg';
import { FiPhone } from 'react-icons/fi';
import { CiMail } from 'react-icons/ci';
const Contact = () => {
  return (
    <div>
      <HeroTitle title="Contact Us" route="CONTACT"></HeroTitle>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-7  lg:gap-28 my-10">
        <div className="md:w-1/2">
          <img src={contactImg} alt="" />
        </div>
        <div className="md:w-1/2">
          <form
            action="#"
            className="shadow-lg border-black px-5 md:px-10 py-7 md:py-14"
          >
            <h1 className="text-2xl font-semibold font-sans mb-8">
              Get in touch !
            </h1>
            <div className="flex justify-between gap-x-5 md:gap-x-14">
              <div className="w-1/2">
                <label htmlFor="name" className="block font-semibold font-sans">
                  Your Name
                </label>
                <input
                  className=" py-1 focus:outline-none border-gray-500 border-b w-full"
                  type="text"
                  placeholder="Name:"
                  name="name"
                  id="name"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block font-semibold font-sans"
                >
                  Your Email
                </label>
                <input
                  className=" py-1 focus:outline-none border-gray-500 border-b w-full"
                  type="text"
                  placeholder="Email:"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="w-full mt-6">
              <label
                htmlFor="question"
                className="block font-semibold font-sans"
              >
                Your Question:
              </label>
              <input
                className=" py-1 focus:outline-none border-gray-500 border-b w-full"
                type="text"
                placeholder="Subject:"
                name="question"
                id="question"
              />
            </div>
            <div className="w-full mt-6">
              <label
                htmlFor="question"
                className="block font-semibold font-sans"
              >
                Your Comment:
              </label>
              <textarea
                className=" py-1 focus:outline-none border-gray-500 border-b w-full h-28"
                type="text"
                placeholder="Message:"
                name="question"
                id="question"
              />
            </div>
            <div>
              <button className="px-10 py-2 bg-orange-500 mt-6 font-sans font-semibold hover:text-white duration-150">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-9 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-x-9 lg:gap-x-20">
          <div className="p-5 flex gap-y-3 flex-col justify-center items-center text-center">
            <FiPhone className="text-7xl p-5 text-red-500 bg-red-100 rounded-md shadow-md"></FiPhone>
            <p className="text-xl font-sans font-semibold">Phone</p>
            <p className="text-gray-500">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <p className="text-red-400 font-sans font-semibold">
              +152 534-468-854
            </p>
          </div>
          <div className="p-5 flex gap-y-3 flex-col justify-center items-center text-center">
            <CiMail className="text-7xl p-5 text-red-500 bg-red-100 rounded-md shadow-md"></CiMail>
            <p className="text-xl font-sans font-semibold">Email</p>
            <p className="text-gray-500">
              The phrasal sequence of the is now so that many campaign and
              benefit
            </p>
            <p className="text-red-400 font-sans font-semibold">
              contact@example.com
            </p>
          </div>
          <div className="p-5 flex gap-y-3 flex-col justify-center items-center text-center">
            <IoLocationOutline className="text-7xl p-5 text-red-500 bg-red-100 rounded-md shadow-md"></IoLocationOutline>
            <p className="text-xl font-sans font-semibold">Location</p>
            <p className="text-gray-500">
              C/54 Northwest Freeway, Suite 558, Houston, USA 485
            </p>
            <p className="text-red-400 font-sans font-semibold">
              View on Google map
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
