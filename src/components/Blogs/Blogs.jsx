/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="w-2/3">
      <h1 className="text-4xl">This is blogs</h1>
    </div>
  );
};

export default Blogs;
