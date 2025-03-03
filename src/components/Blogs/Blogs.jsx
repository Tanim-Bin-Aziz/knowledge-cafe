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
    <div>
      <h3>This is blogs</h3>
    </div>
  );
};

export default Blogs;
