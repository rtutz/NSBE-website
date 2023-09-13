import Lottie from "lottie-react";

import data from '../assets/lottie_geographic.json';

function Homepage() {
    const style = {
        height: 500,
      };

    return (
        <>
        {/* Added empty div to push down homepage and respect header*/}
        <div className="h-20"/>


        <div id="#homepage" className="homepage flex justify-between">
             <div className="textBanner text-4xl font-sans font-bold">
                NSBEHacks
             </div>
            <div> 
                <Lottie animationData={data} style={style}/>
            </div>
        </div>
        </>
    )
}

export default Homepage;