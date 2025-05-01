import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Profile", path: "/profile" },
  ];

  return (
    <nav>
      <section>
        <div className="md:flex justify-between m-4">
          <div className=" text-3xl text-cyan-500 font-bold ">
            <h2>Logo</h2>
          </div>
          <div>
            <ul className="md:flex ">
              {routes.map((route) => (
                <Link key={route.id} route={route}></Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
