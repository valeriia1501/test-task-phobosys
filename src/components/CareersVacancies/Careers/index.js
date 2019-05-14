import React from 'react';

import {
    svgFire,
} from '@/images&video'

import Header from '@/components/Header'

import vacations from '@/data/vacations.json';

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
            <section className='white-vacancies' >
                <section className='white-theme' > 
                    <div className='container-header' >
                        <Header className='bg-neural' />
                    </div>
                </section>
                <div className='container' >
                    {this.generateVacations()}
                </div>
            </section>
        </div>
        )
    }
}
