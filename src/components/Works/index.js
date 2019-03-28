import React from 'react';

import classnames from 'classnames'

import ArrowSvg from '@components/ArrowSvg'

import {
    videoNeuralNetwork,
    videoflyFirst
} from '@/images&video'


export default class Works extends React.PureComponent {
  constructor(props) {
      super(props)
      this.html = document.getElementsByTagName('html')[0]
      this.clientWidth = document.body.clientWidth;
      this.state = {
        isHideText: false
      }
  }

  componentDidMount() {
    if(this.clientWidth <= 1024) {
        this.setState({isHideText: true})
        return
     }
     
      this.html.addEventListener('wheel', this.wheelNeural)

      if(window.location.href.includes('neural') && !this.state.isScrolling) {
        let moment = +localStorage.getItem('moment of scroll')
        let fixText = localStorage.getItem('fix text') 
        JSON.parse(fixText)

        this.scrollWorks.scrollLeft = moment 
        this.setState({ isHideText: fixText })
      }

      if (this.html.scrollTop === 0 && window.location.href.includes('neural')) {
            this.html.classList.add('scroll-hidden')
      } 
  }
  componentWillUnmount() {
      this.html.removeEventListener('wheel', this.wheelNeural)
      localStorage.clear()
  }

  scrollLeft = el => el.scrollWidth - el.clientWidth - el.scrollLeft

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

  wheelNeural = (e) => {
      if(this.clientWidth <= 1024) {
         this.setState({isHideText: true})
         return
      }
      if(!window.location.href.includes('neural')) return

      const isMac = navigator.platform.match(/(Mac)/i)?true:false;
      const isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
      if(isMac && !isSafari){
        if(!this.html.classList.contains('scroll-hidden') && (this.html.scrollTop > 0)) {
            e.preventDefault() 
            const scrollingStep = (this.html.scrollHeight - this.html.clientHeight) / 70
            this.html.scrollTop += this.normalizeDelta(e) * scrollingStep
          }
      } // normalize speed scroll macOS
      
        
        if(
            this.html.scrollTop === 0 &&
            this.normalizeDelta(e) < 0 && 
            !this.html.classList.contains("scroll-hidden") 
            ) {
            this.html.classList.add('scroll-hidden')
        } 

        if(this.html.classList.contains('scroll-hidden')) {
            this.setState({ 
                isScrolling: true, 
                isHideText : true
            })
        }
        if(this.state.isHideText){
            localStorage.setItem('fix text', true ) 
        }

        if(this.state.isScrolling) {
            const scrollingStep = (this.scrollWorks.scrollWidth - this.scrollWorks.clientWidth) / 20
            this.scrollWorks.scrollLeft += this.normalizeDelta(e) * scrollingStep;          
            localStorage.clear()
        }

        if(this.scrollLeft(this.scrollWorks) === 0) {
            this.setState({ isScrolling: !this.state.isScrolling })
            localStorage.setItem('moment of scroll' ,this.scrollWorks.scrollLeft)
        }

        if(this.html.classList.contains('scroll-hidden') && !this.state.isScrolling ){
            this.html.classList.remove('scroll-hidden')
        }
    }
  render() {
    return ( 
        <section className="works" ref={ el => this.scrollWorks = el }>
            <div className="works-container">
                <div className='content' >
                    <video autoPlay loop muted>
                        <source src={videoNeuralNetwork} />
                    </video>             
                </div>
                <div className={classnames('text-about-work',{'appearance-of-text': this.state.isHideText})}>
                    <span>Emazing Project</span>
                    <h1>Neural networks working with Twitter </h1>
                    <p>It is a long established facte that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                    <div>
                        <a href="#">
                            Learn more
                            <span><ArrowSvg className='arrow'/></span>
                        </a>
                    </div>
                </div>
                <div className='content'>
                    <video autoPlay loop muted>
                        <source src={videoflyFirst} />
                    </video>             
                </div>
                <div className='text-about-work appearance-of-text'>
                    <span>Emazing Project</span>
                    <h1>Fly First </h1>
                    <p>It is a long established facte that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                    <div>
                        <a href="#">
                            Learn more
                            <span><ArrowSvg className='arrow'/></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
