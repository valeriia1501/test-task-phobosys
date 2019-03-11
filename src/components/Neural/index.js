import React from 'react';

import classnames from 'classnames'

import firstReviewVideo from '@assets/video.mp4'
import {
    blackArrow,
    kubernetes,
    javascriptImg,
    angular,
    blockchain,
    nodeImg,
    reactImg,
    tensorflow,
    imgVideo,
    downArrow,
    imgTemp
} from '@/images'

import Header from '@/components/Header'
import Works from '@/components/Works'

export default class Neural extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.state = {
            rotateArrow: 0
        }
    }

    componentDidMount() {
        this.html.scrollTop = 0;
        this.btnShow.addEventListener('click',this.showSection)
    }
    componentWillUnmount(){
        this.btnShow.removeEventListener('click',this.showSection)
    }
    showSection = () => {
        if(this.state.isHideAnimation){
            this.setState({ 
                isHideAnimation: false, 
                rotateArrow: 0,
                size: 1
            })
            this.toggleText.textContent = 'Show all Testimonials'
            return
        }

        this.setState({ 
            isHideAnimation: true,
            rotateArrow: 180,
            size: 0.9
        })
        this.toggleText.textContent = 'Hide all Testimonials'
        
    }

    render() {
        return <div className={classnames(this.props.className, 'neural')}>
            <Header className='white-page' />
            <Works />
            <section className='description-borvo'>
                <div className='description'>
                    <span>Your Dream Team</span>
                    <h1>Great Products <br/> Are Built By Great Engineers</h1>
                    <p>
                      Borvo company provides premium software engineering services to leading technology companies.
                      Our customers usually range from startup to high-growth and VC-backed companies that drive 
                      a culture of acceleration and innovation.
                    </p>
                    <button className='btn-learn-more'>To Learn More <img src={downArrow}/></button>
                </div>
                <img src={imgTemp} />
            </section>
            <section className={classnames('reviews-section',{'show-all': this.state.isHideAnimation})} >
                <div className='container'>
                    <div className='first-review'>
                        <div className='video-or-img'  >
                            <img src={imgTemp} style={{ transform: `scale(${this.state.size})` }} />
                            <button className='show-testimonials' ref={domel => this.btnShow = domel}>
                                <span ref={domel => this.toggleText = domel} >Show all Testimonials</span>
                                <img src={downArrow} style={{ transform: 'rotate(' + this.state.rotateArrow + 'deg' + ')' }} />
                            </button>
                        </div>
                        <div className='feedback-text' >
                            <blockquote>
                                “Bornfight is extremely easy to work with, 
                                allowing staff to focus on other work. The team 
                                accepts changes easily, communicates well, and is
                                flexible in terms of their approach.”
                            </blockquote>
                            <div className='name-position' >
                                <span className='name'>Michael Rodriguez</span>
                                <small className='position'>Executive Director, Camping Šimuni</small>
                            </div>
                        </div>
                    </div>
                    <div className='second-review '> {/* 2 */}
                        <div className='feedback-text' >
                            <blockquote>
                                “Bornfight is extremely easy to work with, 
                                allowing staff to focus on other work. The team 
                                accepts changes easily, communicates well, and is
                                flexible in terms of their approach.”
                            </blockquote>
                            <div className='name-position' >
                                <span className='name'>Michael Rodriguez</span>
                                <small className='position'>Executive Director, Camping Šimuni</small>
                            </div>
                        </div>
                        <div className='video-or-img'  >
                            <img src={imgTemp} />
                        </div>
                    </div>
                    <div className='third-review'> {/* 3 */}
                        <div className='video-or-img' >
                            <img src={imgTemp} />
                        </div>
                        <div className='feedback-text' >
                            <blockquote>
                                “Bornfight is extremely easy to work with, 
                                allowing staff to focus on other work. The team 
                                accepts changes easily, communicates well, and is
                                flexible in terms of their approach.”
                            </blockquote>
                            <div className='name-position' >
                                <span className='name'>Michael Rodriguez</span>
                                <small className='position'>Executive Director, Camping Šimuni</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='skills'>
                <div className='technology' >
                    <h1>We grow your business by using our technology expertise</h1>
                    <ul>
                        <li>Application Development</li>
                        <li>Research & Development</li>
                        <li>Big Data & Analytics</li>
                        <li>Support services</li>
                        <li>Internet of Things</li>
                        <li>QA & Software Testing</li>
                        <li>DevOps</li>
                        <li>Chatbot Development</li>
                    </ul>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <img src={javascriptImg} />
                        <span>Java Script</span>
                    </div>
                    <div className='card'>
                        <img src={reactImg} />
                        <span>React</span>
                    </div>
                    <div className='card'>
                        <img src={nodeImg} />
                        <span>Node js</span>
                    </div>
                    <div className='card'>
                        <img src={angular} />
                        <span>Angular</span>
                    </div>
                    <div className='card'>
                        <img src={blockchain} />
                        <span>Blockchain</span>
                    </div>
                    <div className='card'>
                        <img src={tensorflow} />
                        <span>Tensorflow</span>
                    </div>
                    <div className='card'>
                        <img src={kubernetes} />
                        <span>Kubernetes</span>
                    </div>
                </div>
            </section>
        </div>
    }
}

