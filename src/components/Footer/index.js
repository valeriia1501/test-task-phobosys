import React from 'react';

import {
    inIconFooter,
    fbIconFooter,
    footerLogo,
} from '@/images&video'

export default class Footer extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
          <div className='container'>
            <div className='logo-container'>
                <img  className='footer-logo' src={footerLogo}/>
                <span>© 2019 Borvo, All rights reserved</span>
            </div>
            <div className='odessa'>
                <h2>Odessa</h2>
                <p className='address' >
                    172 Antonovycha St. <br/> 
                    Kyiv 03150, Ukraine,
                </p>
                <div className='social-network' >
                    <img src={fbIconFooter} />
                    <img src={inIconFooter} />
                </div>
            </div>
            <div className='dublin'>
                <h2>Dublin</h2>
                <p className='address' >
                    172 Antonovycha St. <br/> 
                    Kyiv 03150, Ukraine,
                </p>
            </div>
            <div className='expertise'>
                <h2>Expertise</h2>
                <ul className='expertise-list' >
                    <li>Application Development</li>
                    <li>Research & Development</li>
                    <li>Support services</li>
                    <li>Big Data & Analytics</li>
                    <li>QA & Software Testing</li>
                    <li>Internet of Things</li>
                </ul>
            </div>
            <div className='company'>
                <h2>Company</h2>
                <ul className='company-list' >
                    <li>Home</li>
                    <li>Expertise</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Contacts</li>
                </ul>
            </div>
          </div>
      </footer>
    )
  }
}
