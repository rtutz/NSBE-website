import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Ronald from '../assets/ronald.png';
import Alex from '../assets/Alex.png';
import Ayo from '../assets/Ayo.png';
import Gen from '../assets/Gen.png';
import Johannes from '../assets/johannes.png';
import Shatho from '../assets/Shatho.png';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'




function OurTeam() {
    const [name, setName] = useState(''); // Initializing name state as empty
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    let imgList = [ [Alex, 'Oluwasina (Alex) Olowookere'], [Ayo, 'Ayomide Ajayi'],[Gen, 'Genevieve Aguigwo'], [Johannes, 'Johannes Ehoule Toppe'],[Shatho, 'Shatho Nkwebi J Hubona'], [Ronald, 'Ronald John Tutor']];


    const { ref, inView, entry } = useInView({
        threshold: 0.2,
      });

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Cleanup the event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    //   containerClass={'w-full'}
    return (
        <div className="mb-20 flex flex-col items-center justify-center py-30 w-4/5 mx-auto"  ref={ref}>
            <div className="mt-20 mb-10">
            {inView && 
            <TypeAnimation
                wrapper={"div"}
                sequence={['Our Team', 500]}
                cursor={false}
                speed={3}
                style={{ fontSize: '2rem', fontWeight: '900', textAlign: 'center'}}
                repeat={0}
                className="type"
            />}
             <h1 className="h-8 mt-2 flex justify-center font-sans text-2xl">{name}</h1> {/* Reserve space for h1 with a fixed height */}
            </div>
            
            {/* <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass={'w-full'}  
  dotListClass="custom-dot-list-style"
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  sliderClass=""
  slidesToSlide={1}
  swipeable
> */}
<Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={1}
  centerMode={false}
  className=""
  containerClass={'w-full'}
  customTransition="transform 3000ms ease-in-out" 
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover={true}
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
  transitionDuration={5000}
>
{/* {[...Array(10)].map((_, index) => (
        <div key={index} className='flex justify-center items-center'>
          <div className="w-full bg-white h-[0.10rem]" ></div>
          <img src={Ronald} alt="" />
          <div className="w-full bg-white h-[0.10rem]" ></div>
        </div>
      ))} */}
    {imgList.map((item, index) => (
          <div 
            key={index} 
            className='flex justify-center items-center'
            onMouseEnter={() => setName(item[1])} // Setting the state to the current image name
            onMouseLeave={() => setName('')} // Clearing the state when mouse leaves the image
          >
            <div className="w-full bg-white h-[0.10rem]"></div>
            <img src={item[0]} alt={item[1]} />
            <div className="w-full bg-white h-[0.10rem]"></div>
          </div>
        ))}


    
  
</Carousel>
            
        </div>
    )
}

export default OurTeam;