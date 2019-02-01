import React from 'react'
import classnames from 'classnames'

import { Neural } from '@components/Neural/Neural.jsx'

import whiteMenuItem from '@assets/menu-white.svg'
import card_1 from '@assets/card_1.png'
import card_2 from '@assets/card_2.png'
import card_3 from '@assets/card_3.png'
import rigthArrow from '@assets/right-arrow.svg'

export class Home extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      circlSize: 1,

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

  wheelHandler = (e) => {
    if (this.state.innerPageLock) {
      const html = document.getElementsByTagName('html')[0]
      html.classList.add('scroll-hidden')
    }

    if (this.state.horizontalScrolling && !this.state.innerPageLock) {
      e.preventDefault()
    }

    if (this.scrollSection.scrollLeft === 0 && (e.wheelDeltaY > 0)) {
      this.setState({ horizontalScrolling: false })
    }

    if (this.state.horizontalScrolling && !this.state.circlZooming) {
      this.scrollSection.scrollLeft -= e.wheelDeltaY
    }

    if (this.state.circlSize === 1 && (e.wheelDeltaY > 0)) {
      this.setState({
        circlZooming: false
      })
    }

    if (this.state.circlZooming && !this.state.innerPageLock) {
      const cs = this.state.circlSize - (e.wheelDeltaY / 120)
      this.setState({
        circlSize: Math.min(14, Math.max(cs, 1)),
        innerPageLock: cs >= 14
      })
    }
  }

  scrollHandler = (e) => {
    const el = e.target.scrollingElement;
    const scrollBottom = el.scrollHeight - el.clientHeight - el.scrollTop;

    const horizontalScrolling = (scrollBottom === 0)

    if (this.state.horizontalScrolling !== horizontalScrolling) {
      this.setState({ horizontalScrolling })
    }
  }

  horizontalScrollHandler = (e) => {
    const el = e.target;
    const scrollRight = el.scrollWidth - el.clientWidth - el.scrollLeft;

    const circlZooming = (scrollRight === 0)

    if (this.state.circlZooming !== circlZooming) {
      this.setState({ circlZooming })
    }
  }

  render(){
    return <div className="home" >
    <header className="header">
      <div>
        <span className="logo">borvo</span>
            <nav>
              <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </nav>
          <nav className="mobile none" id="mobile">
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
      </div>
        <img id="burger" src={whiteMenuItem}/>
      <button>Get in touch</button>
    </header>
    <section className="title">
      <p>
        Inspiring businesses to bring innovative ideas to life
      </p>
    </section>
    <section className="scroll-section" ref={ domel => this.scrollSection = domel }  >
        <div className="cards">
            <div className="card-home">
            <img src={card_1}/>
            <div>
              <span>01</span>
              <p>Professional Startup Solution</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow}/></a>
            </div>
          </div>
            <div className="card-home">
            <img src={card_2}/>
            <div>
              <span>02</span>
              <p>Improve and Support Your Product</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
            <div className="card-home">
            <img src={card_3}/>
            <div>
              <span>03</span>
              <p>UI/UX Engeniring</p>
              <small>Service <span>- Sturupe solution</span></small>
              <a className="arrow" href="#" ><img src={rigthArrow} /></a>
            </div>
          </div>
            <div className="borvo" ref={ domel => this.borvo = domel }  >
            <span>b</span>
            <div className="circle" style={{ clipPath: `circle(${(this.state.circlSize / 2 * 100)}% at 50% 50%)` }}>
              <Neural className={classnames({ "scroll-x": this.state.innerPageLock })}/>
            </div>
            <span className="rvo">rvo</span>
          </div>
        </div>
    </section>
  </div>
  }
}
