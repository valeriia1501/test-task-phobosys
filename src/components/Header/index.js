import React from 'react'
import classnames from 'classnames'

import BurgerIcon from '@/components/BurgerIcon'
import GetInTouch from '@/components/GetInTouch'
import LogoHeader from '@/components/LogoHeader'

import currentRoute from '@/routing/currentRoute'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isShowPopUp: false,
      isShowMobileMenu: false,
      isExpertise: false,
      isAbout: false,
      isCareers: false,
      isContacts: false,
      tabs: [
        {
          name: 'Expertise',
          link: '#!/services'
        },
        {
          name: 'About us',
          link: '#!/about-us'
        },
        {
          name: 'Careers',
          link: '#!/careers'
        },
        {
          name: 'Contacts',
          link: '#!/contacts'
        }
      ],
    }
    currentRoute.on(this.handleCustomEvent)
    
  }

  componentWillUnmount () { currentRoute.off(this.handleCustomEvent) }
  
  handleCustomEvent = () => this.setState({ currentUrl: currentRoute.context.state.path  }) 

  toogleMobileMenu = () => this.setState({ isShowMobileMenu: !this.state.isShowMobileMenu })

  tooglePopUp = () => this.setState({ isShowPopUp: !this.state.isShowPopUp })

  isCurrentTab = (tabUrl) => currentRoute.context.state.path.includes(tabUrl)

  createTabs() {
    return <ul>
      {
        this.state.tabs.map((tab, idx) => {
          const { link, name } = tab
          return <li key={idx}>
            <a href={link}>
              {name}
              <span className={classnames('bottom-link-header', { 'show': this.isCurrentTab(link) })} />
            </a>
          </li>
        })
      }
    </ul>
  }

  render() {
    return (
      <header className={classnames(this.props.className, "header")}  style={{'overflow': 'visible'}}>
        <div className="header-container">
          <div>
            <a href="#!/">
              <span className="logo">borvo</span>
              <LogoHeader/>
            </a>
            <nav>
              {this.createTabs()}
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
