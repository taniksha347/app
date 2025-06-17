import React from "react";

function Reviews({ name, description, img }) {
  return (
    <div className="max-w-md  bg-white h-[350px] w-[270px] mx-[10px] shadow-lg shadow-black rounded-xl p-6 text-justify  border border-gray-200 hover:shadow-2xl transition duration-300 mb-12 h-100 w-90 ml-[40px] flex flex-col justify-between min-h-[250px]">

      <p className="text-sm italic  text-black mb-3 flex-grow">
        {description}
      </p>

      <div className="flex items-end gap-4 mt-auto">

        <img
          src={img}
          alt="User_Img"
          className="h-[80px] w-[70px] p-1 bg-black rounded-3xl object-cover shadow shadow-black"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <div className="flex text-xl">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
