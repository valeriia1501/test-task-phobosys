import React from 'react';

import classnames from 'classnames'

import {
    blackArrow,
    kubernetes,
    javascriptImg,
    angular,
    blockchain,
    nodeImg,
    reactImg,
    tensorflow,
    imgVideo
} from '@/images'

import Header from '@/components/Header'

export default class Neural extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
    }

    componentDidMount() {
        this.html.scrollTop = 0;
    }

    render() {
        return <div className={classnames(this.props.className, "neural")}>
            <Header className="white-page" />
            <section className="networks" >
                <div className="networks-container">
                    <h1>Neural networks <br /> working with Twitter </h1>
                    <p>It is a long established facte that a reader will be distracted by the readable <br /> content of a page when looking at its layout.
                        </p>
                    <div>
                        <a href="#">
                            Learn more
                                <span><img className="arrow" src={blackArrow} alt="" /></span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="video-section">
                <div className="container">
                    <div className="video hide">
                        <img src={imgVideo} alt="" />
                    </div>
                    <div className="video">
                        <img src={imgVideo} alt="" />
                    </div>
                    <div className="video">
                        <img src={imgVideo} alt="" />
                    </div>
                </div>
            </section>
            {/* <section className="temp-section">

            </section> */}
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

