import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {expertiesMainPhoto} from '@/images&video'
  
  export default class ResearchDevelopment extends React.PureComponent {
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
                <span>Research & Development</span>
                <p>
                  Innovation is crucial to survival. But Innovation is inherently risky.
                  Ciklum R&D experts will cut your risk dramatically by examining the technical feasibility, 
                  marketability and scalability of your new product.
                </p>
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
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/img-9117-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Internet of Things</h1>
                        <p>
                          Accelerate time to market by drawing on our solid expertise in industrial design,
                          UX, and IoT engineering. Ciklum has Global IoT Practice in Silicon Valley and hi-tech 
                          development centres in Eastern Europe.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Experience Design</li>
                          <li>System Design</li>
                          <li>Hardware Prototyping</li>
                          <li>IoT Platforms Development</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 2 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/img-9235-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Artificial Intelligence and Deep Learning</h1>
                        <p>
                          Merge the advantages of the human brain and the computer processor. 
                          We will help you use past experiences and data to provide insight and 
                          automate complex processes for your business.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Deep Learning, Machine Learning</li>
                          <li>Image & Video Processing</li>
                          <li>Time Series processing</li>
                          <li>Natural Language Processing</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 3 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/block.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Blockchain Development</h1>
                        <p>
                          Ciklum experts will assist you with the Blockchain technology
                          to automate the financial processes saving millions of dollars,
                          and to digitize both the paperwork and the approval processes,
                          making the supply chain process more transparent and efficient.
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Smart contracts</li>
                          <li>Supply chains</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 4 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/img-9351-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Emerging Technologies</h1>
                        <p>
                          Ciklum experts will support you in providing better customer experience with online chatbots, 
                          in switching to edge computing to review data and respond to it in real-time, and in optimizing 
                          the production processes with the help of smart robots
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Commercial UAVs (drones)</li>
                          <li>Virtual Assistants (bots)</li>
                          <li>Edge Computing</li>
                          <li>Smart Robots</li>
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
