import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {expertiesMainPhoto} from '@/images&video'
  
  export default class SoftwareTesting extends React.PureComponent {
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
                <span>QA & Software Testing</span>
                <p>
                  Deliver a better product, shorten your time-to-market while
                  maintaining your customer confidence with Software Testing Services by Ciklum
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
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/qa-3.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Manual QA</h1>
                        <p>
                          We play the role of the end-user, 
                          testing product features to ensure they behave as designed
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Test Strategy Preparation</li>
                          <li>Functional Manual Testing</li>
                          <li>Test Design</li>
                          <li>Web, Mobile application Testing</li>
                          <li>Cross-browser, cross-platform, UI and localization Testing</li>
                          <li>Integration Testing</li>
                          <li>Smoke, Regression Testing</li>
                          <li>QA Education Services</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 2 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/qa-2.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>QA Automation</h1>
                        <p>
                          Optimise and simplify routine testing with a minimum set of scripts
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Automation Testing</li>
                          <li>Review of Existing Automation Framework and Process</li>
                          <li>Proof-of-Concept</li>
                          <li>Automation Services for Web Apps/Mobile Apps/API Testing</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 3 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/qa-1.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Security QA</h1>
                        <p>
                          Ensure that your software product can resist malicious attacks
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Penetration Testing of PCI DSS Compliance audit scope</li>
                          <li>Source Code Analysis</li>
                          <li>Secure SDLC Implementation</li>
                          <li>Security Education for QA Engineers and/or Developers</li>
                          <li>Infrastructure Security Testing</li>
                          <li>Web Services / API Security Testing</li>
                          <li>Social Engineering Attacks Security Testing</li>
                        </ul>
                      </div>
                    </div>
                </div>
                <div className='content' > {/* 4 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/bitmap4-min.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>Performance QA</h1>
                        <p>
                          Ensure that your web or mobile apps can both achieve and maintain peak performance
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>Assisting in defining target NFR: types, sources, conditions, values</li>
                          <li>Consulting on setup/improvement of Performance Framework and Process</li>
                          <li>Proof-of-Concept for possibility of Performance/Load Framework Implementation</li>
                          <li>Performance Testing Education</li>
                          <li>Initial Cycle of Load Testing Services</li>
                          <li>Performance/Capacity/Stress/Endurance/Volume Testing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                <div className='content' > {/* 5 */}
                    <div>
                      <img src={'https://cdn-prod.azureedge.net/uploads/2018/07/bitmap3-min.jpg'} />
                    </div>
                    <div className='text-block'>
                      <div className='text-up' >
                        <h1>QA Consulting</h1>
                        <p>
                          Bring your QA strategy into line with the industry standards and increase team productivity
                        </p>
                      </div>
                      <div className='text-down'>
                        <h1>What we do</h1>
                        <ul>
                          <li>QA Audit</li>
                          <li>Identification of areas for improvement</li>
                          <li>Roadmap for implementation with priorities</li>
                          <li>QA consulting</li>
                          <li>QA Manager as a Service to manage client’s quality assurance processes and testing specialists</li>
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
