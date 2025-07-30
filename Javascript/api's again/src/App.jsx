import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./Components/Posts";
import SelectedPost from "./Components/post/Selected Post";
import { Link } from "react-router";

function App() {
  const [data, setData] = useState({
    posts: [],
    total: 0,
    skip: 0,
    limit: 0,
  });

  const [cardId, setCardId] = useState(0);

  const HandleCardId = (id) => {
    setCardId(id);
  };

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const { posts, total, limit, skip } = await response.json();
    setData({ posts, total, limit, skip });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="flex flex-col items-center my-4">
      {/* <button
        className="bg-red-700 p-3 text-white rounded-xl mb-4 outline:none"
        onClick={fetchData}
      >
        Fetch Data
      </button> */}

      <div>
        Total data:-{data.total} <span className="mr-2"></span> Limit:-
        {data.limit} <span className="mr-2"></span> Skip:-{data.skip}{" "}
        <span className="mr-2"></span> Selected Card:- {cardId}
      </div>
      <Link to={`/posts/create`}>
        {" "}
        <button className="border p-1 rounded ml-2 mt-2 hover:bg-white hover:text-black">
          Create Post
        </button>{" "}
      </Link>

      <Posts data={data} HandleCardId={HandleCardId} />
    </div>
  );
}

export default App;
