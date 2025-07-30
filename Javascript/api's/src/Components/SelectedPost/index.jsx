export default function SelectedPost(clickedPost) {
  return (
    <div>
      {clickedPost.id},{clickedPost.UserId},{clickedPost.title},
      {clickedPost.body},{clickedPost.reactions},{clickedPost.views}
    </div>
  );
}
