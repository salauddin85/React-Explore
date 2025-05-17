import React from "react";
import bannerImage from "../../assets/images/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className=" w-[418px] h-[394px] rounded-lg "
        />
        <div>
          <h1 className="lg:text-5xl font-bold">Welcome to BOIGHOR</h1>
          <p className="py-6">
            Discover a world of knowledge and adventure with our curated
            collection of books. Whether you're looking for fiction, non-fiction,
            or educational resources, we have something for everyone.
          </p>
          <button className=" bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
