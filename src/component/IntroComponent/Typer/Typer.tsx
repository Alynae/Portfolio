import React, { useState, useEffect } from "react";

const Typer = () => {

  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const textToType="Dev junior - Front & Back ";
  const delay = 250;
  let loop: Boolean = true;

  useEffect(() => {
    if (currentIndex < textToType.length) {
      setTimeout(() => {
        setText(text + textToType[currentIndex]);

        setCurrentIndex(currentIndex + 1);
      }, delay);
    } else if (loop) {
      setText("");

      setCurrentIndex(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return <>{text}</>;
};

export default Typer;
