import CountButton from "./CountButton";

export default function CountButtons({ setNumber, locked }) {
  return (
    <div className="button-container">
      <CountButton setNumber={setNumber} locked={locked} />
      <CountButton setNumber={setNumber} locked={locked} isPlus />
    </div>
  );
}
