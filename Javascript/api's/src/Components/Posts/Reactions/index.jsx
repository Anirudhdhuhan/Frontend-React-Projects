export default function Reactions({ row }) {
  return (
    <p className=" text-slate-400">
      {row.reactions.likes > 300 && `Likes:-${row.reactions.likes}, `}
      Dislikes:-{row.reactions.dislikes}
    </p>
  );
}
