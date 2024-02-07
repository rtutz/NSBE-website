import Lottie from "lottie-react";
import { useInView } from 'react-intersection-observer';
import data from '../assets/lottie_geographic_orange.json';
import { useEffect } from 'react';
import {ModernButton, ModernButtonInverted} from "./ModernButton";

const googleFormToJoinUs = "https://form.typeform.com/to/CIqjra2H"
const volunteerForm = "https://form.typeform.com/to/K43zdeYy"

// eslint-disable-next-line react/prop-types
function Homepage({setActiveLink}) {
    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0.2,
    });
  
  
    useEffect(() => {
      if (inView) {
        setActiveLink('homepage');
      }
    },[inView, setActiveLink])
    
    const style = {
        height: 700
      };

    return (
       
    <div id="homepage" className="homepage flex flex-col md:flex-row justify-center items-center mt-20 mx-10" ref={ref}>
        <div className="md:w-1/2 text-center md:text-left">
            <div className="text-6xl md:text-8xl font-sans font-bold text-palette-200">
                <h2 className="hero glitch layers" data-text="NSBEHacks"><span>NSBEHacks</span></h2>
            </div>
            <div className="mt-3 text-xl font-sans font-bold text-palette-800">
                The first student-run <span className="text-palette-100 text-xl font-sans font-bold">black hackathon</span> in the GTA
            </div>
            <div className="flex flex-col mt-5 first-letter:font-sans text-palette-400">
                <span className="font-thin tracking-wider">Toronto, Ontario</span>
                <span className="font-thin tracking-wider mt-1">February 24 - 25, <span className="text-palette-100 font-thin tracking-wider">2024</span></span>
                
                <div className="mt-8 flex flex-col md:flex-row md:justify-left md:items-center gap-4 md:gap-9">
                    <ModernButton text={"Registration has closed!"} link={googleFormToJoinUs} />

                    <ModernButtonInverted 
                    text={"Sponsor Us"} 
                    link={"mailto:hello@nsbehacksuoft.ca"} />
                </div>
                <a
                    href={volunteerForm}
                    className="mt-20 italic underline volunteerText"
                    target="_blank"  // Open the link in a new tab
                    rel="noopener noreferrer" // Recommended for security reasons
                    >
                    Interested in becoming a volunteer?
                    </a>

                


            </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <Lottie animationData={data} style={style} />
                </div>
            </div>
            

    )
}

export default Homepage;