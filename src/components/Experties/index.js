import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {expertiesMainPhoto} from '@/images&video'
  
  export default class Experties extends React.PureComponent {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      this.html = document.getElementsByTagName('html')[0]
      this.html.classList.remove('scroll-hidden')
      this.html.classList.add('scroll-x-hidden')
    }
    render() {
    return (
    <div className='services-provided' >
        <Header/>
          <section className='application' >
            <div className='application-container' >
              <div>
                <span>Application <br/> development</span>
                <p>Support your business operations with a custom application.</p>
              </div>
              <img src={expertiesMainPhoto} />
            </div>
          </section>
          <section className='about-applications'>
              <div className='container' > 
                <div className='content' >
                    <img src={expertiesMainPhoto} />
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>UX/UI Design for an eye-opening user experience</h1>
                        <p>
                          We use a human-centered approach to creating transformative,
                          digital experiences that solve the most complex business challenges.
                          We use a human-centered approach to creating transformative, digital
                          experiences that solve the most complex business challenges.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Research and strategy</li>
                          <li>Visual UI design and interaction</li>
                          <li>Prototyping</li>
                          <li>Testing and improvements</li>
                          <li>Development of e-Commerce</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' >
                    <img src={expertiesMainPhoto} />
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>UX/UI Design for an eye-opening user experience</h1>
                        <p>
                          We use a human-centered approach to creating transformative,
                          digital experiences that solve the most complex business challenges.
                          We use a human-centered approach to creating transformative, digital
                          experiences that solve the most complex business challenges.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Research and strategy</li>
                          <li>Visual UI design and interaction</li>
                          <li>Prototyping</li>
                          <li>Testing and improvements</li>
                          <li>Development of e-Commerce</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' >
                    <img src={expertiesMainPhoto} />
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>UX/UI Design for an eye-opening user experience</h1>
                        <p>
                          We use a human-centered approach to creating transformative,
                          digital experiences that solve the most complex business challenges.
                          We use a human-centered approach to creating transformative, digital
                          experiences that solve the most complex business challenges.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Research and strategy</li>
                          <li>Visual UI design and interaction</li>
                          <li>Prototyping</li>
                          <li>Testing and improvements</li>
                          <li>Development of e-Commerce</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' >
                    <img src={expertiesMainPhoto} />
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>UX/UI Design for an eye-opening user experience</h1>
                        <p>
                          We use a human-centered approach to creating transformative,
                          digital experiences that solve the most complex business challenges.
                          We use a human-centered approach to creating transformative, digital
                          experiences that solve the most complex business challenges.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Research and strategy</li>
                          <li>Visual UI design and interaction</li>
                          <li>Prototyping</li>
                          <li>Testing and improvements</li>
                          <li>Development of e-Commerce</li>
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
          </section>
        <Footer/>
     </div>
    )
  }
}
