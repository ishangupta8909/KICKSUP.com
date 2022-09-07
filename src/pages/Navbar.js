import shieldLogo from '../assets/badge.png';
import '../css/Navbar.css';
import profile from "../assets/profile.png";

import { NavLink } from 'react-router-dom';

export default function Navbar(){

    return(
        <>
          <section id="navbar">
    <div className='navbar-header'>
    <div className="navbar-items">
        <div>
        <img src={shieldLogo} className="navbar-logo" alt="logo" />
        </div>
        <div className='navbar-links'>

        <div className='flex-container'>
        
            <div className='flex-items'>
            <NavLink to="/" className={(navlink) => (navlink.isActive ? 'active' : null )} >
            HOME</NavLink>
            </div>
            <div className='flex-items'>
            {/* <a href='#TheJourney'>THEJOURNEY</a> */}
            <NavLink to="/thejourney" className={(navlink) => (navlink.isActive ? 'active' : null)}  >THEJOURNEY</NavLink>
            </div>
            <div className='flex-items'>
            {/* <a href='#Team'>TEAM</a> */}
            <NavLink to="/team"  className={(navlink) => (navlink.isActive ? 'active' : null )} >TEAM</NavLink>
            </div>
            <div className='flex-items'>
            <NavLink to="/store"  className={(navlink) => (navlink.isActive ? 'active' : null )} >STORE</NavLink>
            </div>
            <div className='flex-items'>
            <NavLink to="/contact"  className={(navlink) => (navlink.isActive ? 'active' : null )} >CONTACT</NavLink>
            </div>
        </div>
        </div>
        <div className='nav-flex-container'>
        <img src={profile} alt="profile" width="16px" />
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

