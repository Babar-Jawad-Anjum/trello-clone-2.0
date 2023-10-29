"use client";

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-3 bg-gray-500/10 rounded-b-2xl">
        {/* bg gradient color  */}
        <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50" />
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello logo"
          width={300}
          height={100}
          className="w-32 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-1"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Babar Mughal" round size="40" color="#0055D1" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-3 my-3">
        <p className="flex items-center text-sm font-light pr-5 p-2 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-7 w-7 text-[#0055D1] mr-1" />
          Revolutionize Your Routine: To-Dos Made Magical!
        </p>
      </div>
    </header>
  );
};

export default Header;
