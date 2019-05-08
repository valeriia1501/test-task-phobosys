import React from 'react';

import '@styles/index.scss'

import GetInTouch from '@/components/GetInTouch'
import BurgerMobileMenu from '@/components/Header/BurgerMenu'

export default class Master extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <BurgerMobileMenu/>
        <GetInTouch />
        {this.props.children}
      </>
    )
  }
}
