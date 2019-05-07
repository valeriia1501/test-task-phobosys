import React from 'react'
import router from 'react-page-router'

import Header from '@/components/Header'

import vacations from '@/data/vacations.json';
import currentRoute from '@/routing/currentRoute'

export default class VacancyDescription extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { vacationId: currentRoute.context.params.id }
        currentRoute.on(this.handleCustomEvent)
    }

    componentDidMount () {
        if(!vacations[this.state.vacationId]) router.page('#!/careers')
    }

    componentDidUpdate () {
        if(!vacations[this.state.vacationId]) router.page('#!/careers')
    }

    componentWillUnmount () { currentRoute.off(this.handleCustomEvent) }

    handleCustomEvent = (context) => {
        this.setState({ vacationId: context.params.id })
    }

    render() {
        const vacationInfo = vacations[this.state.vacationId]
        if (!vacationInfo) return null
        return (
            <section className='description' >
                <section className='white-theme' > 
                    <div className='container-header' >
                        <Header className='bg-neural' />
                    </div>
                </section>
                <div className='container' >
                    <div className='container-text'>
                        {vacationInfo.descriptions.map((description, idx) => 
                        (
                            <div
                                key={idx}
                                className='block' >
                                    <h1>{description.title}:</h1>
                                    <ul>
                                        {description.paragraphs.map((paragraph, idx) => <li key={idx}>{paragraph}</li>)}
                                    </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}
