import { TypeAnimation } from 'react-type-animation';
function About() {
    return (
      <div className="flex min-h-screen flex-col items-center py-30 About">
            <TypeAnimation
                    wrapper={"div"}
                    sequence={['About Us', 500]}
                    cursor={false}
                    speed={1}
                    style={{ fontSize: '2rem', fontWeight: '900'}}
                    repeat={0}
                    className="type"
              />

            <div className='mx-40 text-lg text-center mt-20 leading-loose'>
            The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology.

With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically, succeed professionally and positively impact the community.
            </div>

      
          </div>

    )
  }

export default About;