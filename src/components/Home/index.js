import React from 'react'

import Header from '@/components/Header'
import AI from '@/components/AI'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = { AIPhrase: this.getAIPhrase() }
  }

  getAIPhrase () {
    if (window.location.hash === '#!/services') {
      return 'We offer our services - long, expensive, very cool'
    }
    if (window.location.hash === '#!/' || window.location.hash === '#!') {
      return 'Inspiring businesses to bring innovative ideas to life'
    }
  }

  componentDidUpdate (props, state) {
    const AIPhrase = this.getAIPhrase()
    if (state.AIPhrase !== AIPhrase) this.setState({ AIPhrase })
  }

  render() {
    return (
      <div className="home" >
        <Header />
        <AI phrase={this.state.AIPhrase} />
        {this.props.children}
      </div>
    )
  }
}
