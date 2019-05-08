import master from '@components/master'
import Services from '@components/Services'
import Neural from '@components/Neural'
import Home from '@components/Home'
import AboutUs from '@components/AboutUs'
import Contacts from '@components/Contacts'
import Careers from '@components/CareersVacancies/Careers'
import Vacancy from '@components/CareersVacancies/Vacancy'
import Experties from '@components/Experties'
import ProfessionalStartupSolution from '@components/Experties/ProfessionalStartupSolution'
import ImproveAndSupport  from '@components/Experties/ImproveAndSupport'
import UiUxEngeniring  from '@components/Experties/UiUxEngeniring'

import ExpertiesCarousel from '@components/ExpertiesCarousel'

import CareersVacancies from '@components/CareersVacancies'


export default [
  {
    path: '/',
    name: 'Master',
    component: master,
    children: [
      {
        path: '/',
        name: 'Home',
        tile: '',
        transition: { timeout: 500, classNames: 'home-route' },
        component: Home,
        children: [
          {
            path: '/',
            name: 'ExpertiesCarousel',
            title: '',
            component: ExpertiesCarousel
          },
          {
            path: '/services',
            name: 'Services',
            title: '',
            component: Services
          },
        ]
      },

      {
        path: '/careers',
        name: 'CareersVacancies',
        tile: '',
        component: CareersVacancies,
        children: [
          {
            path: '/',
            name: 'Сareers',
            title: '',
            component: Careers,
          },
          {
            path: '/:id',
            name: 'Vacancy',
            title: '',
            component: Vacancy
          },
        ]
      },
      
      // {
      //   path: '/experties',
      //   name: 'Experties',
      //   title: '',
      //   component: Experties,
      // },
      {
        path: '/experties/ImproveAndSupport',
        name: 'Improve and Support ',
        title: '',
        component: ImproveAndSupport,
      },

      {
        path: '/experties/ProfessionalStartupSolution',
        name: 'Professional Startup Solution',
        title: '',
        component: ProfessionalStartupSolution,
      },

      {
        path: '/experties/UiUxEngeniring',
        name: 'UiUxEngeniring',
        title: '',
        component: UiUxEngeniring,
      },

      {
        path: '/neural',
        name: 'Neural',
        title: '',
        component: Neural
      },
      {
        path: '/about-us',
        name: 'AboutUs',
        title: '',
        component: AboutUs
      },
      {
        path: '/contacts',
        name: 'Contacts',
        title: '',
        component: Contacts
      },
      {
        path: '*',
        name: 'Not Found',
        title: '',
        component: Home
      }
    ]
  }
]
