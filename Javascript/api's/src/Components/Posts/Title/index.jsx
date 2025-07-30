export default function Title({ row }) {
  return (
    <div className="flex gap-1 w-max">
      <div className=" p-1 text-2xl font-medium rounded text-white">
        {row.id} {row.title}
      </div>
    </div>
  );
}
