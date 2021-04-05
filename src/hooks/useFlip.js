import { useState } from "react";

function useFlip(initialState = true) {
  const [isFacingUp, setIsFacingUp] = useState(initialState);
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, flipCard];
}

export default useFlip;
