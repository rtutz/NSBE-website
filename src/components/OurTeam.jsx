import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Lisa from '../assets/Lisa.png';
import Ronald from '../assets/ronald.png';
import Alex from '../assets/Alex.png';
import Ayo from '../assets/Ayo.png';
import Gen from '../assets/Gen.png';
import Johannes from '../assets/johannes.png';
import Shatho from '../assets/Shatho.png';
import Ibuola from '../assets/ibuola.png';
import Khushil from '../assets/Khushil.png';
import Amazing from '../assets/Amazing.png';
import Odosa from '../assets/Odosa.png';
import Huda from '../assets/Huda.png';
import Tanya from '../assets/Tanya.png';
import Chelsea from '../assets/Chelsea.png';
import Niki from '../assets/Niki.png';
import Nathan from '../assets/Nathan.png';
import Lama  from '../assets/Lama.png';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'




function OurTeam() {
    const [name, setName] = useState(''); // Initializing name state as empty
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    let imgList = [ [Lisa, "Lisa Mtui","https://www.linkedin.com/in/lisa-mtui/"],[Alex, 'Oluwasina (Alex) Olowookere', "https://www.linkedin.com/in/oluwasina-olowookere-7bb2b4224/"], [Ayo, 'Ayomide Ajayi', "https://www.linkedin.com/in/ayomide-ajayi-julia/"],[Gen, 'Genevieve Aguigwo',"https://www.linkedin.com/in/genevieve-aguigwo/"], [Johannes, 'Johannes Ehoule Toppe',"https://www.linkedin.com/in/jtoppe/"],[Shatho, 'Shatho Nkwebi J Hubona', "https://www.linkedin.com/in/shatho-hubona/"], [Ronald, 'Ronald John Tutor', "https://www.linkedin.com/in/ronald-tutor/"],[Ibuola, "Ibuola Ayanlowo","https://www.linkedin.com/in/ibuola-ayanlowo/"],[Khushil,"Khushil Nagda","https://www.linkedin.com/in/khushil-nagda/"], 
    [Amazing, "Amazing Lawal", "https://www.linkedin.com/in/amazinglawal/"],
    [Odosa, "Odosa (Sewell) Obasuyi", "https://www.linkedin.com/in/odosa-obasuyi/"],
    [Huda, "Huda Musa", "https://www.linkedin.com/in/huda-musa/"],
    [Tanya, "Tanya Allison", "https://www.linkedin.com/in/tanya-joelle-allison"],
    [Chelsea, "Chelsea Muhwati", "https://www.linkedin.com/in/chelsea-muhwati-6705a0207/"],
    [Niki, "Nikita Chiduku", "https://www.linkedin.com/in/nikita-c-a8b19155/overlay/photo/"],
    [Nathan, "Nathan Cibonga", "https://www.linkedin.com/in/nathan-cibonga-mugabe/"],
    [Lama, "Lama Elfaki", "https://www.linkedin.com/in/lama-elfaki-991610206/"]
  ];


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
 
            <img 
              src={item[0]} 
              alt={item[1]} 
              style={{
                cursor: 'pointer', 
                transition: 'transform .2s',   // Adds a smooth transition
                width: "50%"
              }} 
              onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} // Slightly increases size
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'} // Reverts to original size
              onClick={() => window.open(item[2], '_blank')}
            />

            <div className="w-full bg-white h-[0.10rem]"></div>
          </div>
        ))}


    
  
</Carousel>
            
        </div>
    )
}

export default OurTeam;