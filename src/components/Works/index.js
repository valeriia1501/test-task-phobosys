import React from 'react';

import ArrowSvg from '@components/ArrowSvg'
import { videoNeuralNetwork } from '@/images&video'

import Header from '@/components/Header'

import classnames from 'classnames'
import currentRoute from '@/routing/currentRoute'

export default class Works extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.clientWidth = document.body.clientWidth;
        this.state =  { 
            isShow: false,
            isHideBlueBlock: !(currentRoute.routepath === '/neural') ? false : JSON.parse(localStorage.getItem('hideBlue')),
            displayNone: false,
            isFixed: currentRoute.context.routepath === '/neural'            
         }
        currentRoute.on(this.handleCustomEvent)
    }

    componentDidMount() {
        this.html.addEventListener('wheel', this.wheelNeural)
        localStorage.setItem('hideBlue',true)
        if(currentRoute.routepath === '/neural') { 
            this.setState({        
                isShow: true, 
                isHideBlueBlock: true
            })
            setTimeout(() => this.setState({ displayNone: 'none' }), 1000)  
        } else localStorage.clear()
    }

    componentWillUnmount() {
        this.html.removeEventListener('wheel', this.wheelNeural)
        currentRoute.off(this.handleCustomEvent)
    }

    handleCustomEvent = () => {}

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
            <section className='black-theme'> 
                <div className={classnames({'container-header': this.state.isFixed})} >
                    <Header className='bg-neural' />
                </div>
            </section>
            <div className={classnames('blue-block', {'hide-blue-block': this.state.isHideBlueBlock})} style={{'display': this.state.displayNone}} ></div>
                <div className="works-container">
                    <div className='content' >
                        <video autoPlay loop muted >
                            <source src={videoNeuralNetwork} type="video/mp4" />
                        </video>
                    </div>
                    <div className='bg-gradient'>
                        <div className={classnames('text-about-work', { 'show-animation-neural': this.state.isShow })}  >
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
