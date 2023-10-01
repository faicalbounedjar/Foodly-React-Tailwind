import React, { useState } from "react";
import { data } from "../data/data";
const Food = () => {
  const [foods, setFoods] = useState(data);
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="w-full m-auto px-4 py-12">
      <h1 className="text-orange-500 text-4xl font-bold text-center">
        Top Rated Menu Items
      </h1>
      {/* filter */}
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        {/* type */}
        <div className="flex flex-col gap-5">
          <p className=" font-bold pt-4">Filter Type</p>
          <div className="flex gap-10 justify-center">
            <button
              onClick={() => {
                setFoods(data);
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              All
            </button>
            <button
              onClick={() => {
                filterType("burger");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              Burgers
            </button>
            <button
              onClick={() => {
                filterType("pizza");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              Pizza
            </button>
            <button
              onClick={() => {
                filterType("salad");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              Salade
            </button>
            <button
              onClick={() => {
                filterType("chicken");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              Chiken
            </button>
          </div>
        </div>
        {/* price */}
        <div className="flex flex-col gap-5">
          <p className=" font-bold pt-4">Filter Price</p>
          <div className="flex gap-10 justify-center">
            <button
              onClick={() => {
                setFoods(data);
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              All
            </button>
            <button
              onClick={() => {
                filterPrice("$");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              $
            </button>
            <button
              onClick={() => {
                filterPrice("$$");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              $$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              $$$
            </button>
            <button
              onClick={() => {
                filterPrice("$$$$");
              }}
              className=" border-orange-500 bg-orange-500 text-white hover:bg-orange-800"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* food */}
      <div className="pt-4 grid grid-cols-2 lg:grid-cols-4 gap-6 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg border shadow-lg hover:scale-105"
          >
            <img
              className=" w-full h-56 object-cover rounded-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between  p-4">
              <p className=" self-center font-bold">{item.name}</p>
              <p className=" bg-orange-400 p-2 rounded-lg border border-black">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
