export default function Body({ row }) {
  return (
    <div className="flex gap-1">
      <div className=" p-2  rounded-xl mb-2 text-white">{row.body}</div>
    </div>
  );
}
