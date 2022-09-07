import wallpaper from '../assets/wallpaper2.jpg';
import '../css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagramSquare, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

export default function Home(){
    return (
        <>
        <div className="self-promotion">
            <img src={wallpaper} alt="wallpaper" width="100%" />

           
            
             <div className="home-flex">
                 <h1>Submitted by Ishan</h1>
                  
                    
                    <a href="https://www.linkedin.com/in/ishangupta8909/" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
                    </a>

                     <a href="https://www.instagram.com/_ishangupta_/" target="_blank" rel='noreferrer' >
                        <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
                    </a>     
                    <a href="https://www.facebook.com/ishan.gupta0506" target="_blank" rel='noreferrer' >
                        <FontAwesomeIcon icon={faFacebookF} size="3x" />
                    </a>

                       
             </div>
        </div>
        </>
    );
}