import React from 'react';
import classnames from 'classnames'

import {closeCross} from '@/images&video'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.state = {
        
    }
  }
    componentDidMount(){
        this.close.addEventListener('click', this.closePopUp)
    }
    componentWillUnmount(){
        this.close.removeEventListener('click', this.closePopUp)
    }
    componentDidUpdate() {
      if(this.refSecttion.classList.contains('show')){
          this.html.classList.add('scroll-hidden')
      }
      if(this.refSecttion.classList.contains('hide')){
          this.html.classList.remove('scroll-hidden')        
      }
  }

  closePopUp = () => {
    this.refSecttion.classList.toggle('show')
  }
  render() {
    return (
      <section className={classnames('pop-up', { 'show': this.props.style, 'hide': !this.props.style })} ref={el => this.refSecttion = el}>
        <div className='pop-up-container' >
            <h1>Let's talk</h1>
            <div className='form-container' >
                <form >
                    <div className='four-input'>
                        <label>
                            <input type='text' placeholder='.' />
                            <span className='placeholder'>Full name*</span>    
                        </label> 
                        <label>
                            <input type='text' placeholder='.'/>   
                            <span className='placeholder'>Company</span>    
                        </label> 
                        <label>
                            <input type='email' placeholder='.'/>    
                            <span className='placeholder'>Email*</span>    
                        </label> 
                        <label>
                            <input type='text' placeholder='.'/>    
                            <span className='placeholder'>Phone number</span>                                
                        </label>    
                    </div> 
                    <div className='down-input' >
                        <label>
                            <input type='text' placeholder='.'/>
                            <span className='placeholder'>Email </span>
                            <div className='style-type-file' >
                                <label htmlFor='file-input'></label>
                                <input id='file-input' type='file' />
                            </div>
                        </label>
                    </div>
                </form>
            </div>
            <div className='footer' >
                <p>We will add your info to our CRM for contacting you regarding your request. For more info please consult our privacy policy</p>
                <label>
                    <input type='checkbox'/>
                    <span>I want to receive news and updates once in a while</span>
                </label>
                <div className='btn-send'> Send message </div>
            </div>
        </div>
        <img className='close' src={closeCross} ref={el => this.close = el} />
      </section>
    )
  }
}
