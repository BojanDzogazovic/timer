import React, { useEffect, useState } from "react";
import "./index.css";

export const Timer = ({ initial }) => {
  const [timerValue, setTimerValue] = useState(initial);
  const [pauseTimer, setPauseTimer] = useState(false);

  useEffect(() => {
    let interval = null;

    if (pauseTimer || timerValue === 0) {
      clearInterval(interval);
    } else if (!pauseTimer) {
      interval = setInterval(() => {
        setTimerValue((prevState) => prevState - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [pauseTimer, timerValue]);

  return (
    <div className="mt-100 layout-column align-items-center justify-content-center">
      <div className="timer-value" data-testid="timer-value">
        {timerValue}
      </div>
      <button
        className="large"
        data-testid="stop-button"
        onClick={() => {
          pauseTimer ? setPauseTimer(false) : setPauseTimer(true);
        }}
      >
        {pauseTimer ? "Continue Timer" : "Stop timer"}
      </button>
    </div>
  );
};
