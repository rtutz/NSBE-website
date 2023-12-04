import FaqCard from "./FAQcard";
import { TypeAnimation } from 'react-type-animation';
import ContactUs from "./ContactUs";

function Faq() {
    return (
    <div className="min-h-screen flex flex-col items-center py-30 w-4/5 mx-auto">
        <TypeAnimation
            wrapper={"div"}
            sequence={['FREQUENTLY ASKED QUESTIIONS', 500]}
            cursor={false}
            speed={1}
            style={{ fontSize: '2rem', fontWeight: '900'}}
            repeat={0}
            className="type"
        />
      <div id="accordion" className="grid grid-cols-2 items-start gap-4 w-full p-4 mt-4">
        
            <div>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            </div>
            
            <div>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            <FaqCard question={"When and where is NSBEHacks happening?"} answer={"The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology. With more than 600 chapters and more than 24,000 active members in the U.S. and abroad, NSBE’s mission is “to increase the number of culturally responsible black engineers who excel academically"}/>
            </div>
            
        </div>
        <ContactUs></ContactUs>
    </div>
    
    );
}

export default Faq;