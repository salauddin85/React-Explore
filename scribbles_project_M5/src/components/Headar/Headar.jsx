import React from "react";
import profile from "../../assets/images/profile.png";
const Headar = () => {
  return (
    
      <div className="flex justify-between items-center mb-8  px-4 m-3 border-b-2 max-w-7xl mx-auto ">
        <div>
          <h1 className="text-4xl font-bold ">Scribbles Cafe</h1>
        </div>
        <div className="mb-3">
          <img src={profile} alt="" />
        </div>
      </div>
    
  );
};

export default Headar;
