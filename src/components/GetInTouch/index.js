import React from 'react'
import classnames from 'classnames'

import rootStore from '@/store/RootStore.js'

import { closeCross } from '@/images&video'

export default class GetInTouch extends React.PureComponent {
  constructor(props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.state = {
      isShowPopUp: rootStore.isOpen
    }
    rootStore.on(this.customTogglePopUp)
  }

  componentWillUnmount () {
    rootStore.off(this.customTogglePopUp)
  }

  customTogglePopUp = ({ isOpen }) => this.setState({ isShowPopUp: isOpen })

  close = () => {
    const isOpen = false
    rootStore.togglePopUp(isOpen)
  }

  render() {
    return (
      <section className={
        classnames(
          'pop-up',
          {
            'show': this.state.isShowPopUp,
            'hide': !this.state.isShowPopUp
          }
        )} ref={el => this.refSecttion = el}>
        <div className='pop-up-container' >
          <h1>Let's talk</h1>
          <div className='form-container' >
            <form >
              <div className='four-input'>
                <label>
                  <input type='text' placeholder='.' />
                  <span className='placeholder' data-end='*' >Full name</span>
                </label>
                <label>
                  <input type='text' placeholder='.' />
                  <span className='placeholder'>Company</span>
                </label>
                <label>
                  <input type='email' placeholder='.' />
                  <span className='placeholder'  data-end='*' >Email</span>
                </label>
                <label>
                  <input type='text' placeholder='.' />
                  <span className='placeholder'>Phone number</span>
                </label>
              </div>
              <div className='down-input' >
                <label>
                  <input type='text' placeholder='.' />
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
              <input type='checkbox' />
              <span>I want to receive news and updates once in a while</span>
            </label>
            <div className='btn-send'> Send message </div>
          </div>
        </div>
        <img className='close' src={closeCross} onClick={this.close} />
      </section>
    )
  }
}
