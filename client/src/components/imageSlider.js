import React, { useEffect, useState } from "react";
import imgs from "../images/policeSaluting.png";
const ImageSlider = ({ data }) => {
  const [index, setIndex] = useState(0);
  const slideRight = () => {

    setIndex((index + 1) % data.length);

  };
  useEffect(() => {
    setTimeout(slideRight, 3000);


  })


  return (

    <div className="bg-[#83afd4] bg-gradient-to-b from-[#83c1f8] from-80%   to-[#fdb994] to-90% shadow-2xl mt-16 py-4 w-">
      <div className="text-center font-bold text-[#2e348c] text-3xl py-2  ">The Officials</div>
      <div className="flex  justify-around">

        <div className={`bg-[#b0cbe1] shadow-2xl rounded-3xl w-[54%] h-min mt-4 py-4 px-4 md:w-1/4 ml-[5%]`}>
          <div className="font-bold text-[#2e348c]  text-xl md:text-3xl ">
            Meet Our Officials
          </div>
          <div className="text-lg mt-4 w-full ">
            Our officials play vital role in maintaining law and order in our society.<br></br>Their dedication and bravery ensure safety and security.<br></br>Our Mens are possessed with the necessary skills to hanle any crime.
          </div>
          <div>

          </div>
        </div>
        <div className=" w-2/4 h-80 md:w-1/4 mt-4 ml-[5%]  md:ml-[15%] ">

          <div className={` rounded-3xl w-full h-[85%] bg-[#b0cbe1]  `}>
            <div className="h-3/4 rounded-3xl border-2 bg-white mx-3 ">
              {data[index].avtar}
            </div>
            <div>
              <div className="font-bold text-center mt-2">{data[index].post}</div>
              <div className=" text-center"><span className="font-bold">Address</span> : {data[index].address}</div>
            </div>

          </div>
          <div className="mx-auto w-2/4 mt-2 flex justify-center gap-4">
            <div className={`rounded-full w-6 h-6 mb-4 border-2 transition ease-in-out ${index == 0 ? "bg-green-500" : ""}`}>

            </div>
            <div className={`rounded-full w-6 h-6 border-2 transition ease-in-out ${index == 1 ? "bg-green-500" : ""}`}>

            </div>
          </div>
        </div>

        <div className={`rounded-3xl hidden w-[40%] mt-[-12%] md:block md:w-1/4`}>
          <img src={imgs} />
        </div>
      </div>
    </div>

  );
};

export default ImageSlider;