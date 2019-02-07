import React from 'react'

import Header from '@/components/Header'

export default class Home extends React.PureComponent {
  render() {
    return (
    <div className="home" >
      <Header />
      <section className="title">
        <p>
          Inspiring businesses to bring innovative ideas to life
        </p>
      </section>
      {this.props.children}
    </div>
    )
  }
}
