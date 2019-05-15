import React from 'react'
import classnames from 'classnames'

import BurgerIcon from '@/components/BurgerIcon'
import LogoHeader from '@/components/LogoHeader'

import currentRoute from '@/routing/currentRoute'

import rootStore from '@/store/RootStore.js'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.state = {
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
      render: 0,
      currentUrl: currentRoute.context.canonicalPath
    }
    currentRoute.on(this.handleCustomEvent)
  }
  
  componentWillUnmount () { 
    currentRoute.off(this.handleCustomEvent)
  }

  showGetInTouch = () => {
    const isOpen = true
    rootStore.togglePopUp(isOpen)
  }

  showMobMenu = () => {
    rootStore.toggleMobMenu()
  }

  handleCustomEvent = (context) => this.setState({ currentUrl: context.canonicalPath  })

  isCurrentTab = (tabUrl) => this.state.currentUrl.includes(tabUrl)

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
      <header className={classnames(this.props.className, "header")}>
        <div className="header-container">
          <div>
            <a href="#!/">
              <span className="logo">borvo</span>
              <LogoHeader/>
            </a>
            <nav>
              {this.createTabs()}
            </nav>
          </div>
          <span className='render' >{this.state.render}</span>
          <div onClick={this.showMobMenu}>
            <BurgerIcon />
          </div>
          <button onClick={this.showGetInTouch}>Get in touch</button>
        </div>
      </header>
    )
  }
}
