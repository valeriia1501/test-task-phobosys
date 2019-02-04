import * as React from 'react';

import card_3 from '@assets/card_3.png'

export class Services extends React.Component {
    render() {
        return (
            <div className="services home" >
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