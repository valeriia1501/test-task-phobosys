import React from 'react';

import {
    vacanciesArrowSvg,
    vacanciesMarker
} from '@/images&video'

import router from 'react-page-router';
import vacations from '@/data/vacations';

export default class VacanciesTopBlock extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        window.addEventListener('popstate', this.updateGetVation)
        this.updateGetVation({})
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.updateGetVation)
    }

    updateGetVation = (e) => {
        const match = /#!\/careers\/([^/]+)$/g.exec(window.location.hash)
        if (match && match[1]) {
            const vacation = vacations[match[1]]
            if (!vacation) router.page('#!/careers')
            this.setState({ vacation: vacation })
        }
    }

    render() {
        return !this.state.vacation ? null : 
        (
            <section className='top-block' >
                <div className='container' >
                    <a href='#!/careers' className='return' >
                        <img src={vacanciesArrowSvg} />
                        Return to all Vacancies
                    </a>
                    <h1>{this.state.vacation.title}</h1>
                    <div className='block' >
                        <img src={vacanciesMarker} />
                        <span className='location'>{this.state.vacation.location}</span>
                        <span className='position'>{this.state.vacation.position}</span>
                    </div>
                </div>
            </section>
        )
    }
}
