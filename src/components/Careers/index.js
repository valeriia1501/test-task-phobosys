import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { careersTopPhoto } from '@/images&video'

import {
    svgFire,
} from '@/images&video'

export default class Careers extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.add('scroll-x-hidden')
    }
    render() {
        return (
        <div className='careers' >
            <Header className='bg-black' />
            <section className='top-page' >
                <div className='container' >
                    <div className='text' >
                        <h1>Inspiring brilliant minds to innovate & create</h1>
                        <p>
                            In Borvo, we create an environment and atmosphere that 
                            stimulates not only professional but also personal growth.
                            Everything is designed for your initiatives to grow up from
                            an idea to a smooth realisation within the community
                        </p>
                    </div>
                </div>
            </section>
            <section className='white-vacancies' >
                <div className='container' >
                    <div className='card-vacancy'>
                        <div className='location'>
                            <img src={svgFire} />
                            <span>Odessa, Ukraine</span>
                        </div>
                        <p>Node.js Developer for Evrythng</p>
                        <small>Software Engineering</small>
                    </div>
                    <div className='card-vacancy'>
                        <div className='location'>
                            <img src={svgFire} />
                            <span>Odessa, Ukraine</span>
                        </div>
                        <p>Senior Full Stack .NET Developer for Optimal+</p>
                        <small>Software Engineering</small>
                    </div>
                    <div className='card-vacancy'>
                        <div className='location'>
                            <img src={svgFire} />
                            <span>Odessa, Ukraine</span>
                        </div>
                        <p>Back End Node.js Developer for Thomas Cook (Malaga)</p>
                        <small>Software Engineering</small>
                    </div>
                    <div className='card-vacancy'>
                        <div className='location'>
                            <img src={svgFire} />
                            <span>Odessa, Ukraine</span>
                        </div>
                        <p>Functional Lead (SAP Transport Management) for Rockwool (Wroclaw)</p>
                        <small>Software Engineering</small>
                    </div>
                    <div className='card-vacancy'>
                        <div className='location'>
                            <img src={svgFire} />
                            <span>Odessa, Ukraine</span>
                        </div>
                        <p>Node.js Developer for Evrythng</p>
                        <small>Software Engineering</small>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        )
    }
}
