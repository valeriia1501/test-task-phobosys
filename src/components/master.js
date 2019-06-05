import React from 'react';

import '@styles/index.scss'


import swirl from '@/components/WebGlAnimation/swirl.js'

import classnames from 'classnames'

import rootStore from '@/store/RootStore.js'
import currentRoute from '@/routing/currentRoute'

import GetInTouch from '@/components/GetInTouch'
import BurgerMobileMenu from '@/components/Header/BurgerMenu'

export default class Master extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      opacitySwirl: true,
    }
    currentRoute.on(this.handleRouteChange)
    rootStore.on(this.handleCustomEvent)
  }

  componentDidMount () {
    swirl('.content-canvas')
    this.setState({ opacitySwirl: false })
    this.handleRouteChange()
  }

  componentWillUnmount () {
    currentRoute.off(this.handleRouteChange)
    rootStore.off(this.handleCustomEvent)
  }

  handleCustomEvent = () => {
    this.setState({ ...rootStore.getState() }) 
  }

  handleRouteChange = () => {
    const isSwirlAnimationShow = ['/', '/services'].indexOf(currentRoute.context.routepath) !== -1 
    if(isSwirlAnimationShow) {
      this.setState({ opacitySwirl: false })
      setTimeout(() => { this.setState({ toggleDisplay: ''  }) }, 200)
    } else {
      this.setState({ opacitySwirl: true })
      setTimeout(() => { this.setState({ toggleDisplay: 'none'  }) }, 200)
    }
  }

  render() {
    return (
      <>
        <BurgerMobileMenu/>
        <GetInTouch />
        <div className={
          classnames(
            'content-canvas', 
            {'opacity-swirl': this.state.opacitySwirl},
            {'add-opacity-zero' : this.state.isHideWebGl}
            )} 
            style={{ "display": this.state.toggleDisplay }}></div>
        {this.props.children}
      </>
    )
  }
}
