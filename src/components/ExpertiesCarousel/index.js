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

export default class ExpertiesCarousel extends React.PureComponent {

  constructor(props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.previousScroll = 0;
    this.state = {
      circlSize: 1
    }
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

      const cs = this.state.circlSize + this.normalizeDelta(e)
      this.setState({
        circlSize: Math.min(14, Math.max(cs, 1)),
        innerPageLock: cs >= 14
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
    const el = e.target.scrollingElement;
    
    const verticalScrollLock = (this.scrollBottom(el) === 0)

    if (!this.state.verticalScrollLock && verticalScrollLock) {
      this.html.classList.add('scroll-hidden')
      this.setState({ verticalScrollLock })
    }
  }

  horizontalScrollHandler = (e) => {
    const el = e.target;
    const scrollRight = el.scrollWidth - el.clientWidth - el.scrollLeft;

    const circlZooming = (scrollRight === 0)

    if (!this.state.circlZooming && circlZooming) {
      this.setState({ circlZooming })
    }
  }

  render() {
    return (
      <section className="scroll-section" ref={el => this.scrollSection = el}>
        <div className="cards">
          <div className="card-home">
            <img src={card_1} />
            <div>
              <span>01</span>
              <p>Professional Startup Solution</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className="card-home">
            <img src={card_2} />
            <div>
              <span>02</span>
              <p>Improve and Support Your Product</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className="card-home">
            <img src={card_3} />
            <div>
              <span>03</span>
              <p>UI/UX Engeniring</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
          <div className="borvo" ref={domel => this.borvo = domel}  >
            <span>b</span>
            <div className="circle" style={{ 
                clipPath: `circle(${(this.state.circlSize / 2 * 100)}% at 50% 50%)`,
                WebkitClipPath: `circle(${(this.state.circlSize / 2 * 100)}% at 50% 50%)`
              }}
            >
              <Neural className={classnames({ "scroll-hidden": !this.state.innerPageLock })} />
            </div>
            <span className="rvo">rvo</span>
          </div>
        </div>
      </section>
    )
  }
}
