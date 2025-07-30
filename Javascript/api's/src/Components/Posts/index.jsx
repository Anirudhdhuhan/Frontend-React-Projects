import Body from "./Body";
import ID from "./ID";
import Reactions from "./Reactions";
import Tags from "./Tags";
import Title from "./Title";
import UserId from "./UserId";
import Views from "./Views";
import { useEffect } from "react";

export default function Posts({
  data,
  HandleCardClick,
  fetchClickedPost,
  selectedPostID,
}) {
  useEffect(() => {
    if (selectedPostID !== 0) {
      fetchClickedPost(selectedPostID);
    };
  }, [selectedPostID]);
  return (
    <div className="space-y-8 flex items-center flex-col">
      {data.posts.map((row) => (
        <div
          className="border space-y-2 p-4 rounded-lg w-2/5"
          onClick={() => {
            HandleCardClick(row.id);
          }}
        >
          {/* <div className="flex gap-1">
            <ID row={row} />
            <UserId row={row} />
          </div> */}

          <Title row={row} />
          <Body row={row} />
          <div className="flex justify-between items-center">
            <div className="">
              <Tags row={row} />
            </div>
            <div className="flex items-center gap-2">
              <Reactions row={row} />
              {/* <Views row={row} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
