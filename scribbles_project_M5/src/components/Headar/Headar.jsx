import React from "react";
import profile from "../../assets/images/profile.png";
const Headar = () => {
  return (
    
      <div className="flex justify-between items-center  px-4 m-3 border-b-1">
        <div>
          <h1 className="text-4xl font-bold ">Scribbles Cafe</h1>
        </div>
        <div>
          <img src={profile} alt="" />
        </div>
      </div>
    
  );
};

export default Headar;
