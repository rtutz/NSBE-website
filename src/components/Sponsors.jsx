import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';

import logo from '../assets/Accenture.svg'
import bfn from '../assets/bfn.png'
import ubisoft from '../assets/ubisoft.svg'
import cohere from '../assets/cohere.svg'
import intuit from '../assets/intuit.svg'
import manulife from '../assets/manulife.svg'
import rotman from '../assets/rotman.png'
import unity from '../assets/unity.svg'
import wayfair from '../assets/wayfair.svg'
import uoft_eng from '../assets/uoft_eng.png'
import peel_plastics from '../assets/peel_plastics.png'

function Sponsors() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
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
    
    return (
    <div id="sponsors" className="min-h-screen flex flex-col items-center justify-center py-30 w-4/5 mx-auto"  ref={ref}>
        <div className="mt-20 mb-10">
            {inView && 
            <TypeAnimation
                wrapper={"div"}
                sequence={['Sponsors', 500]}
                cursor={false}
                speed={3}
                style={{ fontSize: '2rem', fontWeight: '900', textAlign: 'center'}}
                repeat={0}
                className="type"
            />}
        </div>
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="sponsor-bg">
                    <img src={ubisoft} className="w-3/4 mx-auto py-4"/>
                </div>
                <div className="sponsor-bg flex items-center">
                    <img src={cohere} className="w-3/4 mx-auto py-4"/>
                </div>
            </div>

            <div className="sponsor-bg mb-4">
    <img src={bfn} className="w-1/2 mx-auto py-4"/>
</div>
            
            <div className="grid grid-cols-3 gap-4 w-full mb-4">
                <div className="sponsor-bg flex items-center">
                    <img src={intuit} className="w-3/4 mx-auto py-4"/>
                </div>
                <div className="sponsor-bg">
                    <img src={unity} className="w-3/4 mx-auto py-4"/>
                </div>
                <div className="sponsor-bg">
                <img src={rotman} className="w-3/4 mx-auto py-4"/>
                </div>
            </div>

           

            <div className="grid grid-cols-2 gap-4 w-full mb-4">
                <div className="sponsor-bg flex items-center">
                    <img src={uoft_eng} className="w-3/4 mx-auto py-4"/>
                </div>
                <div className="sponsor-bg">
                    <img src={wayfair} className="w-3/4 mx-auto py-4"/>
                </div>
              
            </div>
            <div className="sponsor-bg">
                    <img src={manulife} className="w-3/4 mx-auto py-4"/>
            </div>
            
        </div>
    </div>
    )
}

export default Sponsors;