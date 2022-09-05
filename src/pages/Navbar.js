import logo from '../assets/websitelogo.png';
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-regular-svg-icons';
// import { faGithub, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Navbar(){

    return(
        <>
          <section id="navbar">
    <div className='navbar-header'>
    <div className="navbar-items">
        <div>
        <img src={logo} className="navbar-logo" alt="logo" />
        </div>
        
    
        <div className='navbar-links'>

        <div className='flex-container'>
        <div className='flex-items'>
        <a href='#Home'>HOME</a>
        </div>
        <div className='flex-items'>
        <a href='#TheJourney'>THEJOURNEY</a>
        </div>
        <div className='flex-items'>
        <a href='#Team'>TEAM</a>
        </div>
        <div className='flex-items'>
        <a href='#Store'>STORE</a>
        </div>
        <div className='flex-items'>
        <a href='#Contact'>CONTACT</a>
        </div>    
        </div>
        </div>
        <div className='nav-flex-container'>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <div>
        <p>GAGAN</p>
        </div>           
         </div>
    </div>
    </div>
    </section>
    </>
    );
}

