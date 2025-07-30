export default function Button({ onClick, isDisabled, text, fullWidth }) {
  return (
    <button
      className={` hover:cursor-pointer hover:bg-white hover:text-black border h-10 rounded-md bg-black px-2 ${ fullWidth ? "w-full" : "" }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
