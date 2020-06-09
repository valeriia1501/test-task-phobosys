import React from 'react';

import { closeCross } from '@/images&video'

import classnames from 'classnames'

import currentRoute from '@/routing/currentRoute'
import rootStore from '@/store/RootStore.js'

export default class MobileBurgerMenu extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
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
                // {
                //     name: 'Neural',
                //     link: '#!/neural'
                // }
            ],
            currentUrl: currentRoute.context.canonicalPath,
            ...rootStore.getState()
        }
        currentRoute.on(this.handleCustomEvent)
        rootStore.on(this.customTogglePopUp)
    }

    componentWillUnmount () {
        rootStore.off(this.customTogglePopUp)
        currentRoute.off(this.handleCustomEvent)
    }

    handleCustomEvent = (context) =>
      this.setState({ currentUrl: context.canonicalPath })

    isCurrentTab = (tabUrl) => this.state.currentUrl.includes(tabUrl)

    createTabs() {
      return <ul>
        { this.state.tabs.map((tab, idx) => {
            const { link, name } = tab
            return <li key={idx}>
              <a href={link} className={classnames({'current-link': this.isCurrentTab(link) })} >
                {name}
              </a>
            </li>
          })
        }
      </ul>
    }

    close = () => {
        rootStore.toggleMobMenu()
    }

    showGetInTouch = () => {
        const isOpen = true
        rootStore.togglePopUp(isOpen)
    }

    customTogglePopUp = ({ isShowMobileMenu }) =>
      this.setState({ isShowMobileMenu })

    render() {
        return (
            <nav className={classnames(
                'mobile', {
                  'show-menu': this.state.isShowMobileMenu,
                  'hide-menu': !this.state.isShowMobileMenu
                })}>
                <img className='close' src={closeCross} onClick={this.close} />
                {this.createTabs()}
                <div
                  onClick={this.showGetInTouch}
                  className='get-in-touch-mobile'
                >
                    Get in touch
                </div>
            </nav>
        )
    }
}
