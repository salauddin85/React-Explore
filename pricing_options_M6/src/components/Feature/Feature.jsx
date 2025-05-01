import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Feature = ({ feature }) => {
  return (
    <div className="flex items-center ">
      <IoIosCheckmarkCircle className="mr-2 text-cyan-800"></IoIosCheckmarkCircle> {feature}
    </div>
  );
};

export default Feature;
