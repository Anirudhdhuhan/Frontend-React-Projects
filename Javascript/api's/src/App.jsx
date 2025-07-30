import "./App.css";
import { useEffect, useState } from "react";
import Posts from "./Components/Posts";
import SelectedPost from "./Components/SelectedPost";

export default function App() {
  const [data, setData] = useState({
    posts: [],
    total: 0,
    skip: 0,
    limit: 0,
  });

  const [selectedPostID, setSelectedPostID] = useState(0);

  const [clickedPost, setClickedpost] = useState({
    // id: "",
    // userId: "",
    // tags: "",
    // views: "",
    // title: "",
    // reactions: "",
    // body: "",
  });

  async function fetchClickedPost(selectedPostID) {
    console.log("fetchClickedPost function ID:- ", selectedPostID);
    const res = await fetch(`https://dummyjson.com/posts/${selectedPostID}`);
    const postDetails = await res.json();
    setClickedpost(postDetails)
    console.log('post details => ', postDetails)
    // setClickedpost({id,userId,tags,views,title,reactions,body})
  }

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/posts");
    const { posts, total, skip, limit } = await response.json();
    setData({ posts, total, skip, limit });
  }

  function HandleCardClick(id) {
    setSelectedPostID(id);
  }
  console.log("selected post:- ", selectedPostID);

  return (
    <>
      <button
        className="bg-white text-black rounded p-1 my-2 ml-2"
        onClick={fetchData}
      >
        Click to get data
      </button>

      <p className=" border-1 w-fit p-2 bg-yellow-500 rounded-xl mb-2 text-black">
        Total data:- {data.total} <span className="mr-5"></span> Skip:-{" "}
        {data.skip} <span className="mr-5"></span> Data Limit:- {data.limit}
      </p>
      <div className="flex justify-center">
       
        {selectedPostID === 0 ?  <Posts
          data={data}
          HandleCardClick={HandleCardClick}
          fetchClickedPost={fetchClickedPost}
          selectedPostID={selectedPostID} 
        /> : <SelectedPost  clickedPost={clickedPost}/>}
      </div>
    </>
  );
}
