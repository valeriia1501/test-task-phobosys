import * as React from 'react';

import menuBlack from '@assets/menu-black.svg'
import blackArrow from '@assets/right-arrow-black.svg'
import kubernetes from '@assets/kubernetes.svg'
import javascript from '@assets/javascript.svg'
import angular from '@assets/angular.svg'
import blockchain from '@assets/blockchain.svg'
import node from '@assets/node-js.svg'
import react from '@assets/react.svg'
import tensorflow from '@assets/tensorflow.svg'
import imgVideo from '@assets/temp.png'

import classnames from 'classnames'

export class Neural extends React.Component {
    render(){
        return <div className={classnames(this.props.className, "neural")}>
            <header className="white-page header" >
                    <div>
                        <span>borvo</span>
                        <nav>
                            <ul>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>
                        <nav className="mobile none" id="mobile">
                            <ul>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <img id="burger" src={menuBlack} alt=""/>
                    <button>Get in touch</button>
            </header>
            <section className="networks" > 
                   <div className="networks-continer">
                        <h1>Neural networks <br/> working with Twitter </h1>
                        <p>It is a long established facte that a reader will be distracted by the readable <br/> content of a page when looking at its layout.
                        </p>
                        <div>
                            <a href="#">
                                Learn more 
                                <span><img className="arrow" src={blackArrow} alt=""/></span>
                            </a>
                        </div>
                   </div> 
            </section>
            <section className="video-section">
                <div className="container">
                    <div className="video">
                        <img src={imgVideo} alt=""/>
                    </div>
                    <div className="video">
                        <img src={imgVideo} alt=""/>
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
                        <img src={javascript} alt=""/>
                        <span>Java Script</span>
                    </div>
                    <div className="card">
                        <img src={react} alt=""/>
                        <span>React</span>
                    </div>
                    <div className="card">
                        <img src={node} alt=""/>
                        <span>Node js</span>
                    </div>
                    <div className="card">
                        <img src={angular} alt=""/>
                        <span>Angular</span>
                    </div>
                    <div className="card">
                        <img src={blockchain} alt=""/>
                        <span>Blockchain</span>
                    </div>
                    <div className="card">
                        <img src={tensorflow} alt=""/>
                        <span>Tensorflow</span>
                    </div>
                    <div className="card">
                        <img src={kubernetes} alt=""/>
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

