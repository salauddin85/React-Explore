import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Headar/Headar";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
function App() {
  return (
    <>
      <div className="">
        <Header></Header>
        <div className="md:flex max-w-7xl mx-auto ">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
