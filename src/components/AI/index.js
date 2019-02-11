import React from 'react'

export default class AI extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { phrase: props.phrase || 'Hi', typeSpeed: 50, deleteSpeed: 10 }
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
      <section className='AI'>
      <div className="pulsatingCircle">    
        <span className="firstCircle"></span>
        <span className="secondCircle"></span>
        <span className="thirdCircle"></span>
      </div>
        <p>
          {this.state.phrase}
        </p>
      </section>
    )
  }
}