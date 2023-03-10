import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import { BiTime } from 'react-icons/bi'
import { AiFillFolder } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'

export default function About() {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me--image">
                        <img src={ME} alt="it's me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BiTime className='about__icon' />
                            <h5>Experience</h5>
                            <small>1.5+ years of working experience</small>
                        </article>

                        <article className='about__card'>
                            <FaTools className='about__icon' />
                            <h5>Skills</h5>
                            <small>HTML5 CSS3 JavaScript Bootstrap React Redux Git  </small>
                        </article>

                        <article className='about__card'>
                            <AiFillFolder className='about__icon' />
                            <h5>Projects</h5>
                            <small>2 + completed</small>
                        </article>

                    </div>

                    <a href="#contact" className='btn btn-primary' style={{marginTop:"3rem"}}>Let's Talk</a>
                    
                </div>
            </div>
        </section>
    )
}
