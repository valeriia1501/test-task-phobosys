import React from 'react';

import VacancyDescription from '@/components/CareersVacancies/Vacancy/VacancyDescription'

export default class Vacancies extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.add('scroll-x-hidden')
        document.body.scrollTop = 0 // for safari
        this.html.scrollTop = 0
    }

    render() {
        return (
        <div className='vacancies' >
            <VacancyDescription/>
        </div>
        )
    }
}
