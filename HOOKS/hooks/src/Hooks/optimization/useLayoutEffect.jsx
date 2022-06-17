import React, { useState, useRef, useLayoutEffect } from "react";
import "../App.css";

function useDim(el, val) {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setHeight(boundingBox.height);
    setWidth(boundingBox.width);
  }, [val]);
  return { height, width };
}
const Sample = () => {
  const [counter, setCounter] = useState(2);
  const valElement = useRef(null);
  const { height, width } = useDim(valElement, counter);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Height: {height}</h1>
        <h1>Width: {width}</h1>
        <div ref={valElement}>{counter}</div>
        <button onClick={() => setCounter(counter * 10)}>Update</button>
      </header>
    </div>
  );
};
export default Sample;
