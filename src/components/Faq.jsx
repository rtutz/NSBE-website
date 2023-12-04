import FaqCard from "./FAQcard";
import { TypeAnimation } from 'react-type-animation';
import ContactUs from "./ContactUs";

function Faq() {
    return (
    <div id="faq" className="min-h-screen flex flex-col items-center justify-center py-30 w-4/5 mx-auto">
        <div className=" mt-20">
            <TypeAnimation
                wrapper={"div"}
                sequence={['FREQUENTLY ASKED QUESTIIONS', 500]}
                cursor={false}
                speed={1}
                style={{ fontSize: '2rem', fontWeight: '900'}}
                repeat={0}
                className="type"
            />
        </div>
      <div id="accordion" className="grid grid-cols-2 items-start gap-4 w-full p-4 mt-4">
        
            <div>
            <FaqCard question={"Where will NSBEHacks be held?"} answer={"NSBEHacks will be held at the University of Toronto's Myhal Centre for Engineering Innovation & Entrepreneurship, located at 55 St George St, Toronto, ON M5S 0C9."}/>
            <FaqCard question={"What is this year's theme?"} answer={"The theme for this year's NSBEHacks is \"Redefining Cities for Youth\". Participants are challenged to address issues such as the housing crisis, career mapping, sustainable practices, healthy living, medical access, equal facilities access, education planning, financial literacy, and community engagement. The hackathon emphasizes a social approach, actively involving minorities in the problem-solving process. This year's event encourages multi-disciplinary solutions, extending beyond websites and apps."}/>
            <FaqCard question={"Will there be prizes?"} answer={"Yes, there will be prizes! Stay tuned for the exciting details as they will be announced closer to the date of the hackathon. "}/>
            <FaqCard question={"How many people are in a team?"} answer={"Teams will be composed of 3-4 chill people."}/>
            </div>
            
            <div>
            <FaqCard question={"Who can participate?"} answer={"The event is open for everybody, regardless of racial identity and educational background."}/>
            <FaqCard question={"Is there a registration fee?"} answer={"No, there is no registration fee. Additionally, participants will enjoy complimentary food, including snacks, and there will be designated spaces for breaks and naps."}/>
            <FaqCard question={"What if I don't have a team?"} answer={"TNo problem at all if you don't have a team yet! We've set up dedicated events and communication servers to help you find like-minded teammates. Feel free to join in, connect with others, and let's make the team-building process a breeze. We're here to ensure everyone has a smooth and enjoyable experience throughout the hackathon."}/>
            <FaqCard question={"What do I need to bring?"} answer={"Just bring your laptop and charger, and you're good to go! If you're up for it, a sleeping bag is highly suggested. Feel free to bring along anything else that makes you comfortable and ready to hack."}/>
            </div>
            
        </div>
        <ContactUs></ContactUs>
    </div>
    
    );
}

export default Faq;