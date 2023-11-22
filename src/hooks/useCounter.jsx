import React, { useState } from 'react'

const useCounter = () => {
    const [count, setCount] = useState(0);

    function increaseCount() {
      setCount((p) => p + 1);
    }
    function decreaseeCount() {
      setCount((p) => p - 1);
    }
  return (
   

    [count,increaseCount,decreaseeCount]

  )
}

export default useCounter
