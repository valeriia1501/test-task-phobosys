import React from 'react';

import classnames from 'classnames'

import {
blackArrow,
tempVideo
} from '@/images'

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
    if(this.clientWidth <= 768) {
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

      if (window.performance && window.location.href.includes('neural')) {
        if (performance.navigation.type === 1 && this.html.scrollTop === 0) {
            this.html.classList.add('scroll-hidden')
        }
      } 
  }
  componentWillUnmount() {
      if(!window.location.href.includes('neural')) {}

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
     if(this.clientWidth <= 768) {
         this.setState({isHideText: true})
         console.log(this.state)
         return
      }
      
      if(!window.location.href.includes('neural')) return

      if(this.html.scrollTop === 0 && this.normalizeDelta(e) < 0 ) this.html.classList.add('scroll-hidden')
      
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
          const scrollingStep = (this.scrollWorks.scrollWidth - this.scrollWorks.clientWidth) / 50
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
                    <video>
                            <source src={tempVideo} />
                    </video>             
                </div>
                <div className={classnames('text-about-work',{'appearance-of-text': this.state.isHideText})}>
                    <span>Emazing Project</span>
                    <h1>Neural networks working with Twitter </h1>
                    <p>It is a long established facte that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                    <div>
                        <a href="#">
                            Learn more
                            <span><img className="arrow" src={blackArrow} /></span>
                        </a>
                    </div>
                </div>
                <div className='content' >
                    <video>
                            <source src={tempVideo} />
                    </video>             
                </div>
                <div className='text-about-work appearance-of-text' ref={ el => this.test = el }>
                    <span>Emazing Project</span>
                    <h1>Neural networks working with Twitter </h1>
                    <p>It is a long established facte that a reader will be distracted by the readable <br /> content of a page when looking at its layout.</p>
                    <div>
                        <a href="#">
                            Learn more
                            <span><img className="arrow" src={blackArrow} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
