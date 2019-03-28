import React from 'react';

import classnames from 'classnames'
import BurgerIcon from '@/components/BurgerIcon'


export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.setState = {};
  }
  componentDidMount() {
    this.burgerIconRef.svgRef.addEventListener('click', this.handleClick)
  }
  componentWillUnmount() {
    this.burgerIconRef.svgRef.removeEventListener('click', this.handleClick)
  }
  handleClick = () => {
    this.mobileMenu.classList.toggle('show')
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
          <button>Get in touch</button>
        </div>
        <div className='line'></div>
      </header>
    )
  }
}
