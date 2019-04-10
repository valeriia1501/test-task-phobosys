import React from 'react'
import classnames from 'classnames'

import BurgerIcon from '@/components/BurgerIcon'
import GetInTouch from '@/components/GetInTouch'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShowPopUp: false,
      isShowMobileMenu: false
    }
  }

  toogleMobileMenu = () => {
    this.setState({
      isShowMobileMenu: !this.state.isShowMobileMenu
    })
  }

  tooglePopUp = () => {
    this.setState({
      isShowPopUp: !this.state.isShowPopUp
    })
  }

  render() {
    return (
      <header className={classnames(this.props.className, "header")}>
        <div className="header-container">
          <div>
            <a href="#!/">
              <span className="logo">borvo</span>
            </a>
            <nav>
              <ul>
                <li><a href="#!/services">Expertise</a></li>
                <li><a href="#!/about-us">About us</a></li>
                <li><a href="#!/careers">Careers</a></li>
                <li><a href="#!/contacts">Contact Us</a></li>
              </ul>
            </nav>
            <nav className={classnames('mobile', { 'show': this.state.isShowMobileMenu })}>
              <ul>
                <li><a href="#!/services">Expertise</a></li>
                <li><a href="#!/about-us">About us</a></li>
                <li><a href="#!/careers">Careers</a></li>
                <li><a href="#!/contacts">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <div onClick={this.toogleMobileMenu}>
            <BurgerIcon ref={el => this.burgerIconRef = el} />
          </div>
          <button onClick={this.tooglePopUp}>Get in touch</button>
        </div>
        <div className='line'></div>
        <GetInTouch
          isShowPopUp={this.state.isShowPopUp}
          closePopUp={this.tooglePopUp} />
      </header>
    )
  }
}
