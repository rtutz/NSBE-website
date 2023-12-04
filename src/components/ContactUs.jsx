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
            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </div>
            <div className="flex justify-around w-1/5 mt-8">
            <FontAwesomeIcon color='#f2ac7d' icon={faInstagram} size='2xl' />
            <FontAwesomeIcon color='#f2ac7d' icon={faLinkedin}  size='2xl'/>
            <FontAwesomeIcon color='#f2ac7d' icon={faEnvelope}  size='2xl'/>
            </div>
        </div>
    )

}

export default ContactUs;