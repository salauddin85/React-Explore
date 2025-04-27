import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Headar/Headar";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const handleAddToBookmarks = blog =>{
    console.log("bookmark adding",blog);
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div>
        <Header></Header>
        <div className="md:flex max-w-7xl mx-auto ">
          <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
