import '../css/Contact.css';
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";


export default function Contact(){

    return(
        <>
            <div className='contact-card'>
             <div className='contact-items'>
                <p>REACH US AT </p>
                <div>
                    <div className='contact-heading'>support@kicksup.com</div>
                    <div className='contact-detail'>for any technical.support</div>
                </div>
                <div>
                    <div className='contact-heading'>info@kicksup.com</div>
                    <div className='contact-detail'>for more information</div>
                </div>
                <div>
                    <div className='contact-heading'>feedback@kicksup.com</div>
                    <div className='contact-detail'>to send your feedback</div>
                </div>
                <div>
                    <div className='contact-heading'>jobs @kicksup.com</div>
                    <div className='contact-detail'>to work with us</div>
                </div>

                </div>

                <div className='contact-footer'>
                    
                    <div className='contact-footer-heading'>
                    <p>stay in touch</p>
                    </div>
                    <div className="flex-container">
                    <a href="https://www.twitter.com"><img src={twitter} alt="twitter" width="16px" /></a>
                    <a href="https://www.instagram.com/_ishangupta_/"><img  src={insta} alt="insta" width="16px" /></a>
                    <a href="https://facebook.com/ishan.gupta0506/"><img src={facebook} alt="facebook" width="16px" /></a>
                    </div>
                </div>
             </div>
            
        </>
    );
}