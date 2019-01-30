import * as React from 'react';

import whiteMenuItem from '../../../assets/menu-white.svg'
import card_1 from '../../../assets/card_1.png'
import card_2 from '../../../assets/card_2.png'
import card_3 from '../../../assets/card_3.png'
import rigthArrow from '../../../assets/right-arrow.svg'

export class Services extends React.Component{
    render(){
        return <div className="home" >
        <header className="header">
            <div>
                <span className="logo">borvo</span>
        
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
                <img id="burger" src={whiteMenuItem}/>
            <button>Get in touch</button>
        </header>
        <section className="title">
            <p>
                We offer our services - long, expensive, very cool
            </p>
        </section>
        <section className="scroll-section" >
            <div className="cardHome">
                <img src={card_1}/> 
                <div>
                    <span>01</span>
                    <p>Professional Startup Solution</p>
                    <small>Service <span>- Sturupe solution</span></small>
                    <a className="arrow" href="#" ><img src={rigthArrow}/></a>
                </div>
            </div>
            <div className="cardHome">
                <img src={card_2}/>                         
                <div>
                    <span>02</span>
                    <p>Improve and Support Your Product</p>
                    <small>Service <span>- Sturupe solution</span></small>
                    <a className="arrow" href="#" ><img src={rigthArrow} /></a>
                </div>
            </div>
            <div className="cardHome">
                <img src={card_3}/> 
                <div>
                    <span>03</span>
                    <p>UI/UX Engeniring</p>
                    <small>Service <span>- Sturupe solution</span></small>
                    <a className="arrow" href="#" ><img src={rigthArrow} /></a>
                </div>
            </div>
        </section>
    </div>
    }
}



