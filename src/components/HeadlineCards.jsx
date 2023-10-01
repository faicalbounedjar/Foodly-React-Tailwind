import React from "react";

const HeadlineCards = () => {
  return (
    <div className="w-full p-4 py-14 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* cards */}
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className=" rounded-xl absolute w-full h-full bg-black/50 text-white">
          <p className="text-2xl px-2 pt-4 font-bold">Burger with letuce</p>
          <p className="text-xl ">available</p>
          <button className=" mx-2 absolute bottom-4 right-5 py-2 left-5  bg-white  text-black rounded-xl ">
            Order Now
          </button>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover "
          src="https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
      </div>
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className=" rounded-xl absolute w-full h-full bg-black/50 text-white">
          <p className="text-2xl px-2 pt-4 font-bold">Meat me</p>
          <p className="text-xl ">Not available</p>
          <button className=" cursor-not-allowed mx-2 absolute bottom-4 right-5 py-2 left-5  bg-gray-200  text-black rounded-xl ">
            Order Now
          </button>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover "
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className=" rounded-xl absolute w-full h-full bg-black/50 text-white">
          <p className="text-2xl px-2 pt-4 font-bold">Vegitables & meat</p>
          <p className="text-xl ">available</p>
          <button className=" mx-2 absolute bottom-4 right-5 py-2 left-5  bg-white  text-black rounded-xl ">
            Order Now
          </button>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover "
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          alt=""
        />
      </div>
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className=" rounded-xl absolute w-full h-full bg-black/50 text-white">
          <p className="text-2xl px-2 pt-4 font-bold">Grilled meat</p>
          <p className="text-xl ">available</p>
          <button className=" mx-2 absolute bottom-4 right-5 py-2 left-5  bg-white  text-black rounded-xl ">
            Order Now
          </button>
        </div>
        <img
          className="rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover "
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
