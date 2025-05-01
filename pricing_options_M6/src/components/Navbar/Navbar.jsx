import React from "react";
import Link from "../Link/Link";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
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
        <div className="md:flex justify-between m-4 items-center">
          {/* Left Side: Logo or Menu Icon */}
          <div className="md:hidden text-3xl text-cyan-500 font-bold">
            {open ? (
              <AiOutlineClose onClick={() => setOpen(!open)} />
            ) : (
              <TiThMenu onClick={() => setOpen(!open)} />
            )}
          </div>
          {/* Show Logo on Medium and Up */}
          <div className="hidden md:block text-3xl font-bold text-cyan-500">
            Logo
          </div>

          {/* Right Side: Menu Items */}
          <div className={`md:flex ${open ? "block" : "hidden"}`}>
            <ul className="md:flex">
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
