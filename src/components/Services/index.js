import React from 'react';

import {
    card_1,
    card_2,
    card_3,
   } from '@/images&video'

export default class Services extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.remove('scroll-hidden')
        this.html.scrollTop = 0
        document.body.scrollTop = 0 // for safari
    }
    componentDidMount(){
        this.html.addEventListener('wheel', this.normalizeSpeedScroll) 
        //this.cardServices.addEventListener('click', this.routeExperties)
    }
    componentWillUnmount(){
        this.html.removeEventListener('wheel', this.normalizeSpeedScroll) 
        //this.cardServices.removeEventListener('click', this.routeExperties)
    }
    routeExperties = () => {
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
                    <a href={"#!/experties" + '/ApplicationDevelopment'} className="card-services" ref={el => this.card = el}>
                        <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/service-9.jpg'} />
                        <span>Application development</span>
                    </a>
                    <a href={"#!/experties" + '/ResearchDevelopment'} className="card-services">
                        <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/r-n-d.jpg'} />
                        <span>Research & Development</span>
                    </a>
                    <a href={"#!/experties" + '/BigDataAnalytics'} className="card-services">
                        <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/service-7.jpg'} />
                        <span>Big Data & Analytics</span>
                    </a>
                    <a href={"#!/experties" + '/SoftwareTesting'} className="card-services">
                        <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/service-11.jpg'} />
                        <span>QA & Software Testing</span>
                    </a>
                </div>
            </section>
        )
    }
}
