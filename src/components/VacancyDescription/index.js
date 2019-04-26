import React from 'react'

import vacancyDescription from '@/data/vacancyDescription';
import { throws } from 'assert';

export default class VacanciesTopBlock extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentWillMount() {
        this.updateGetVation({})   
    }

    updateGetVation = (e) => {
        const match = /#!\/careers\/([^/]+)$/g.exec(window.location.hash)

        console.log(match[1])

        if (match[1]) {
            const vac = vacancyDescription[match[1]]
            if (!vac) router.page('#!/careers')
            this.setState({ vac: vac })
        }
    }

    render() {
        const vacation = this.state.vac
        return (
            <section className='description' >
                <div className='container' >
                    <div className='container-text' >
                        <div className='about-client' >
                            <h1>About client:</h1>
                            <p>
                                Our Customer is a leading payment gateway provider
                                that provides multi-channel payment solutions, allowing
                                merchants to accept various local and international payments
                                through credit and debit cards, bank channels (ATMs, iBanking and mBanking)
                                and cash acceptance via payment counters.
                            </p>
                        </div>
                        {vacation.map((item, idx) => <div
                            key={idx}
                            className='block' >
                                <h1>{item.title}:</h1>
                                <ul>
                                    {item.elements.map((listElement, idx) => <li key={idx}>{ listElement }</li>)}
                                </ul>
                        </div>)}
                    </div>
                </div>
            </section>
        )
    }
}
