import React from 'react';

import ArrowSvg from '@components/ArrowSvg'
import { videoNeuralNetwork } from '@/images&video'

import classnames from 'classnames'
import events from '@/events'
import { CHANGE_ROUTE } from '@/constants'

export default class Works extends React.Component {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.clientWidth = document.body.clientWidth;
        this.state = {
            isHideText: false
        }
        events.addEventListener(CHANGE_ROUTE, this.handleEvent)
    }

    componentDidMount() {
        this.html.addEventListener('wheel', this.wheelNeural)
        this.handleEvent;
    }

    componentWillUnmount() {
        this.html.removeEventListener('wheel', this.wheelNeural)
        events.removeEventListener(CHANGE_ROUTE, this.handleEvent)
    }

    handleEvent = (eventData) => {
        if(eventData.routepath === '/neural') {
            this.setState({ isHideText: true })            
        }
    }

    normalizeDelta(e) {
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

    wheelNeural = (e) => {
        if (!window.location.href.includes('neural')) return

        const isMac = navigator.platform.match(/(Mac)/i) ? true : false;
        const isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1

        if (isMac && !isSafari) {
            e.preventDefault()
            const scrollingStep = (this.html.scrollHeight - this.html.clientHeight) / 70
            this.html.scrollTop += this.normalizeDelta(e) * scrollingStep
        } // normalize speed scroll macOS
    }
    render() {
        return (
            <section className="works" ref={el => this.scrollWorks = el}>
                <div className="works-container">
                    <div className='content' >
                        <video autoPlay loop muted preload='true' >
                            <source src={videoNeuralNetwork} type="video/webm" />
                            <source src={videoNeuralNetwork} type="video/mp4" />
                        </video>
                    </div>
                    <div className='bg-gradient'>
                        <div className={classnames('text-about-work', { 'show-animation-neural': this.state.isHideText })} >
                            <div className='project' >Project</div>
                            <h1  >Neural networks working with Twitter </h1>
                            <div>
                                <a href="#">
                                    Project details
                                    <span><ArrowSvg className='arrow' /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
