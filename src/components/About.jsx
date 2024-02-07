import { TypeAnimation } from 'react-type-animation';
import Statistics from './Statistics';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });



  return (
    <div id="about" className="flex min-h-screen flex-col items-center justify-center py-30 About" ref={ref}>
      {inView && (
        <TypeAnimation
            wrapper={"div"}
            sequence={['About Us', 500]}
            cursor={false}
            speed={1}
            style={{ fontSize: '2rem', fontWeight: '900'}}
            repeat={0}
            className="type"
        />
      )}

      <div className='mx-2 md:mx-10 lg:mx-40 text-lg text-center mt-10 leading-loose'>
      Hosted by NSBE UofT Chapter, NSBEHacks is the pioneering event of its kind – the first student-run hackathon dedicated to the experiences of Black individuals in technology and engineering. As the largest chapter in Toronto with a global membership of 24,000, NSBE UofT is a dynamic force since its inception in 1999. Beyond academic pursuits, our chapter is committed to activism, community outreach, and leadership within the Black community in technology and engineering spaces. NSBE Hacks UofT, our flagship initiative, brings together 200 participants annually for a transformative 36-hour experience, aiming to equalize opportunities for Black students in Canada by fostering a space that encourages creativity and innovation. Join us in shaping a more inclusive future where diversity is not just celebrated but actively embraced.
      </div>
      <Statistics/>
    </div>
  );
};
export default About;