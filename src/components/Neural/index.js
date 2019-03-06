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
        return <div className={classnames(this.props.className, "neural")}>
            <Header className="white-page" />
            <Works />
            <section className={classnames('reviews-section',{'show-all': this.state.isHideAnimation})} >
                <div className='container'>
                    <div className='first-review'>
                        <div className='video-or-img' style={{ transform: `scale(${this.state.size})` }} >
                            <img src={imgTemp} />
                        </div>
                        <div className='feedback-text' >
                            <button className='show-testimonials' ref={domel => this.btnShow = domel}>
                                <span ref={domel => this.toggleText = domel} >Show all Testimonials</span>
                                <img src={downArrow} style={{ transform: 'rotate(' + this.state.rotateArrow + 'deg' + ')' }} />
                            </button>
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
            <section className="skills">
                <div>
                    <h1>Skills to mention</h1>
                    <p>Chase your dream by day and unwind with your favorite show at night.</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={javascriptImg} alt="" />
                        <span>Java Script</span>
                    </div>
                    <div className="card">
                        <img src={reactImg} alt="" />
                        <span>React</span>
                    </div>
                    <div className="card">
                        <img src={nodeImg} alt="" />
                        <span>Node js</span>
                    </div>
                    <div className="card">
                        <img src={angular} alt="" />
                        <span>Angular</span>
                    </div>
                    <div className="card">
                        <img src={blockchain} alt="" />
                        <span>Blockchain</span>
                    </div>
                    <div className="card">
                        <img src={tensorflow} alt="" />
                        <span>Tensorflow</span>
                    </div>
                    <div className="card">
                        <img src={kubernetes} alt="" />
                        <span>Kubernetes</span>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="software">
                        <span>Software Development</span>
                        <ul>
                            <li>Сloud computing</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Machine learning</li>
                            <li>JS App Development</li>
                            <li>HTML/CSS</li>
                            <li>Data science</li>
                            <li>Сloud computing</li>
                            <li>Docker</li>
                            <li>Micro services</li>
                            <li>JS app development</li>
                        </ul>
                    </div>
                    <div className="ua-ux">
                        <span>UA/UX/Marketing</span>
                        <ul>
                            <li>UA/UX</li>
                            <li>Analytics Analysis</li>
                            <li>Usability & Customer Experience</li>
                            <li>Machine learning</li>
                            <li>Content Creation</li>
                            <li>Evolutionary Testing</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    }
}

