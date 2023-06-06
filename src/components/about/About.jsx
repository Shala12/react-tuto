import React from 'react'
import './about.css'
import ME from '../../assets/pio_1.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
    return ( 
    <section id='about'>
         <h5>Get to know</h5>
         <h2>About me</h2>
         <div className="container about__container">
         <div className="about__me">
         <div className="about__me-image">
         <img src={ME} alt='about me'/>
         </div>

         </div>


         <div className="about__content">
         <div className="about__cards">

            <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience </h5>
            <small>5+ years Working </small>
            </article>

            <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients </h5>
            <small>20o+ Worldwide </small>
            </article>

            <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
            <h5>projects </h5>
            <small>157+ Completed</small>
            </article>

         </div>
         <p>
         <b>Kongnso Pio Shalanyuy</b>.
         is incredable web Developer and a cool software Enthusiast, with 5years of <br />
         Experience, Kongnso pio have gained wonderful experience in the field of software <br />
         and will always want to provide his client with services that fits their expectations. <br />
         <h5>WITH KONGNSO PION customer satisfaction is always his main aim</h5>

         </p>

         <a href='#contact' className='btn btn-primary'> Let's talk</a>

         </div>
         </div>
         
    </section>
    )
}

export default about