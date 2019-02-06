import React from 'react';

import '@styles/index.scss'

export default class Master extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
