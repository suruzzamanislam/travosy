import { FaRegClock } from 'react-icons/fa6';
import HeroTitle from '../../Components/HeroTittle/HeroTitle';
import SmallHeader from '../../Components/SmallHeader';
import blog1 from '../../assets/top_destination_8.jpg';
import blog2 from '../../assets/top_destination_7.jpg';
import blog3 from '../../assets/top_destination_6.jpg';
import blog4 from '../../assets/top_destination_5.jpg';
import blog5 from '../../assets/top_destination_4.jpg';
import blog6 from '../../assets/top_destination_3.jpg';
import blog7 from '../../assets/top_destination_2.jpg';
import blog8 from '../../assets/top_destination_1.jpg';
const Blog = () => {
  return (
    <div>
      <SmallHeader></SmallHeader>
      <HeroTitle title="Blog" route="BLOG"></HeroTitle>
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto grid md:grid-cols-3 gap-10 mb-10">
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog1}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              This Spanish city is a feast for the eyes: Travosy
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog2}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              New Zealand’s South Island brims with majestic
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog3}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              When you visit the Eternal Rome City: Travosy
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog4}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              My Story When I Backpacked Around The World
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog5}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              Organization of accounting at the enterprise
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog6}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              Three of the Best Day Trips to Make from Francisco
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog7}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              Why Do People Travel ? Reasons People Travel in 2023
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="group overflow-hidden rounded-lg">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="rounded-lg group-hover:scale-110 group-hover:rotate-3 duration-300"
              src={blog8}
              alt=""
            />
            <p className="bg-orange-400 text-white absolute px-5 rounded-lg top-2 left-2 -translate-x-24 group-hover:translate-x-0 duration-300">
              Tour
            </p>
          </div>
          <div className="space-y-3 mt-2">
            <div className="flex items-center gap-x-2">
              <FaRegClock className="text-lg text-red-600"></FaRegClock>
              <p className="font-sans text-gray-500">
                5 min read by <span className="text-gray-900">Travosy</span>
              </p>
            </div>
            <p className="text-xl font-semibold font-sans cursor-pointer hover:text-red-500 duration-300">
              Jungles In Australia: Vermont’s Rugged, Retro Ski Mountain
            </p>
            <p className="text-gray-600">
              This is required when, for example, the final text is not yet
              available.
            </p>
            <button className="font-sans hover:text-red-400 duration-200">
              Read More &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
        <button className="w-10 h-10 rounded-s-full border hover:bg-red-500 hover:text-white duration-200">
          &lt;
        </button>
        <button className="w-10 h-10 border hover:bg-red-500 hover:text-white duration-200">
          1
        </button>
        <button className="w-10 h-10 border hover:bg-red-500 hover:text-white duration-200">
          2
        </button>
        <button className="w-10 h-10 border bg-red-500 hover:text-white duration-200">
          3
        </button>
        <button className="w-10 h-10 border hover:bg-red-500 hover:text-white duration-200">
          4
        </button>
        <button className="w-10 h-10 border hover:bg-red-500 hover:text-white duration-200">
          5
        </button>
        <button className="w-10 h-10 rounded-e-full border hover:bg-red-500 hover:text-white duration-200">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Blog;
