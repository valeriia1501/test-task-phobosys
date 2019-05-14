import master from '@components/master'
import Services from '@components/Services'
import Neural from '@components/Neural'
import Home from '@components/Home'
import AboutUs from '@components/AboutUs'
import Contacts from '@components/Contacts'
import Careers from '@components/CareersVacancies/Careers'
import Vacancy from '@components/CareersVacancies/Vacancy'
import Experties from '@components/Experties'
import ApplicationDevelopment from '@components/Experties/ApplicationDevelopment'
import ResearchDevelopment  from '@components/Experties/ResearchDevelopment'
import BigDataAnalytics  from '@components/Experties/BigDataAnalytics'
import SoftwareTesting  from '@components/Experties/SoftwareTesting'

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
        path: '/experties/ResearchDevelopment',
        name: 'Research Development ',
        title: '',
        component: ResearchDevelopment,
      },

      {
        path: '/experties/ApplicationDevelopment',
        name: 'Application Development',
        title: '',
        component: ApplicationDevelopment,
      },

      {
        path: '/experties/BigDataAnalytics',
        name: 'Big Data & Analytics',
        title: '',
        component: BigDataAnalytics,
      },

      {
        path: '/experties/SoftwareTesting',
        name: 'QA & Software Testing',
        title: '',
        component: SoftwareTesting,
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
