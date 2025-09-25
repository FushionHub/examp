'use client';

import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialMinutes?: number;
}

const Timer: React.FC<TimerProps> = ({ initialMinutes = 60 }) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    if (seconds > 0) {
      const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [seconds]);

  const formatTime = () => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return <div className="text-lg font-semibold">{formatTime()}</div>;
};

export default Timer;