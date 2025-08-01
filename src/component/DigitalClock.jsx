import { useEffect, useState } from 'react';
import './clock.css'

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

  const formatTime = (val) => val.toString().padStart(2, '0');

  return (
    <div className="digital-clock">
      <h2>Digital Clock</h2>
      <div className="time">
        {formatTime(time.getHours())} : {formatTime(time.getMinutes())} : {formatTime(time.getSeconds())}
      </div>
    </div>
  );
};

export default DigitalClock;
