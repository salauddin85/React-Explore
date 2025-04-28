import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Headar/Headar";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);



  const handleAddToBookmarks = (blog) => {
    const alreadyBookmarked = bookmarks.find(b => b.id === blog.id);
    if (!alreadyBookmarked) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
  };
  
  const handleMarkAsRead = (blog) => {
    console.log("adding time", blog.reading_time, blog.id);
  
    const newReadingTime = readingTime + blog.reading_time;
    setReadingTime(newReadingTime);
  
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== blog.id);
    setBookmarks(remainingBookmarks);
  };
  
  
  return (
    <>
      <div>
        <Header></Header>
        <div className="md:flex max-w-7xl mx-auto ">
          <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
