import React from 'react';

import classnames from 'classnames'
import currentRoute from '@/routing/currentRoute'

import {
    kubernetes,
    javascriptImg,
    angular,
    blockchain,
    nodeImg,
    reactImg,
    tensorflow,
    downArrow,
    svgFire,
    reviewImage
} from '@/images&video'

import vacations from '@/data/vacations.json';

import Header from '@/components/Header'
import Works from '@/components/Works'
import Footer from '@/components/Footer'

export default class Neural extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.add('scroll-x-hidden')
        this.html.classList.remove('scroll-hidden')
        this.state = {
            rotateArrow: 0,
            isFixed: currentRoute.context.routepath === '/neural'
        }
        currentRoute.on(this.handleCustomEvent)
    }

    componentDidMount() {
        this.html.scrollTop = 0;
        this.btnShow.addEventListener('click', this.showSection)
    }

    handleCustomEvent = (context) => {
        this.setState({ isFixed: context.routepath === '/neural' })
    }

    componentWillUnmount() { 
        currentRoute.off(this.handleCustomEvent)
        this.btnShow.removeEventListener('click', this.showSection)
    }

    normalizeDelta(e) {
        const FireFoxWheelMod = 3
        const ChromeOperaWheelMod = 53

        let normDeltaY = 0
        if (!(e.deltaY % FireFoxWheelMod)) {
            normDeltaY = e.deltaY / FireFoxWheelMod * 2
        } else if (!(e.deltaY % ChromeOperaWheelMod)) {
            normDeltaY = e.deltaY / ChromeOperaWheelMod * 2
        }
        const direction = e.deltaY / Math.abs(e.deltaY);
        return (Math.min(3, Math.max(Math.abs(normDeltaY), 1)) * direction) || e.deltaY
    }

    generateVacations () {
        const vacEls = []
        for (let vid in vacations) {
            const vac = vacations[vid]
            vacEls.push(
                <a key={vid} href={'#!/careers/' + vid} className='vacancy-card'>
                    <div className='location'>
                        <img src={svgFire} />
                        <span>{vac.location}</span>
                    </div>
                    <p>{vac.title}</p>
                    <small>{vac.position}</small>
                </a>
            )
        }
        return vacEls
    }

    showSection = () => {
        if (this.state.isHideAnimation) {
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
            {/* <Header className={classnames('bg-neural',{'fixed-header': this.state.isFixed})} /> */}
            {/* <Works /> */}
            <section className='description-borvo'>
                <section className='black-theme' > 
                    {/* <div className={classnames({'container-header': this.state.isFixed})} >
                        <Header className='bg-neural' />
                    </div> */}
                </section>
                <div className='container-description' >
                    <p>Borvo company provides premium software engineering services to leading technology firms</p>
                    <div className='right-text' >
                        <div className='block-text'>
                            <span>Extend your team</span>
                            <p>Boost your development team with Ciklum’s dedicated specialists</p>
                        </div>
                        <div className='block-text'>
                            <span>Build Your Idea from Scratch</span>
                            <p>Support your operations with a custom-built application</p>
                        </div>
                        <div className='block-text'>
                            <span>Manage your service</span>
                            <p>Free up your team’s time with our support, QA, and DevOps teams</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='reviews' >
                <section className='black-theme' > 
                    {/* <div className={classnames({'container-header': this.state.isFixed})} >
                        <Header className='bg-neural' />
                    </div> */}
                </section>
                <div className='container'>
                    <span className='bg-word-review'>Reviews</span>
                    <div className='first-review'>
                        <div className='video-or-img'  >
                            <img src={reviewImage} style={{ transform: `scale(${this.state.size})` }} />
                        </div>
                        <div className='feedback-text' >
                            <blockquote>
                                Bornfight is extremely easy to work with,
                                allowing staff to focus on other work. The team
                                accepts changes easily, communicates well, and is
                                flexible in terms of their approach.
                            </blockquote>
                            <div className='name-position' >
                                <span className='name'>Michael Rodriguez</span>
                                <small className='position'>Executive Director, Camping Šimuni</small>
                            </div>
                            <button className='show-testimonials' ref={domel => this.btnShow = domel}>
                                <span ref={domel => this.toggleText = domel} >Show all Testimonials</span>
                                <img src={downArrow} style={{ transform: 'rotate(' + this.state.rotateArrow + 'deg' + ')' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classnames('all-reviews', { 'show-all': this.state.isHideAnimation })} >
                <section className='black-theme' > 
                    {/* <div className={classnames({'container-header': this.state.isFixed})} >
                        <Header className='bg-neural' />
                    </div> */}
                </section>
                <div className='container' >
                    <div className='second-review '> {/* 2 */}
                        <div className='feedback-text' >
                            <blockquote>
                                Bornfight is extremely easy to work with,
                                allowing staff to focus on other work. The team
                                accepts changes easily, communicates well, and is
                                flexible in terms of their approach.
                            </blockquote>
                            <div className='name-position' >
                                <span className='name'>Michael Rodriguez</span>
                                <small className='position'>Executive Director, Camping Šimuni</small>
                            </div>
                        </div>
                        <div className='video-or-img'  >
                            <img src={reviewImage} />
                        </div>
                    </div>
                    <div className='third-review'> {/* 3 */}
                        <div className='video-or-img' >
                            <img src={reviewImage} />
                        </div>
                        <div className='feedback-text' >
                            <blockquote>
                                Bornfight is extremely easy to work with,
                                allowing staff to focus on other work. The team
                                accepts changes easily, communicates well, and is
                                flexible in terms of their approach.
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
                <section className='white-theme' > 
                    {/* <div className={classnames({'container-header': this.state.isFixed})} >
                        <Header className='bg-neural' />
                    </div> */}
                </section>
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
            <section className='section-vacancies' >
                <section className='blue-theme' > 
                    {/* <div className={classnames({'container-header': this.state.isFixed})} >
                        <Header className='bg-neural' />
                    </div> */}
                </section>
                <div className='container-vacancies' >
                    <div className='vacancies' >
                        {this.generateVacations()}
                    </div>
                    <div className='vacancies-text'>
                        <h1>Find your dream job in Borvo Team</h1>
                        <p>Chase your dream by day and unwind with <br /> your favorite show at night.</p>
                        <a href='#!/careers' >Learn more<img src={downArrow} /></a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    }
}

