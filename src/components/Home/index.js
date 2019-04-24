import React from 'react'

import classnames from 'classnames'

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
      opacityZero: false
    }
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
  componentDidMount(){
   try{
    VANTA.NET({
      el: "#vanta-net",
      color: 0x2979ff,
      backgroundColor: 0x0d0f1c,
      points: 6.00,
      maxDistance: 21.00,
      spacing: 12.00
    }) 
   } catch(e){
     console.log(e)
   }
  }
  
  hideWebGlElement = () => this.setState({ opacityZero: true })
  showWebGlElement = () => this.setState({ opacityZero: false }) 

  render() {
    const children = React.cloneElement(
      this.props.children.props.children, 
    { 
      hideWebGlElement: this.hideWebGlElement,
      showWebGlElement: this.showWebGlElement

    })
    return (
      <div className="home">
        <Header/>
        <section className='web-gl' >
          <div id='vanta-net' className={classnames({'add-opacity-zero': this.state.opacityZero})}/>
        </section>
        <AI phrase={this.state.AIPhrase} />
        {children}
      </div>
    )
  }
}
