import React from 'react'

import classnames from 'classnames'

import swirl from '@/components/WebGlAnimation/swirl.js'

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

  componentDidMount () {
      // swirl('.content-canvas')
  }

  render() {
    return (
      <div className="home safari_only">
        <Header/>
        {/* <div ref={el => this.divForCanvas = el} className={classnames('content-canvas',{'add-opacity-zero': this.state.isHideWebGl})}> */}
          {/* <script type="x-shader/x-vertex" id="wrapVertexShader">
            {`#define PI 3.1415926535897932384626433832795
            attribute float size;
            void main() {
              vec4 mvPosition = modelViewMatrix * vec4( position, 3.0 );
              gl_PointSize = 2.0;
              gl_Position = projectionMatrix * mvPosition;
            }`}
          </script>
          <script type="x-shader/x-fragment" id="wrapFragmentShader">
            {`uniform sampler2D texture;
            void main(){
              vec4 textureColor = texture2D( texture, gl_PointCoord );
              if ( textureColor.a < 0.3 ) discard;
              vec4 dotColor = vec4(255, 255, 255, 0.4);
              vec4 color = dotColor * textureColor;
              gl_FragColor = color;
            }`}
          </script> */}
        {/* </div> */}
        <AI phrase={this.state.AIPhrase} />
        {this.props.children}
      </div>
    )
  }
}
