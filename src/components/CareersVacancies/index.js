import React from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default class CareersVacancies extends React.Component {
  constructor (props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.html.classList.remove('scroll-hidden')
    this.html.classList.add('scroll-x-hidden')
    this.html.scrollTop = 0
    document.body.scrollTop = 0 // for safari
  }
 
    render() {
    return (
      <div className='container-careers-vacancies' >
        <Header className='bg-black' />
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
