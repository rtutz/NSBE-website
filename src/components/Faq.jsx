import FaqCard from "./FAQcard";
import { TypeAnimation } from 'react-type-animation';

// function Faq() {
//     return (
//     <div className="flex h-screen flex-col items-center">
//         <TypeAnimation
//             wrapper={"div"}
//             sequence={['FREQUENTLY ASKED QUESTIIONS', 500]}
//             cursor={false}
//             speed={1}
//             style={{ fontSize: '2rem', fontWeight: '900'}}
//             repeat={0}
//             className="type"
//         />
//         <div id="accordion">
//             <FaqCard question={"Hello"}/>

//         </div>

      
//     </div>
//     )
// }

function Faq() {
    return (
    <div className="min-h-screen flex flex-col items-center py-30">
        <TypeAnimation
            wrapper={"div"}
            sequence={['FREQUENTLY ASKED QUESTIIONS', 500]}
            cursor={false}
            speed={1}
            style={{ fontSize: '2rem', fontWeight: '900'}}
            repeat={0}
            className="type"
        />
      <div id="accordion" className="grid grid-cols-2 items-start gap-4 w-full p-4 mt-20 max-h-0">
        
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            
        </div>
    </div>
    );
}

export default Faq;