import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex mx-18 p-4 m-3">
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  );
}

export default App;
