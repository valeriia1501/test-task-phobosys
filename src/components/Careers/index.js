import React from 'react';

import {
    svgFire,
} from '@/images&video'

import vacations from '@/data/vacations';

export default class Careers extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.add('scroll-x-hidden')
        document.body.scrollTop = 0 // for safari
        this.html.scrollTop = 0
    }

    generateVacations () {
        const vacEls = []
        for (let vid in vacations) {
            const vac = vacations[vid]
            vacEls.push(
                <a key={vid} href={'#!/careers/' + vid} className='card-vacancy'>
                    <div className='location'>
                        <img src={svgFire} />
                        <span>{vac.location}</span>
                    </div>
                    <p>{vac.title}</p>
                    <small>{vac.position}</small>
                </a>
            )
        }
        return vacEls
    }

    render() {
        return (
        <div className='careers' >
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
                    {this.generateVacations()}
                </div>
            </section>
        </div>
        )
    }
}
