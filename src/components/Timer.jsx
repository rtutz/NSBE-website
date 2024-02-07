import CircleNumber from "./CircleTimer";
import { useState, useEffect } from 'react';

function Timer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Calculate time left
    function calculateTimeLeft() {
      const countDownDate = new Date("February 24, 2024 16:37:52").getTime();
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);



    return (
        <div className="mt-20 min-h-screen flex flex-col items-center">
            <h1>Timer</h1>
            <div className="flex justify-between mx-96">
            <CircleNumber number={timeLeft.days} totalDots={21} dotsCovered={21 - timeLeft.days} dotSize={"6"} />
            <CircleNumber number={timeLeft.hours} totalDots={24} dotsCovered={24 - timeLeft.hours} dotSize={"4"}/>
            <CircleNumber number={timeLeft.minutes} totalDots={60} dotsCovered={60 - timeLeft.minutes} dotSize={"2"}/>
            <CircleNumber number={timeLeft.seconds} totalDots={60} dotsCovered={60 - timeLeft.seconds} dotSize={"2"}/>
            </div>
        </div>
    )
}


export default Timer;