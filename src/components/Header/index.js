import React from 'react';

import classnames from 'classnames'

import BurgerIcon from '@/components/BurgerIcon'
import GetInTouch from '@/components/GetInTouch'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShowPopUp : false
    }
  }
  componentDidMount() {
    this.burgerIconRef.svgRef.addEventListener('click', this.handleClick)
    this.btnGetInTouch.addEventListener('click', this.showBlock)
  }
  componentWillUnmount() {
    this.burgerIconRef.svgRef.removeEventListener('click', this.handleClick)
    this.btnGetInTouch.removeEventListener('click', this.showBlock)    
  }
  handleClick = () => {
    console.log('show')
    this.mobileMenu.classList.toggle('show')
  }
  showBlock = () => {
    this.setState({
      isShowPopUp : !this.state.isShowPopUp
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
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </nav>
            <nav className="mobile" ref={el => this.mobileMenu = el}>
              <ul>
                <li><a href="#!/services">Expertise</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <BurgerIcon ref={el => this.burgerIconRef = el} />
          <button ref={el => this.btnGetInTouch = el}>Get in touch</button>
        </div>
        <div className='line'></div>
        <GetInTouch style={this.state.isShowPopUp} ref ={el => this.sectionPopUp = el} />
      </header>
    )
  }
}
