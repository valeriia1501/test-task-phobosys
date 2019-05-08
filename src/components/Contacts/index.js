import React from 'react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default class Contacts extends React.PureComponent {
    constructor(props) {
        super(props)
        this.html = document.getElementsByTagName('html')[0]
        this.html.classList.add('scroll-x-hidden')
        this.html.scrollTop = 0
        document.body.scrollTop = 0 // for safari
    }
    render() {
        return (
        <div className='contacts' >
            <section className='black-theme' > 
                <div className='container-header' >
                    <Header className='bg-neural' />
                </div>
            </section>
            <section className='map-bg'>
                <div className='container' >
                    <h1>Our World Offices</h1>
                    <div className='cities' >
                        <div className='block odesa' >
                            <span>Odesa</span>
                            <p>
                                Viys'kovy descent, 24 <br/>
                                Odes'ka oblast
                            </p>
                        </div>
                        <div className='block dublin' >
                            <span>Dublin</span>
                            <p>
                                1 Jervis St <br/>
                                North City Dublin 1 D01 X337
                            </p>
                        </div>
                        <div className='block los-angeles' >
                            <span>Los Angeles</span>
                            <p>
                                660 Alameda St <br/>
                                Los Angeles, CA 90021, USA
                            </p>
                        </div>
                        <div className='block details' >
                            <span>Contact details</span>
                            <div className='number-email' >
                                <div>
                                    <span>Call Us Now:</span>
                                    <span>Our Email :</span> 
                                </div>
                                <div>
                                    <span className='number'>1-800-385-1359</span>
                                    <span className='email' >info@flyfirst.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='message' >
                <div className='message-container' >
                    <h1>Write us a Message</h1>
                    <div className='form-container' >
                        <form >
                        <div className='four-input'>
                            <label>
                            <input type='text' placeholder='.' />
                                <span className='placeholder' data-end='*' >Full name</span>
                            </label>
                            <label>
                            <input type='text' placeholder='.' />
                                <span className='placeholder'>Company</span>
                            </label>
                            <label>
                            <input type='email' placeholder='.' />
                                <span className='placeholder' data-end='*' >Email</span>
                            </label>
                            <label>
                            <input type='text' placeholder='.' />
                                <span className='placeholder'>Phone number</span>
                            </label>
                        </div>
                        <div className='down-input' >
                            <label>
                            <input type='text' placeholder='.' />
                            <span className='placeholder'>Email </span>
                            <div className='style-type-file' >
                                <label htmlFor='file-input'></label>
                                <input id='file-input' type='file' />
                            </div>
                            </label>
                        </div>
                        </form>
                    </div>
                    <div className='footer' >
                        <p>We will add your info to our CRM for contacting you regarding your request. For more info please consult our privacy policy</p>
                        <label>
                        <input type='checkbox' />
                        <span>I want to receive news and updates once in a while</span>
                        </label>
                        <div className='btn-send'> Send message </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        )
    }
}
