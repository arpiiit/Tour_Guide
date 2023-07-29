import React from "react";

const NextCatago = () => {
  return (
    <div className="m-5 my-10 flex gap-20">
      <div className="flex rounded-lg shadow-xl">
        <div className="">
          <img className="hover:opacity-75 h-[35rem] w-[70rem] rounded-lg" src="https://media.istockphoto.com/id/1140750906/photo/tourist-exploring-eiffel-tower-paris-france.jpg?s=612x612&w=0&k=20&c=cZwjvJPY6XgEIA8uxLSYgjh8RGmByyn0tpXCgd2WErM=" alt="" />
        </div>
        <div className="m-10 my-[10rem]">
<h1 className="text-3xl">Activities & attraction</h1>
<p className="my-10 pr-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi magni numquam iusto. Deleniti nobis soluta voluptas error expedita nesciunt veritatis?</p>

<h1 className="text-red-500 px-20 hover:translate-x-3 hover:delay-100 cursor-pointer mx-10">Explore --> </h1>
        </div>
      </div>
      <div className="flex rounded-lg shadow-xl">
        <div className="">
          <img className=" hover:opacity-75 h-[35rem] w-[70rem] rounded-lg" src="https://media.istockphoto.com/id/914469918/photo/on-bank-of-seine.jpg?s=612x612&w=0&k=20&c=UTub7foNJ-0TL_GqWtZMcvgN8nqQYVS8VL-jt3cRbR0=" alt="" />
        </div>
        <div className="m-10 my-[10rem]">
<h1 className=" text-3xl">Experiences & tours</h1>
<p className="my-10 pr-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi magni numquam iusto. Deleniti nobis soluta voluptas error expedita nesciunt veritatis?</p>

<h1 className="text-red-500 px-20 hover:translate-x-3 hover:delay-100 cursor-pointer mx-10">Explore --> </h1>
        </div>
      </div>
   

      
    </div>
  );
};

export default NextCatago;
