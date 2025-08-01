import { useEffect, } from 'react';
import './clock.css'

const AnalogClock = () => {
  useEffect(() => {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondDeg = seconds * 6;
      const minuteDeg = minutes * 6 + seconds * 0.1;
      const hourDeg = hours * 30 + minutes * 0.5;

      secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
      minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
      hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="analog-clock">
      <div className="hand-hour" id="hour-hand"></div>
      <div className="hand-minuts" id="minute-hand"></div>
      <div className="hand-second" id="second-hand"></div>

      {[...Array(12)].map((_, i) => {
        const number = i + 1;
        const angle = (number * 30) - 90;
        const radius = 130;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <span
            key={number}
            style={{
              position: 'absolute',
              left: `calc(50% + ${x}px - 10px)`,
              top: `calc(50% + ${y}px - 10px)`,
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#000',
            }}
          >
            {number}
          </span>
        );
      })}
    </div>
  );
};

export default AnalogClock;
