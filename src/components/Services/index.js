import React from 'react';

import { card_3 } from '@/images&video'

export default class Services extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.remove('scroll-hidden')
    }
    componentDidMount(){
        this.html.addEventListener('wheel', this.normalizeSpeedScroll) 
    }
    componentWillUnmount(){
        this.html.removeEventListener('wheel', this.normalizeSpeedScroll) 
    }
    normalizeDelta (e) {
        const FireFoxWheelMod = 3
        const ChromeOperaWheelMod = 53

        let normDeltaY = 0
        if (!(e.deltaY % FireFoxWheelMod)) {
            normDeltaY = e.deltaY / FireFoxWheelMod * 2
        } else if (!(e.deltaY % ChromeOperaWheelMod)) {
            normDeltaY = e.deltaY / ChromeOperaWheelMod * 2
        }
        const direction = e.deltaY / Math.abs(e.deltaY);
        return (Math.min(3, Math.max(Math.abs(normDeltaY), 1)) * direction) || e.deltaY
    }

    normalizeSpeedScroll = (e) => {
        const isMac = navigator.platform.match(/(Mac)/i)?true:false;
        const isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    
        if(isMac && !isSafari){
            e.preventDefault() 
            this.html.scrollTop += this.normalizeDelta(e) * 40
        }

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
