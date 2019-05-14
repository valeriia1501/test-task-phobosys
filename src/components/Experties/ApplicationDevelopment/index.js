import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {expertiesMainPhoto} from '@/images&video'
  
  export default class ApplicationDevelopment extends React.PureComponent {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
      this.html = document.getElementsByTagName('html')[0]
      this.html.classList.remove('scroll-hidden')
      this.html.classList.add('scroll-x-hidden')
      this.html.scrollTop = 0
      document.body.scrollTop = 0 // for safari
    }

    handleCustomEvent = () => {}

render() {
  return (
    <div className='services-provided' >
          <section className='application' >
            <section className='black-theme' > 
                <div className='container-header' >
                    <Header className='bg-neural' />
                </div>
            </section>
            <div className='application-container' >
              <div>
                <span>Application development</span>
                <p>Support your business operations with a custom application.</p>
              </div>
              <img src={expertiesMainPhoto} />
            </div>
          </section>
          <section className='about-applications'>
              <section className='white-theme' > 
                  <div className='container-header' >
                      <Header className='bg-neural' />
                  </div>
              </section>
              <div className='container' > 
                <div className='content' > {/* 1 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/app-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>UX/UI Design for an eye-opening user experience</h1>
                        <p>
                          We use a human-centered approach to creating transformative, digital experiences that solve the most complex business challenges.
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
                <div className='content' > {/* 2 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/app-2.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>eCommerce solutions & digital commerce platforms</h1>
                        <p>
                          We empower retailers and brands with the best eCommerce platforms and flexible cloud solutions to rapidly innovate and grow.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Development of e-Commerce online stores</li>
                          <li>Audit of e-Commerce online stores</li>
                          <li>Store migration to Magento 2 platform</li>
                          <li>Integrations with 3-rd party systems</li>
                          <li>Continuous integration and Continuous deployment</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 3 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/app-3.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Enterprise software, ERP and CRM solutions</h1>
                        <p>
                          With solid project experience, world-class skills and proven competencies, 
                          our core engineers consistently deliver innovative products and solutions 
                          that achieve results for clients.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>REST API Development</li>
                          <li>Design and Build Microservices with reliable messaging</li>
                          <li>High load systems</li>
                          <li>Continuous integration and Continuous deployment</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 4 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/app-4.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Mobile apps for iOS and Android</h1>
                        <p>
                          Our team uses the best practices in modern mobile development,
                          up-to-date and innovative approaches, techniques and architectures 
                          that allow us to build beautiful and user-friendly apps.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Native or cross-platform mobile application development</li>
                          <li>MVP development</li>
                          <li>Complex development with 3-party integrations</li>
                          <li>Applications with Augmented Reality features</li>
                          <li>Apps with wearables and smart home products integration</li>
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
