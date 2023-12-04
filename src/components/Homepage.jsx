import Lottie from "lottie-react";

import data from '../assets/lottie_geographic_orange.json';
import {ModernButton, ModernButtonInverted} from "./ModernButton";

const googleFormToJoinUs = "https://form.typeform.com/to/CIqjra2H"

function Homepage() {
    const style = {
        height: 700
      };

    return (
        <>
    <div id="#homepage" className="homepage flex flex-col md:flex-row justify-center items-center mt-20 mx-10">
        <div className="md:w-1/2 text-center md:text-left">
            <div className="text-6xl md:text-8xl font-sans font-bold text-palette-200">
                <h2 className="hero glitch layers" data-text="NSBEHacks"><span>NSBEHacks</span></h2>
            </div>
            <div className="mt-3 text-xl font-sans font-bold text-palette-800">
                The first student-run <span className="text-palette-100 text-xl font-sans font-bold">black hackathon</span> in the GTA
            </div>
            <div className="flex flex-col mt-5 first-letter:font-sans text-palette-400 font-semibold">
                <span className="font-thin tracking-wider">Toronto, Ontario</span>
                <span className="font-thin tracking-wider mt-1">February 24 - 24, <span className="text-palette-100 font-thin tracking-wider">2024</span></span>
                <div className="mt-8 flex flex-col md:flex-row md:justify-left md:items-center gap-4 md:gap-9">
                    <ModernButton text={"Register Now"} link={googleFormToJoinUs} />
                    <ModernButtonInverted 
  text={"Sponsor Us"} 
  link={"mailto:hello@nsbehacksuoft.ca"} 
/>
                </div>

            </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <Lottie animationData={data} style={style} />
                </div>
            </div>
        </>

    )
}

export default Homepage;