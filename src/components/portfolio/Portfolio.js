import React from 'react'
import './portfolio.css'
import img from '../../assets/NewsIQ.jpg'
import img2 from '../../assets/img.jpg'

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio--image">
                        <img src={img} alt="" />
                    </div>
                    <h3>NewsIQ</h3>
                    <p>Developed a news app that fetches news from an API with different categories to read from.
                        Implemented with HTML CSS Bootstrap JavaScript and ReactJS and deployed on github pages
                    </p>
                    <div className="portfolio__item--cta">
                        <a href="https://github.com/prashant6/newsapp" className='btn' target='_blank'>Github</a>
                        <a href="https://prashant6.github.io/newsapp/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio--image">
                        <img src={img2} alt="" />
                    </div>
                    <h3>ShopFreely</h3>
                    <p>Currently under development. Will be live soon</p>
                    <div className="portfolio__item--cta">
                        <a href="https://github.com/prashant6" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com/prashant6" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

            </div>
        </section>
    )
}
