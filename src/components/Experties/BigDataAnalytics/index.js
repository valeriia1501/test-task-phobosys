import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {expertiesMainPhoto} from '@/images&video'
  
  export default class BigDataAnalytics extends React.PureComponent {
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
                <span>Big Data & Analytics</span>
                <p>
                  Transforming your raw technical data
                  into clear business information.
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
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/big-data-1-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Exploration, discovery, strategy & PoC</h1>
                        <p>
                          Define strategy for data governance, architecture & technology, 
                          preparation & analytics. Define and execute PoC use case(s) for 
                          validating/invalidating selected business hypotheses
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Data strategy Consulting</li>
                          <li>Data Discovery</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 2 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/big-data-3-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Collection, preparation, analysis & execution</h1>
                        <p>
                          Extract & transform data from specific sources,
                          load it into storage for querying and analysis. 
                          Determine how business problem can be solved with data. 
                          Collect data, design models, and gain insights
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Data Engineering</li>
                          <li>Data Preparation</li>
                          <li>Data Insights</li>
                          <li>Data Foresight</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 3 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/big-data-2-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Big Data Process</h1>
                        <p>
                          Define method of collecting, storing, extracting and organizing data 
                          (data architecture). Make discovered insights available to decision-makers 
                          in relevant format. Define concrete actions to impact specific behaviour or
                          results in the business domain
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Acquisition and Recording</li>
                          <li>Extraction, Cleaning and Annotation</li>
                          <li>Integration, Aggregation & Representation</li>
                          <li>Modeling and Analysis</li>
                          <li>Interpretation</li>
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
