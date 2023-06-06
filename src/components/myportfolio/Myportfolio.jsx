import React from 'react'
import './myportfolio.css'
import img1 from '../../assets/image_1.jpg'
import img2 from '../../assets/image_2.jpg'
import img3 from '../../assets/image_3.jpg'
const Myportfolio = () => {
  return (
    <section id='myportfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
           <div className="portfolio__item-image">
           <img src={img1} alt="" />
           </div>

           <h3>projects worked on</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/NsemConfident" className='btn'>Github</a>
           <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> 
           
          </div>

        </article>
        <article className="portfolio__item">
           <div className="portfolio__item-image">
           <img src={img2} alt="" />
           </div>

           <h3>projects worked on</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/NsemConfident" className='btn'>Github</a>
           <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> 
           
          </div>

        </article>
        <article className="portfolio__item">
           <div className="portfolio__item-image">
           <img src={img3} alt="" />
           </div>

           <h3>projects worked on </h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/NsemConfident" className='btn'>Github</a>
           <a href="https:dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> 
           
          </div>

        </article>
      </div>
      </section>
  )
}

export default Myportfolio