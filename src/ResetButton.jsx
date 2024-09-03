import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setNumber }) {
  const handleClick = (event) => {
    setNumber(0);
    event.currentTarget.blur();
  };

  return (
    <>
      <button className="reset-btn" onClick={handleClick}>
        <ResetIcon className="reset-btn-icon" />
      </button>
    </>
  );
}
