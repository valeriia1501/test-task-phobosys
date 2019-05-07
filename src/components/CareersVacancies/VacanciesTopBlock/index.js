import React from 'react';

import {
    vacanciesArrowSvg,
    vacanciesMarker
} from '@/images&video'

import vacations from '@/data/vacations.json';

export default class VacanciesTopBlock extends React.PureComponent {
    render() {
        const vacationInfo = vacations[this.props.vacationId]
        if (!vacationInfo) return null
        return (
            <div className='container-vacancy ' >
                <a href='#!/careers' className='return' >
                    <img src={vacanciesArrowSvg} />
                    Return to all Vacancies
                </a>
                <h1>{vacationInfo.title}</h1>
                <div className='block' >
                    <img src={vacanciesMarker} />
                    <span className='location'>{vacationInfo.location}</span>
                    <span className='position'>{vacationInfo.position}</span>
                </div>
            </div>
        )
    }
}
