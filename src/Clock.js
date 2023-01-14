import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  // }, []);
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // returning a cleanup function
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);5

  return <div>{time.toString()}</div>;
}

export default Clock;
