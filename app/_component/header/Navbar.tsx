import React from "react";
import {GlobeAltIcon,Bars3Icon,UserCircleIcon} from '@heroicons/react/24/solid'
function Navbar() {
  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6 "/>
      <div className="flex space-x-2 border-2 p-2 rounded-full">
      <Bars3Icon className="h-6"/>
     <UserCircleIcon className="h-6"/>
      </div>
     
    </div>
  );
}

export default Navbar;
