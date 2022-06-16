import React, { useState, memo } from "react";
const MemoParent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseCounter1 = () => {
    setCount1((count1) => count1 + 1);
  };
  return (
    <div>
      <button onClick={increaseCounter1}>Increase Counter1</button>
      <MemoCounter value={count1}>Counter 1</MemoCounter>
      <MemoCounter value={count2}>Counter 2</MemoCounter>
    </div>
  );
};
export default MemoParent;

const MemoCounter = memo(({ value, children }) => {
  console.log("Render", children);
  return (
    <div>
      {children}: {value}
    </div>
  );
});
