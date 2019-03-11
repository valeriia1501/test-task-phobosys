import React from 'react';

import { card_3 } from '@/images'

export default class Services extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.remove('scroll-hidden')
    }
    render() {
        return (
            <section className="section-services" >
                <div className="cards-services">
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                    <div className="card-services">
                        <img src={card_3} />
                        <span>UX</span>
                    </div>
                </div>
            </section>
        )
    }
}
