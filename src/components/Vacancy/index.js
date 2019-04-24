import React from 'react';

import VacanciesTopBlock from '@/components/VacanciesTopBlock'
import VacancyDescription from '@/components/VacancyDescription'


export default class Vacancies extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.add('scroll-x-hidden')
        this.state = {}
        document.body.scrollTop = 0 // for safari
        this.html.scrollTop = 0
    }

    render() {
        return (
        <div className='vacancies' >
            <VacanciesTopBlock />
            <VacancyDescription/>
        </div>
        )
    }
}
