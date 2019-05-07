import React from 'react';

import '@styles/index.scss'

import GetInTouch from '@/components/GetInTouch'

export default class Master extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <>
        <GetInTouch />
        {this.props.children}
      </>
    )
  }
}
