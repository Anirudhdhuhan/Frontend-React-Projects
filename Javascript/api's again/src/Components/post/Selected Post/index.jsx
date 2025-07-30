import { useState, useEffect } from "react";

export default function SelectedPost({ params}) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPost() {
    const res = await fetch(`https://dummyjson.com/posts/${params.postId}`);
    setIsLoading(false);
    const { id, title, body, tags, reactions, views, userId } =
      await res.json();
    setSelectedPost({ id, title, body, tags, reactions, views, userId });
  }

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) return <div>Fetching data..</div>;
  if (!selectedPost) return null;

  return (
    <div
      className="border p-6 rounded-xl mt-20 ml-60 w-2/3 "
    >
      <div className="flex justify-between mb-6">
        <p className="text-5xl">{selectedPost.title}</p>
        <div>
          <p className="text-3xl ">ID:-{selectedPost.id}</p>
          <p className="text-3xl ">UserId:- {selectedPost.userId}</p>
        </div>
      </div>

      <p className="text-2xl">{selectedPost.body}</p>
      <p className="text-3xl bg-gray-400/50 font-bold rounded-xl py-2 px-2 w-fit mt-4">
        Tags:- {selectedPost.tags}
      </p>
      <p className="text-xl mt-6">Views:- {selectedPost.views}</p>
     <p>Likes:- {selectedPost.reactions.likes}</p> 
       <p>Dislikes:- {selectedPost.reactions.dislikes}</p>
    </div>
  );
}
