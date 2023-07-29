import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200 pl-8 py-16">
      <div className="flex cursor-pointer gap-[20%] mx-5">
        <div>
          <h1 className="font-bold text-lg">Powered By</h1>
          <p>INDIA</p>
          <p>TOURISM</p>
          <p>AUTHORITY</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Preference</h1>
          <p>English v</p>
          <p>Hindi v</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Call center</h1>
          <p>Local Call Center </p>
          <p>International Call Center</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">Download our mobile app</h1>
          <p className=" mx-14 my-2 hover:bg-gray-600 hover:text-white px-7 rounded-md border-black py-1 bg-gray-400">Apple Store</p>
          <p className=" mx-10 px-7 hover:bg-gray-600 hover:text-white rounded-md border-black py-1 bg-gray-400">Google Play Store</p>
        </div>
      </div>
      
      <div className="flex pb-0 mx-5 py-10 gap-[50%]">
        <div className="flex gap-x-14">
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>

        <div className="flex gap-x-14">
          <p>Connect with Us</p>
          <a href="/">fb</a>
          <a href="/">linkedin</a>
          <p>Back to top ^</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
