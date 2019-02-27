import React from 'react'
import classnames from 'classnames'

import Neural from '@components/Neural'

import router from 'react-page-router'

import {
 card_1,
 card_2,
 card_3,
 rigthArrow
} from '@/images'
import { throws } from 'assert';

export default class ExpertiesCarousel extends React.PureComponent {

  constructor(props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    this.clientWidth = document.body.clientWidth;
    this.state = {
      circlSize: 1,
      zoomStyle: {
        'zoom' : 1
      },
      zoomStyleFireFox:{
        'transform': `scale(1)`
      }
    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  componentDidMount() {
    window.addEventListener('wheel', this.wheelHandler)
    window.addEventListener('scroll', this.scrollHandler)
    this.scrollSection.addEventListener('scroll', this.horizontalScrollHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.wheelHandler)
    window.removeEventListener('scroll', this.scrollHandler)
    this.scrollSection.removeEventListener('scroll', this.horizontalScrollHandler)
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

  scrollBottom = el => el.scrollHeight - el.clientHeight - el.scrollTop
  scrollLeft = el => el.scrollWidth - el.clientWidth - el.scrollLeft

  wheelHandler = (e) => {
    if(this.clientWidth <= 768) return
    if (this.state.innerPageLock) {
      router.page('/neural')
      this.html.classList.remove('scroll-hidden')
      return
    }
    
    if (
      this.state.verticalScrollLock &&
      this.scrollSection.scrollLeft === 0 &&
      (e.deltaY < 0)
    ) {
      this.html.classList.remove('scroll-hidden')
      this.setState({ verticalScrollLock: false })
    } 

    if (
      !this.state.verticalScrollLock &&
      this.scrollBottom(this.html) === 0 &&
      this.scrollSection.scrollLeft === 0 &&
      (e.deltaY > 0)
    ) {
      this.html.classList.add('scroll-hidden')
      this.setState({ verticalScrollLock: true })    
    }

    if (this.state.verticalScrollLock && !this.state.circlZooming) {
      const scrollingStep = (this.scrollSection.scrollWidth - this.scrollSection.clientWidth) / 30
      this.scrollSection.scrollLeft += this.normalizeDelta(e) * scrollingStep
    }

    if (this.state.circlZooming) {
      if (this.state.circlSize === 1 && (e.deltaY < 0)) {
        this.setState({ circlZooming: false })
        
      }
      
      
      let cs = this.state.circlSize * (this.normalizeDelta(e) / 5 + 1) 
      const circlSize = Math.min(50, Math.max(cs, 1))

      

      if(this.isFirefox){
        this.setState({
          zoomStyleFireFox:{
          'transform': `scale(${circlSize})`
          }
        })
      }

      this.setState({
        circlSize: circlSize,
        zoomStyle: {
          'zoom' : circlSize
        },
        innerPageLock: cs >= 50,
      })
    }
    
    this.setState({
      dynamicStyle : this.isFirefox ? this.state.zoomStyleFireFox : this.state.zoomStyle
    })

    if (
      !this.state.circlZooming &&
      this.scrollLeft(this.scrollSection) === 0 &&
      this.state.circlSize === 1 &&
      (e.deltaY > 0)
    ) {
      this.setState({ circlZooming: true })
    }
  }

  scrollHandler = (e) => {
    if(this.clientWidth <= 768) return
    const el = e.target.scrollingElement;    
    const verticalScrollLock = (this.scrollBottom(el) === 0)

    if (!this.state.verticalScrollLock && verticalScrollLock) {
      this.html.classList.add('scroll-hidden')
      this.setState({ verticalScrollLock })
    }
  }

  horizontalScrollHandler = (e) => {
    if(this.clientWidth <= 768) return
    const el = e.target;
    const circlZooming = (this.scrollLeft(el) === 0)

    if (!this.state.circlZooming && circlZooming) {
      this.setState({ circlZooming })
    }
  }

  render() {
    return (
      <section className="scroll-section" ref={el => this.scrollSection = el}>
        <div className="cards">
          <div className='card-home'>
            <img src={card_1} />
            <div>
              <span>01</span>
              <p>Professional Startup Solution</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className='card-home'>
            <img src={card_2} />
            <div>
              <span>02</span>
              <p>Improve and Support Your Product</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className='card-home'>
            <img src={card_3} />
            <div>
              <span>03</span>
              <p>UI/UX Engeniring</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className="borvo" ref={domel => this.borvo = domel}  >
            <Neural className={classnames({"scroll-hidden": !this.state.innerPageLock})} />
           <div className='svg-container'  style={ this.state.dynamicStyle }>
              <svg width="775.8px" height="366.2px" >
                <g>
                  <path d="M0,0v366.2h775.8V0H0z M181.7,240.3c-4.8,9.7-11.6,17.2-20.4,22.5c-8.8,5.3-19,8-30.6,8 c-8,0-15.2-1.5-21.7-4.6c-6.5-3-12-7.5-16.5-13.2v16.4H50.9V95.5h41.7V159c9.2-11.9,21.6-17.8,37.3-17.8c11.7,0,22,2.7,30.9,8.1c8.9,5.4,15.8,13,20.7,23c4.9,9.9,7.4,21.4,7.4,34.3C188.9,219.3,186.5,230.6,181.7,240.3z M329.9,239.9 c-5.8,9.8-13.9,17.3-24.4,22.7c-10.5,5.4-22.6,8.1-36.3,8.1c-13.7,0-25.9-2.7-36.3-8.1c-10.5-5.4-18.5-13-24.2-22.7c-5.7-9.8-8.6-21.1-8.6-34.1c0-12.8,2.8-24.1,8.6-33.9c5.7-9.8,13.8-17.3,24.2-22.7c10.5-5.4,22.6-8.1,36.3-8.1 c13.7,0,25.8,2.7,36.3,8.1c10.5,5.4,18.6,13,24.4,22.7c5.8,9.8,8.7,21,8.7,33.9C338.6,218.8,335.7,230.2,329.9,239.9z M442.4,179.1c-1.4-0.2-3.5-0.2-6.3-0.2c-9.8,0-17.8,2.3-23.9,6.9c-6.1,4.6-9.6,10.9-10.5,18.9v64.7h-41.7V142.6h41.7v21.1c4.4-7.3,10-13,17-16.9c6.9-3.9,14.9-5.9,23.8-5.9V179.1z M496.3,269.3l-47.3-126.8h42.9l26.5,88.1l26.7-88.1h41.7l-47.6,126.8H496.3z M716.3,239.9c-5.8,9.8-13.9,17.3-24.4,22.7c-10.5,5.4-22.6,8.1-36.3,8.1c-13.7,0-25.9-2.7-36.3-8.1c-10.5-5.4-18.5-13-24.2-22.7c-5.7-9.8-8.6-21.1-8.6-34.1c0-12.8,2.8-24.1,8.6-33.9c5.7-9.8,13.8-17.3,24.2-22.7c10.5-5.4,22.6-8.1,36.3-8.1c13.7,0,25.8,2.7,36.3,8.1c10.5,5.4,18.6,13,24.4,22.7c5.8,9.8,8.7,21,8.7,33.9C724.9,218.8,722,230.2,716.3,239.9z"/>
                  <path d="M655.6,174.9c-8.1,0-14.7,2.9-19.7,8.7c-5,5.8-7.5,13.4-7.5,22.7c0,9.5,2.5,17.2,7.5,23c5,5.8,11.6,8.7,19.7,8.7c8.3,0,14.9-2.9,19.9-8.7c5-5.8,7.5-13.4,7.5-23c0-9.4-2.5-16.9-7.6-22.7C670.3,177.8,663.7,174.9,655.6,174.9z"/>
                  <path d="M119.5,174c-8,0-14.4,2.9-19.4,8.8c-5,5.9-7.5,13.5-7.5,22.8c0,9.4,2.5,16.9,7.5,22.7c5,5.8,11.5,8.7,19.4,8.7c8.1,0,14.7-2.9,19.8-8.7c5.1-5.8,7.6-13.4,7.6-22.7c0-9.4-2.5-17-7.6-22.8C134.2,176.9,127.6,174,119.5,174z"/>
                  <path d="M269.2,174.9c-8.1,0-14.7,2.9-19.7,8.7c-5,5.8-7.5,13.4-7.5,22.7c0,9.5,2.5,17.2,7.5,23c5,5.8,11.6,8.7,19.7,8.7c8.3,0,14.9-2.9,19.9-8.7c5-5.8,7.5-13.4,7.5-23c0-9.4-2.5-16.9-7.6-22.7C284,177.8,277.4,174.9,269.2,174.9z"/>
                </g>
              </svg>
           </div>
          </div>
        </div>
      </section>
    )
  }
}
