import { BellIcon, ChevronDownIcon, ClipboardIcon, CogIcon } from "@heroicons/react/outline"

function Headerfixed() {
    return (
        <div className="flex shadow flex-shrink bg-white  lg:shadow-lg md:shadow-lg  mt px-2 py-8 rounded-lg items-center sm:pl-4 justify-between">
        <div className="w-full  flex-shrink flex-grow mx-auto">
            <ul className="flex w-full mx-auto flex-shrink items-center space-x-4">
                <li className="flex items-center">
                    <a  className="active:font-bold hover:text-black text-gray-500  cursor-pointer" href="/">Dashboard</a>
                    <ClipboardIcon className="h-5 text-gray-500  cursor-pointer" />
                </li>
                <li className="flex items-center">
                    <a className="active:font-bold hover:text-black text-gray-500  cursor-pointer"  href="/">Buying</a>
                    <ChevronDownIcon className="h-4  text-gray-500"/>
                </li>
                <li className="flex items-center">
                    <a className="active:font-bold  hover:text-black text-gray-500  cursor-pointer "  href="/">contacts</a>
                    <ChevronDownIcon className="h-4 text-gray-500"/>
                </li>
                <li className="flex items-center">
                    <a className="active:font-bold hover:text-black text-gray-500  cursor-pointer"  href="/">Inbox</a>
                    <BellIcon className="h-5 text-gray-500"/>
                </li>
                <li className="flex items-center hidden md:inline-flex">
                    <a className="active:font-bold hover:text-black text-gray-500  cursor-pointer"  href="/">Setting</a>
                    <CogIcon className="h-5 text-gray-500"/>
                </li>
            </ul>
        </div>
        <div className="px-2 whitespace-nowrap py-2 cursor-pointer rou bg-green-500 shadow-lg  mr-3 rounded-lg  hidden md:inline-flex  text-white">
            Start Selling
        </div>
    </div>
    )
}

export default Headerfixed
