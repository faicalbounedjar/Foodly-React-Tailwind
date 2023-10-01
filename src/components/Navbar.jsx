import React, { useState } from "react";
import {
  AiFillDownCircle,
  AiFillHeart,
  AiFillQuestionCircle,
  AiFillRead,
  AiFillTag,
  AiFillWallet,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineQuestionCircle,
  AiOutlineSearch,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [delivery, setDelivery] = useState(true);
  return (
    <div className=" flex justify-between mx-auto items-center p-4">
      {/* left */}
      <div className="flex gap-2 items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu
            onClick={() => {
              setNav(true);
            }}
            size={40}
          />
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Food<span className="font-bold text-orange-500">ly</span>{" "}
        </h1>
        <div className="hidden lg:flex  bg-gray-300 rounded-full  items-center p-1 gap-2 text-lg">
          <p
            onClick={() => {
              setDelivery(true);
            }}
            className={` cursor-pointer duration-300 ${
              delivery ? "bg-black text-white rounded-full p-1" : ""
            }`}
          >
            Delivery
          </p>
          <p
            onClick={() => {
              setDelivery(false);
            }}
            className={`cursor-pointer duration-300 ${
              !delivery ? "bg-black text-white rounded-full p-1" : ""
            }`}
          >
            Pickup
          </p>
        </div>
      </div>
      {/* center */}
      <div className="flex bg-gray-200 rounded-full w-52 px-2 items-center sm:w-96 lg:w-96">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className=" bg-transparent p-2 focus:outline-none w-full"
          placeholder="search food"
        />
      </div>
      {/* right */}
      <button className="bg-black text-white hidden md:flex items-center px-4 py-2 rounded-full">
        <BsFillCartFill className="mr-2" size={25} /> Cart
      </button>
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed h-screen w-full z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* sidebar */}
      <div
        className={
          nav
            ? `fixed top-0 left-0 w-52 lg:w-96 h-screen z-10 bg-white duration-500`
            : `fixed top-[-100%] left-[-100%] w-52 lg:w-96 h-screen z-10 bg-white duration-500`
        }
      >
        <AiOutlineClose
          onClick={() => {
            setNav(false);
          }}
          className="absolute right-4 top-4 cursor-pointer"
          size={25}
        />
        <h1 className="p-2 text-3xl sm:text-2xl lg:text-3xl font-semibold ">
          Food<span className="font-bold text-orange-500">ly</span>{" "}
        </h1>
        <nav>
          <ul className="flex  p-4 flex-col">
            <li className="text-xl items-center py-4 flex text-gray-900">
              <TbTruckDelivery
                color="rgb(249 115 22 / var(--tw-text-opacity))"
                size={25}
                className="mr-4"
              />
              Orders
            </li>
            <li className="text-xl py-4 items-center flex text-gray-900">
              <AiFillHeart
                color="rgb(249 115 22 / var(--tw-text-opacity))"
                size={25}
                className="mr-4"
              />
              Favorites
            </li>
            <li className="text-xl py-4 items-center flex text-gray-900">
              <AiFillWallet
                color="rgb(249 115 22 / var(--tw-text-opacity))"
                size={25}
                className="mr-4"
              />
              Wallet
            </li>
            <li className="text-xl py-4 items-center flex text-gray-900">
              <AiOutlineQuestionCircle
                color="rgb(249 115 22 / var(--tw-text-opacity))"
                size={25}
                className="mr-4"
              />
              Help
            </li>
            <li className="text-xl py-4 items-center flex text-gray-900">
              <AiFillTag
                color="rgb(249 115 22 / var(--tw-text-opacity))"
                size={25}
                className="mr-4"
              />
              Promotion
            </li>
            <li className="text-xl py-4 items-center flex text-gray-900">
              <AiFillDownCircle
                color="rgb(249 115 22 / var(--tw-text-opacity))"
                size={25}
                className="mr-4"
              />
              Best
            </li>
            <li className="text-xl py-4 items-center flex text-gray-900">
              <AiOutlineUsergroupAdd
                color="rgb(249 115 22 / var(--tw-text-opacity))"
                size={25}
                className="mr-4"
              />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
