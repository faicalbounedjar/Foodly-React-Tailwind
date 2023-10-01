import React from "react";

const Hero = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="relative">
        {/* overlay */}
        {/* words */}
        <div className="rounded-xl absolute w-full h-full bg-black/60 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-6xl p-4  text-white">
            Sharing is{" "}
            <span className="font-bold text-orange-500">Caring </span>!!!
          </h2>
        </div>
        {/* img */}
        <img
          className=" rounded-xl w-full object-cover max-h-[600px] "
          src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
