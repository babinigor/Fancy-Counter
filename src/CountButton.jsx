import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setNumber, isPlus, locked }) {
  const handleClick = (event) => {
    setNumber((prev) =>
      (prev - 1 < 0) & !isPlus
        ? 0
        : (prev + 1 > 5) & isPlus
        ? 5
        : prev + (isPlus ? 1 : -1)
    );
    event.currentTarget.blur();
  };
  return (
    <button
      disabled={isPlus && locked}
      onClick={handleClick}
      className="count-btn"
    >
      {isPlus ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
