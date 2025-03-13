import React, { useState } from "react";

const Counter  = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You pressed {count} time(s)</p>
      <button onClick={() => setCount(count + 1)}>
        Press me
      </button>
    </div>
  )
}

export default Counter;