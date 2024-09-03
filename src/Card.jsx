import { useEffect, useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [number, setNumber] = useState(0);
  const locked = number === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newNumber = number + 1;
        if (newNumber > 5) {
          setNumber(5);
          return;
        }
        setNumber(number + 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [number]);

  return (
    <>
      <div className={`card ${locked ? "card--limit" : ""}`}>
        <Title locked={locked} />
        <Count number={number} size="lg" />
        <ResetButton setNumber={setNumber} />
        <CountButtons setNumber={setNumber} locked={locked} />
      </div>
    </>
  );
}
