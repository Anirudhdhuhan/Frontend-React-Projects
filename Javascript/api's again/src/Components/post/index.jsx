import { Link, useNavigate, useParams } from "react-router";
import SelectedPost from "./Selected Post";

export default function PagePostDetails() {
  const params = useParams();
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  console.log("this is params", params);
  return (
    <div className="ml-4 mt-4">
      This is post id {params.postId}{" "}
      <button
        className="border p-1 px-2 rounded-xl hover:text-black hover:bg-blue-200"
        onClick={goBack}
      >
        Go back
      </button>
      <Link to={`/posts/${params.postId}/update`}>
        {" "}
        <button className="border p-1 ml-2 mt-2 px-2 rounded-xl hover:bg-yellow-500 hover:text-black">
          Update Post
        </button>
      </Link>
      <SelectedPost params={params} />
    </div>
  );
}
