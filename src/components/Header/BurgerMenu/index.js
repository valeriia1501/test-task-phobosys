import React from 'react';

import { closeCross } from '@/images&video'

import classnames from 'classnames'

import currentRoute from '@/routing/currentRoute'
import rootStore from '@/store/RootStore.js'

export default class MobileBurgerMenu extends React.PureComponent {
    constructor(props){
        super(props)        
        rootStore.on(this.customTogglePopUp)
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
                },
                {
                    name: 'Neural',
                    link: '#!/neural'
                }
            ],
            currentUrl: currentRoute.context.canonicalPath
        }
        currentRoute.on(this.handleCustomEvent)
    }

    handleCustomEvent = () => {

    }

    componentWillUnmount () { 
        currentRoute.off(this.handleCustomEvent)
    }

    handleCustomEvent = (context) => this.setState({ currentUrl: context.canonicalPath  })

    isCurrentTab = (tabUrl) => this.state.currentUrl.includes(tabUrl)

    createTabs() {
        return <ul>
          {
            this.state.tabs.map((tab, idx) => {
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

    componentWillUnmount () {
        rootStore.off(this.customTogglePopUp)
    }

    close = () => {
        rootStore.toggleMobMenu()
    }

    showGetInTouch = () => {
        const isOpen = true
        rootStore.togglePopUp(isOpen)
    }

    customTogglePopUp = ({isShowMobMenu}) => this.setState({ isShowMobMenu: rootStore._state.isShowMobMenu })

    render() {
        return (
            <nav className={classnames('mobile', { 
                'show-menu': rootStore._state.isShowMobMenu, 
                'hide-menu': !rootStore._state.isShowMobMenu 
                })}>
                <img className='close' src={closeCross} onClick={this.close} />                
                {this.createTabs()}
                <div onClick={this.showGetInTouch} className='get-in-touch-mobile' >Get in touch</div>
            </nav>
        )
    }
}
