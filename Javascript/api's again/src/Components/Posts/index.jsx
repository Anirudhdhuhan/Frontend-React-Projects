import { Link } from "react-router";
import Body from "./Body";
import Reactions from "./Reactions";
import Tags from "./Tags";
import Title from "./Title";

export default function Posts({ data }) {
  return (
    <div className="mt-9">
      {data.posts.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <div className=" mb-5  border-1 px-4 py-4 w-130 rounded-3xl ">
            <Title post={post} />
            <Body post={post} />
            <div className="flex justify-between ">
              <Tags post={post} />
              <Reactions post={post} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

