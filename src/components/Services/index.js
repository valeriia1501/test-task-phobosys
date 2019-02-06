import React from 'react';

import { card_3 } from '@/images'

import Header from '@/components/Header'

export default class Services extends React.PureComponent {
    render() {
        return (
            <div className="services home" >
                <Header />
                <section className="title">
                    <p>We offer our services - long, expensive, very cool</p>
                </section>
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
            </div>
        )
    }
}
