export default function Tags({ row }) {
  return (
    <>
      <div className=" flex gap-2 p-2 bg-stone-700 rounded-xl mb-2 text-white">
        Tags:-
        {row.tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
    </>
  );
}
