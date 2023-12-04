import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
function ContactUs() {
    return (
        <div className="flex flex-col items-center text-base h-full my-auto">
            <div className="text-palette-100">
                Have More Questions?
            </div>
            <div className="font-sans font-bold text-6xl">
                Get In Touch
            </div>
            <div className="font-sans  text-center mt-8 w-2/5">
            
Got questions, cool ideas, or just want to chat? We're all ears! Whether it's a tech glitch or you're unsure about team stuff, hit us up. Our virtual door is always open. Shoot us an email, drop a message, or slide into our DMs—we're here for you. Let's make this hackathon experience awesome together!
            </div>
            <div className="flex justify-around w-1/5 mt-8 mb-8">
            <a href="https://www.instagram.com/nsbehacks_uoft/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' color='#f2ac7d' icon={faInstagram} size='2xl' />
            </a>
            <a href="https://www.linkedin.com/company/nsbehacks-uoft/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' color='#f2ac7d' icon={faLinkedin}  size='2xl'/></a>
            <FontAwesomeIcon className='icon' color='#f2ac7d' icon={faEnvelope}  size='2xl'/>
            </div>
        </div>
    )

    

}

export default ContactUs;