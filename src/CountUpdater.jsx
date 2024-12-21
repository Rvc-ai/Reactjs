import React, { useState } from "react";

function CountUpdater() {
  let [count, setCount] = useState(0);

  const plusCount = () => {
    if (count < 20) {
      setCount((count) => count + 1); // use callback function to update count with each line
    }
  };

  const minusCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div>
        <button onClick={plusCount}>{`plusCount: ${count}`}</button>
        <br />
        <br />
        <button onClick={minusCount}>{`minusCount: ${count}`}</button>
      </div>
      <br />
    </>
  );
}

export default CountUpdater;
