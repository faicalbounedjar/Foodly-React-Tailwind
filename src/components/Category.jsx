import React from "react";
import { categories } from "../data/data";
const Category = () => {
  return (
    <div>
      <h1 className="text-orange-500 text-4xl font-bold text-center">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 p-10 gap-6 w-full  py-6">
        {categories.map((item, index) => (
          <div
            className="bg-gray-100 rounded-lg gap-6 p-4 flex justify-center items-center"
            key={index}
          >
            <h1 className="font-bold sm:text-2xl">{item.name}</h1>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
