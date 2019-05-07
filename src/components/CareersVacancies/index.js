import React from 'react'
import classnames from 'classnames'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VacanciesTopBlock from '@/components/CareersVacancies/VacanciesTopBlock'
import CareersTopBlock from '@/components/CareersVacancies/CareersTopBlock'

import currentRoute from '@/routing/currentRoute'

export default class CareersVacancies extends React.PureComponent {
  constructor (props) {
    super(props)
    this.html = document.getElementsByTagName('html')[0]
    this.html.classList.remove('scroll-hidden')
    this.html.classList.add('scroll-x-hidden')
    this.html.scrollTop = 0
    document.body.scrollTop = 0 // for safari
    this.state = { vacationId: currentRoute.context.params.id }
    currentRoute.on(this.handleCustomEvent)
  }

  componentWillUnmount () { currentRoute.off(this.handleCustomEvent) }

  handleCustomEvent = (context) => {
    this.setState({ vacationId: context.params.id })
  }

  

  render() {
    return (
      <div className='container-careers-vacancies' >
        <section className='black-theme' > 
            <div className='container-header' >
                <Header className='bg-neural' />
            </div>
        </section>
        <section 
          className={classnames('top-page top-block', { 'shrink': this.state.vacationId })} 
          style={{'minHeight' : this.state.height }}
        >
          {this.state.vacationId 
            ? <VacanciesTopBlock vacationId={this.state.vacationId}/>
            : <CareersTopBlock/>
          }
        </section>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
