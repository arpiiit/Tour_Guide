import React from "react";

const Navbar = () => {
  return (
    <div className="fixed">
    <div className="my-10 cursor-pointer p-[15px] rounded-md gap-8 gap-[80%] nab flex text-lg m-5">
      <div className="nav">
        
        <h1 className="text-4xl">
          Tour
          <span className="font-bold text-red-600 hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-red-800 duration-500 hover:text-black">
            GUIDE
          </span>
        </h1>
      </div>
      <div className="flex text-red-500 cursor-pointer text-xl gap-[3%] mx-[8rem] sm:mx-5">
        <h1 className="border bg-gray-300 py-2 px-5 rounded-md hover:opacity-50 shadow-lg">Home</h1>
        <h1 className="border bg-gray-300 py-2 px-5 rounded-md hover:opacity-50 shadow-lg">About</h1>
        <h1 className="border bg-gray-300 py-2 px-5 rounded-md hover:opacity-50 shadow-lg">Contact</h1>
        <h1 className="border bg-gray-300 py-2 px-5 rounded-md hover:opacity-50 shadow-lg">Blog</h1>
        <a href="https://www.google.com/maps/place/Prayagraj,+Uttar+Pradesh/@25.4023959,81.7191836,12z/data=!3m1!4b1!4m6!3m5!1s0x398534c9b20bd49f:0xa2237856ad4041a!8m2!3d25.4358011!4d81.846311!16zL20vMDIwc2tj?entry=ttu"><h1 className="border bg-gray-300 py-2 px-5 rounded-md hover:opacity-50 shadow-lg">Map</h1></a>
<div className="flex mx-10 gap-[5%]">
         <a href="/ ">
         <button className="butn bg-blue-500 px-6 py-2 rounded-md text-white hover:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500 hover:text-black shadow-lg">
            Login
          </button>
         </a>
         <a href="/">
         <button className="butn bg-blue-500 px-6 py-2 rounded-md text-white hover:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-500 hover:text-black shadow-lg">
            SignUp
          </button>
         </a>
         </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
