import React from 'react'

import classnames from 'classnames'
import rootStore from '@/store/RootStore.js'

export default class AI extends React.PureComponent {
  constructor (props) {
    super(props)
    this.startPhrase = 'Inspiring businesses to bring innovative ideas to life'
    this.state = { 
      phrase: props.phrase || this.startPhrase,
      typeSpeed: 50, deleteSpeed: 10,

    }
    rootStore.on(this.handleCustomEvent)
  }

  handleCustomEvent = () => {
    this.setState({ ...rootStore.getState() }) 
  }

  componentWillUnmount () {
    rootStore.off(this.handleCustomEvent)
  }

  typing = (phrase) => {
    clearInterval(this.state.interval)
    let idx = 0
    const interval = setInterval(
      () => {
        this.setState({ phrase: this.state.phrase + phrase[idx++] })
        if (idx === phrase.length) clearInterval(interval)
      }, 
      this.state.typeSpeed
    ) 
    this.setState({ interval: interval, phrase: phrase[idx++] })
  }

  retype = (phrase) => {
    clearInterval(this.state.interval)
    const interval = setInterval(
      () => {
        if (this.state.phrase.length < 2) {
          clearInterval(interval)
          return this.typing(phrase)
        }
        this.setState({ phrase: this.state.phrase.substr(0, this.state.phrase.length - 1) })
      }, 
      this.state.deleteSpeed
    )
    this.setState({ interval: interval })
  }

  componentWillReceiveProps (props) {
    if (props.phrase !== this.props.phrase && props.phrase) {
      this.retype(props.phrase)
    }
  }

  render() {
    return (
    <section className={classnames('AI', {'fade-up-ai': this.state.isHideAi})}>
      <div className='AI-container' >
        <div className="pulsatingCircle">    
          <span className="firstCircle"></span>
          <span className="secondCircle"></span>
          <span className="thirdCircle"></span>
        </div>
          <p>
            {this.state.phrase}
          </p>
      </div>
      </section>
    )
  }
}