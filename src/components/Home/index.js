import React from 'react'

import rootStore from '@/store/RootStore.js'

import Header from '@/components/Header'
import AI from '@/components/AI'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.html.classList.remove('scroll-hidden')
    this.html.classList.add('scroll-x-hidden')
    this.state = { 
      AIPhrase: this.getAIPhrase(),
    }
  
    rootStore.on(this.handleCustomEvent)
  }

  handleCustomEvent = () => {
   this.setState({ ...rootStore.getState() }) 
  }

  componentWillUnmount = () => {
    rootStore.off(this.handleCustomEvent)
  }

  getAIPhrase () {
    if (window.location.hash === '#!/services') {
      return 'We offer our services - long, expensive, very cool'
    }
    if (window.location.hash === '#!/') {
      return 'Inspiring businesses to bring innovative ideas to life'
    }
  }

  componentDidUpdate (props, state) {
    const AIPhrase = this.getAIPhrase()
    if (state.AIPhrase !== AIPhrase) this.setState({ AIPhrase })
  }

  render() {
    return (
      <div className="home safari_only">
        <Header/>
        <AI phrase={this.state.AIPhrase} />
        {this.props.children}
      </div>
    )
  }
}
