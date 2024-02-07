import CircleNumber from "./CircleTimer";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';


function Timer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Calculate time left
    function calculateTimeLeft() {
      const countDownDate = new Date("February 24, 2024 17:00:00").getTime();
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


    // For header
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.2,
      });


    return (
        <div className="mt-20 min-h-full flex flex-col items-center mb-20"  ref={ref}>
            {inView && (
        <TypeAnimation
            wrapper={"div"}
            sequence={['Hacking begins in...', 500]}
            cursor={false}
            speed={1}
            style={{ fontSize: '2rem', fontWeight: '900'}}
            repeat={0}
            className="type"
        />
      )}
        <h1 className="text-3xl md:text-4xl font-sans font-bold"> </h1>
        <div className="flex md:flex-row items-center mx-auto md:space-x-8">
            <CircleNumber number={timeLeft.days} totalDots={21} dotsCovered={21 - timeLeft.days} dotSize={"6"} units={"days"} />
            <CircleNumber number={timeLeft.hours} totalDots={24} dotsCovered={24 - timeLeft.hours} dotSize={"4"} units={"hours"} />
            <CircleNumber number={timeLeft.minutes} totalDots={60} dotsCovered={60 - timeLeft.minutes} dotSize={"2"} units={"minutes"} />
            <CircleNumber number={timeLeft.seconds} totalDots={60} dotsCovered={60 - timeLeft.seconds} dotSize={"2"} units={"seconds"} />
        </div>
        </div>


    )
}


export default Timer;