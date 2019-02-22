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
    this.clientWidth = document.body.clientWidth;
    this.state = {
      circlSize: 1,
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
      let mv = this.state.circlSize + this.normalizeDelta(e)
      this.setState({
        circlSize: Math.min(50, Math.max(cs, 1)),
        innerPageLock: cs >= 50,
        moveToLeft: Math.min(100, Math.max(mv, 1)) * 12
      })
    }

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
          <div className='card-home' style={{ 'transform': 'translateX(' + -this.state.moveToLeft + 'vh' + ')' }}>
            <img src={card_1} />
            <div>
              <span>01</span>
              <p>Professional Startup Solution</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className='card-home' style={{ 'transform': 'translateX(' + -this.state.moveToLeft + 'vh' + ')' }}>
            <img src={card_2} />
            <div>
              <span>02</span>
              <p>Improve and Support Your Product</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className='card-home' style={{ 'transform': 'translateX(' + -this.state.moveToLeft + 'vh' + ')' }}>
            <img src={card_3} />
            <div>
              <span>03</span>
              <p>UI/UX Engeniring</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className="borvo" ref={domel => this.borvo = domel}  >
          <div className='clip' >
            <Neural className={classnames({"scroll-hidden": !this.state.innerPageLock})} />
          </div>
          <span className="hide">{this.state.circlSize}</span>
          <svg x='0px' y='0px' viewBox='0 0 593.2 157.3'>
            <defs>
            <clipPath id='text-borvo' style={{ 'transform' : `scale(${this.state.circlSize})` }} >
                <path d='M0,154.5V0h35.7v55.8c8.8-11.1,20.8-16,33.1-16c28,0,49.3,22,49.3,58.6c0,38-21.8,58.8-49.3,58.8 c-12.5,0-23.9-5.1-33.1-15.8v13H0z M57,125.8c14.1,0,24.8-10.4,24.8-27.3c0-16.7-10.7-27.1-24.8-27.1c-7.6,0-16.9,4.2-21.3,10.2 v34.3C40.1,121.8,49.3,125.8,57,125.8z'/>
                <path d='M129.7,98.4c0-31.5,22.7-58.6,60.7-58.6c38.5,0,61.2,27.1,61.2,58.6c0,31.5-22.7,58.8-61.2,58.8 C152.4,157.3,129.7,130,129.7,98.4z M215,98.4c0-14.8-8.8-27.1-24.6-27.1c-15.3,0-24.1,12.3-24.1,27.1c0,15.1,8.8,27.3,24.1,27.3 C206.2,125.8,215,113.5,215,98.4z'/>
                <path d='M270.3,154.5V42.6H306v13.7c7.4-9,21.8-16.7,35-16.7v34.3c-2.1-0.7-5.1-0.9-8.8-0.9c-9.3,0-21.5,3.9-26.2,10.2 v71.3H270.3z'/>
                <path d='M385.9,154.5l-44-111.9h37.5l25.5,70.9l25.2-70.9h37.8l-44,111.9H385.9z'/>
                <path d='M471.4,98.4c0-31.5,22.7-58.6,60.7-58.6c38.5,0,61.2,27.1,61.2,58.6c0,31.5-22.7,58.8-61.2,58.8 C494.1,157.3,471.4,130,471.4,98.4z M556.6,98.4c0-14.8-8.8-27.1-24.6-27.1c-15.3,0-24.1,12.3-24.1,27.1c0,15.1,8.8,27.3,24.1,27.3 C547.8,125.8,556.6,113.5,556.6,98.4z'/>
            </clipPath>
            </defs>
            </svg>
          </div>
        </div>
      </section>
    )
  }
}
