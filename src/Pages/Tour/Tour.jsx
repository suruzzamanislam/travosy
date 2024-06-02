import { FaHeart, FaStar } from 'react-icons/fa6';
import HeroTitle from '../../Components/HeroTittle/HeroTitle';
import { IoLocationOutline } from 'react-icons/io5';
import { LuMoveRight } from 'react-icons/lu';

import top_destination_1 from '../../assets/top_destination_1.jpg';
import top_destination_2 from '../../assets/top_destination_2.jpg';
import top_destination_3 from '../../assets/top_destination_3.jpg';
import top_destination_4 from '../../assets/top_destination_4.jpg';
import top_destination_5 from '../../assets/top_destination_5.jpg';
import top_destination_6 from '../../assets/top_destination_6.jpg';
import top_destination_7 from '../../assets/top_destination_7.jpg';
import top_destination_8 from '../../assets/top_destination_8.jpg';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './Tour.css';
import { FaRegStar } from 'react-icons/fa';
import map from '../../assets/map.png';
const Tour = () => {
  return (
    <div>
      <HeroTitle title="Tour Packages" route="TOUR"></HeroTitle>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mb-10">
        <div className="w-full flex flex-col md:flex-row justify-between gap-x-5">
          {/* filter */}
          <div className="md:w-1/4 ">
            <div className="border py-4 px-3 h-[100vh] sticky top-0">
              <p className="text-xl font-serif tracking-wider">Price Filter</p>
              <div className="flex justify-between items-center mt-2">
                <p>
                  $<span className="text-gray-500">0</span>
                </p>
                <p>
                  $<span className="text-gray-500">500</span>
                </p>
              </div>
              <RangeSlider
                id="range-slider-gradient"
                className="margin-lg mt-1"
                step={'any'}
              />
              <p className="text-xl font-serif tracking-wider mt-9">Reviews</p>
              <div className="mt-2">
                <div className="text-orange-400 flex gap-x-4">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
              </div>
              <div className="flex gap-x-4 mt-1">
                <div className="text-orange-400 flex gap-x-4">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <FaRegStar></FaRegStar>
              </div>
              <div className="flex gap-x-4 mt-1">
                <div className="text-orange-400 flex gap-x-4">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
              </div>
              <div className="flex gap-x-4 mt-1">
                <div className="text-orange-400 flex gap-x-4">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </div>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
              </div>
              <div className="flex gap-x-4 mt-1">
                <div className="text-orange-400 flex gap-x-4">
                  <FaStar></FaStar>
                </div>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
                <FaRegStar></FaRegStar>
              </div>
              <p className="text-xl font-serif mt-9 tracking-wider mb-2">
                Booking Activity
              </p>
              <p className="text-gray-400 my-1 ">Bali Park</p>
              <p className="text-gray-400 my-1">Paris</p>
              <p className="text-gray-400 my-1">Arcadia</p>
              <p className="text-gray-400 my-1">Culver City</p>
              <p className="text-gray-400 my-1">Long Beach</p>
              <p className="text-gray-400 my-1">California</p>
              <p className="text-xl font-serif mt-9 tracking-wider mb-2">
                Tour Map
              </p>
              <img src={map} alt="" />
            </div>
          </div>
          {/* card */}
          <div className="md:w-3/4 mt-4 md:mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
