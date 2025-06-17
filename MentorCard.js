import React from "react";

function MentorCard({ img, name, title }) {
  return (
    <div className="rounded-xl pt-4 border-2 border-white hover:shadow-2xl transition duration-300 w-80 flex flex-col items-center text-center h-60 mb-12 shadow-white shadow-inner "
    style={{
      backgroundColor: 'rgba(255,255,255, 0.5)'
    }}>
      <img
        src={img}
        alt={name}
        className="h-28 w-28 rounded-full object-cover mb-4 shadow border-2 border-white shadow-white"
      />
      <h3 className="font-semibold text-2xl text-white">{name}</h3>
      <p className=" text-sm mt-2 text-white font-semibold">{title}</p>
    </div>
  );
}

export default MentorCard;
