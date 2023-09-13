import Lottie from "lottie-react";

import data from '../assets/lottie_geographic.json';
import ModernButton from "./ModernButton";

function Homepage() {
    const style = {
        height: 2000,
      };

    return (
        <>
        {/* Added empty div to push down homepage and respect header*/}
    

        <div id="#homepage" className="homepage flex justify-between items-center mt-20 mx-10">
            <div className="flex flex-col">
                <div className="text-8xl font-sans font-bold text-palette-200">
                    NSBEHacks
                </div>
                <div className="mt-3 text-xl font-sans font-bold">
                    The first student-run <span className="text-palette-100 text-xl font-sans font-bold">black hackathon</span> in the GTA
                </div>
                <div className="flex flex-col mt-5 first-letter:font-sans text-palette-400 font-semibold">
                    <span className="font-thin tracking-wider">Toronto, Ontario</span>
                    <span className="font-thin tracking-wider mt-1">October 25-27, <span className="text-palette-100 font-thin tracking-wider">2023</span></span>
                    <div className="mt-8">
                        <ModernButton text={"Join Us"} />
                    </div>
                </div>
            </div>
            <div> 
                <Lottie animationData={data} style={style}/>
            </div>
        </div>
        </>
    )
}

export default Homepage;