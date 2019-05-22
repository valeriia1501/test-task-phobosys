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
      opacitySwirl: true
    }
    currentRoute.on(this.handleRouteChange)
    rootStore.on(this.handleCustomEvent)
  }

  componentDidMount () {
    swirl('.content-canvas')
    this.setState({ opacitySwirl: false })
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
    } else {
      this.setState({ opacitySwirl: true })
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

          )} ></div>
        {this.props.children}
      </>
    )
  }
}
