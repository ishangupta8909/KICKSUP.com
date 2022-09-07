import '../css/Contact.css';
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";


export default function Contact(){

    return(
        <>
            <section id='Contact'>
                <div className='contact-card'>
                 <div className='contact-items'>
                    <p>REACH US AT </p>
                    <div>
                        <div className='contact-heading'>support@kicksup.com</div>
                        <div className='contact-detail'>
                        <a href="mailto:support@kicksup.com?subject=subject&cc=johndoe@kicksup.com" target="_blank" rel='noreferrer'>
                        for any technical.support
                        </a></div>
                    </div>
                    <div>
                        <div className='contact-heading'>info@kicksup.com</div>
                        <div className='contact-detail'>
                        <a href="mailto:info@kicksup.com?subject=subject&cc=johndoe@kicksup.com" target="_blank" rel='noreferrer' >for more information</a>
                        </div>
                    </div>
                    <div>
                        <div className='contact-heading'>feedback@kicksup.com</div>
                        <div className='contact-detail'>
                        <a href="mailto:feedback@kicksup.com?subject=subject&cc=johndoe@kicksup.com" target="_blank" rel='noreferrer' >to send your feedback</a>
                        </div>
                    </div>
                    <div>
                        <div className='contact-heading'>jobs@kicksup.com</div>
                        <div className='contact-detail'>
                        <a href="mailto:jobs@kicksup.com?subject=subject&cc=johndoe@kicksup.com" target="_blank" rel='noreferrer' >to work with us</a>
                        </div>
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
            </section>
            
        </>
    );
}