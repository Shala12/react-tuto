import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/pio_1.jpeg'
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
    return ( 
    <header id='home'>
        <div className = 'container header__container'>
        <h5> HI ITS ME!!!! </h5> 
        <h1 > KONGNSO PIO SHALANYUY  </h1> 
        <h5 className = 'text-light'> Software Engineer </h5> <CTA/>
        <HeaderSocial/>
        <div className = 'my_image' >
        <img src = { me } alt = 'myself'/>
        </div> <a href = '#contact'className = 'scroll__down' > Scroll down </a> 
        </div> 
        </header>
    )
}
export default Header;