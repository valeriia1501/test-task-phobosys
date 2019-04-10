import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import {
    person_1,
    person_2,
    person_3,
    person_4
} from '@/images&video'

export default class AboutUs extends React.PureComponent {
  constructor(props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.html.classList.add('scroll-x-hidden')
  }
  render() {
    return (
      <div className='about-us' >
          <Header className='bg-about-us' />
          <section className='bg-photo' >
            <div className='text-gradient'>
                <div className='text'>
                    <p>CRM veterans with over 2 years of experience in the market</p>
                    <small>We provide expert software engineering and consultancy services to help businesses adopt technology transformations.</small>
                </div>
            </div>
          </section>
          <section className='three-columns' >
                <div className='container-columns' >
                    <div className='column'>
                        <span>Corporate Social</span>
                        <p>
                            Borvo, we strive to make the world a better place.
                            Our Corporate Social Responsibility program ensures 
                            a sustainable future for our associates, our company,
                            and the communities in which we live and work across the globe.
                        </p>
                    </div>
                    <div className='column'>
                        <span>Borvo University</span>
                        <p>
                            Borvo University offers a wide range of IT-related specialties,
                            from software development, testing, and quality control, to project 
                            management and business analysis. We combine different learning formats
                            to ensure we meet the needs of our students.
                        </p>
                    </div>
                    <div className='column'>
                        <span>Leadership</span>
                        <p>
                            SoftServe’s leadership marries skill, experience, and strategy.
                            Boasting a team of diverse backgrounds and areas of expertise,
                            our leadership comes together to consistently deliver results
                            for our clients.
                        </p>
                    </div>
                </div>
          </section>
          <section className='white-text-section'>
                <div className='container'>
                    <h1>Borvo – A Globally Trusted Partner for Digital Transformation</h1>
                    <div className='two-columns' >
                        <p>
                            Providing end-to-end digital services and consulting, 
                            Infopulse brings in over 28 years of IT expertise to
                            enable the success of our clients in 30 countries worldwide.<br/>
                            We align the customers’ business objectives with the most suitable 
                            technology strategy to drive their smooth journey to digital transformation.
                        </p>
                        <p>
                            By harnessing the power of AI, AR/VR, Big Data, Blockchain, Cloud, Data Science,
                            IoT, and other emerging technologies, we create a myriad of opportunities for
                            customers to innovate and achieve scalability, increased efficiency, and operational 
                            agility.
                        </p>
                    </div>
                </div>
          </section>
          <section className='leadership' >
            <div className='container' >
                <h1>Leadership team</h1>
                <div className='team' >
                    <div className='person' >
                        <img src={person_1}/>
                        <div className='name-position' >
                            <span>Misha Radja Dev</span>
                            <small>CEO</small>
                        </div>
                    </div>
                    <div className='person' >
                        <img src={person_2}/>
                        <div className='name-position' >
                            <span>Misha Radja Dev</span>
                            <small>Chief Sales & Marketing Officer</small>
                        </div>
                    </div>
                    <div className='person' >
                        <img src={person_3}/>
                        <div className='name-position' >
                            <span>Misha Radja Dev</span>
                            <small>Chief Sales & Marketing Officer</small>
                        </div>
                    </div>
                    <div className='person' >
                        <img src={person_4}/>
                        <div className='name-position' >
                            <span>Misha Radja Dev</span>
                            <small>Chief Sales & Marketing Officer</small>
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
