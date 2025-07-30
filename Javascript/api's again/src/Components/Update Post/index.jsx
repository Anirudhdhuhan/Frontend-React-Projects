import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

export default function UpdatePost() {
  const navigate = useNavigate();
  const params = useParams();

 

  function home() {
    navigate("/");
  }

  const [updatePost, setUpdatePost] = useState();

  const fetchPost = async () => {
    const response = await fetch(
      `https://dummyjson.com/posts/${params.postId}`
    );
    const { id, title, body, tags, reactions, views, userId } =
      await response.json();
    setUpdatePost({ id, title, body, tags, reactions, views, userId });
  };

  console.log("Update Post:- ", updatePost);

  function setvalue(name, e) {
 
    const value = e.target.value;
    setUpdatePost({...updatePost ,[name]: value});
  }

const [ttag, setTtag] = useState("");


function AddBtnClick(){

updatePost.tags.push(`${ttag}`);
setTtag("");
}


function DeleteTag(index){
  console.log("Tag deleted", updatePost.tags[index]);
  const deletedTag = updatePost.tags.filter((__, ind) => ind != index)
  setUpdatePost({...updatePost , tags: deletedTag})
}

const [updatedPost, setUpdatedPost] = useState(null);

async function SubmitUpdatedPost(){
  const payload = {
    title: updatePost.title,
    userId: updatePost.userId,
    body: updatePost.body,
    tags: updatePost.tags,
  };
  
const resPutApi = await fetch(`https://dummyjson.com/posts/${params.postId}`, {
  method: 'PUT', 
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
})
const jsonResPutApi = await resPutApi.json();

 setUpdatedPost(jsonResPutApi);
  console.log("Post Updated");
}
console.log("Updated Post", updatedPost)

  useEffect(() => {
    fetchPost();
  }, []);

  if (!updatePost) return null;
  return (
    <div className="mt-4 ml-4">
      <button
        onClick={home}
        className="border p-1 rounded mr-2 hover:bg-white hover:text-black"
      >
        Home
      </button>
      This is Update Post
      <br />
      <br />
      Title:-{" "}
      <input
        type="text"
        name="title"
        value={updatePost.title}
        className="border pl-1"
        onChange={(e) => {
          setvalue("title", e);
        }}
      />
      <br />
      <br />
      Body:-{" "}
      <input
        type="text"
        name="body"
        value={updatePost.body}
        className="border pl-1"
        onChange={(e) => {
          setvalue("body", e);
        }}
      />
      <br />
      <br />
      UserID:-{" "}
      <input
        type="text"
        name="userId"
        value={updatePost.userId}
        className="border pl-1"
        onChange={(e) => {
          setvalue("userId", e);
        }}
      />
      <br />
      <br />
      Tags:-{" "}
      <input
        type="text"
        name="tags"
      value={ttag}
        className="border mr-2 ml-1 pl-1"
        onChange={(e) => {
          setTtag(e.target.value);
        }}
      />
      <button className="border px-2 rounded ml-2 hover:bg-blue-500 hover:text-black" onClick={AddBtnClick}>
        Add Tags
      </button>
      <div className="ml-4 mt-5"></div>
   
{updatePost.tags.map((tag,index) => <p className="mb-2">
  {tag} <button className="border px-2 rounded ml-2 hover:bg-red-500 hover:text-black" onClick={() => {DeleteTag(index)}}>Delete</button>
  
  </p>)}
      <br />
      <button className="border p-2 rounded ml-2 hover:bg-yellow-500 hover:text-black" onClick={SubmitUpdatedPost}>
        Submit
      </button>
    </div>
  );
}
