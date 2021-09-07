import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import back from "../Images/bg.png";
function HeaderBottom() {
  return (
    <div className=" h-28 w-full flex-grow relative flex flex-col items-center py-4 ">
      //
      <Image
        src={back}
        className="w-full  h-20"
        height={50}
        layout="fill"
        height={30}
        className="block "
      />
      <div className="flex items-center  justify-between space-x-96">
        <div className="z-50 flex-col mr-3 flex w-[350px] mx-auto  flex-shrink">
          <div className="flex h-8  w-full mx-2 flex-grow  bg-white rounded-lg  items-center ">
            <SearchIcon className="h-5 text-gray-500 px-2" />
            <input
              className=" w-full f  px-2  flex flex-shrink text-gray-500 text-xs border-none outline-none bg-transparent py-1"
              type="text"
              placeholder="Find Mentors and Services"
            />
            <button className="px-1 py-1 bg-green-500 text-white rounded-r-lg ">
              Search
            </button>
          </div>
          <div className="space-x-2 z-50 justify-center text-white flex items-center">
            <span>Services</span>
            <span>
              <input type="radio" className="" />{" "}
            </span>
            <span>Mentors</span>
            <span>
              <input type="radio" />
            </span>
          </div>
        </div>
        <div className="z-50 hidden md:inline-flex">
          <ul className="flex  text-white items-center space-x-4">
            <li>
              <a href="/">Messeges</a>
            </li>
            <li>
              <a href="/">Lists</a>
            </li>
            <li>
              <a href="/">Orders</a>
            </li>
            <li className="relative">
                <div className=" absolute bottom-0 right-0 px-1 py-1 bg-green-600 h-2 w-2 rounded-full"></div>
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="user image"
              />
            </li>
            <li>
              <a className="px-2 py-2 bg-green-500 text-white cursor-pointer hidden lg:inline-flex rounded-lg" href="/">$ 232,20232</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;

//radio buttons
