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
          <div className='footer' >
            <div className='container'>
                <img  className='footer-logo' src={footerLogo}/>
                <div className='contacts' >
                    <h2>Contacts</h2>
                    <p>
                        1-800-385-1359 <br/>
                        info@borvo.com
                    </p>
                </div>
                <div className='cities' >
                    <div className='dublin'>
                        <h2>Dublin</h2>
                        <p className='address' >
                            1 Jervis St <br/> 
                            North City Dublin 1 D01 X337
                        </p>
                    </div>
                    <div className='los-angeles'>
                        <h2>Los Angeles</h2>
                        <p className='address' >
                            660 Alameda St <br/>
                            Los Angeles, CA 90021, USA
                        </p>
                    </div>
                    <div className='odessa'>
                        <h2>Odessa</h2>
                        <p className='address' >
                            172 Antonovycha St. <br/> 
                            Kyiv 03150, Ukraine,
                        </p>
                    </div>
                </div>
                <div className='company'>
                    <h2>Company</h2>
                    <ul className='list' >
                        <li>Home</li>
                        <li>Expertise</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className='expertise'>
                    <h2>Expertise</h2>
                    <ul className='list' >
                        <li>Application Development</li>
                        <li>Research & Development</li>
                        <li>Support services</li>
                        <li>Big Data & Analytics</li>
                        <li>QA & Software Testing</li>
                        <li>Internet of Things</li>
                    </ul>
                </div>
            </div>
          </div>
          <div className='bottom-page'>
            <div className='container' >
                <div className='social-network' >
                    <img src={fbIconFooter} />
                    <img src={inIconFooter} />
                </div>
                <span>© 2019 Borvo, All rights reserved</span>
            </div>
          </div>
      </footer>
    )
  }
}
