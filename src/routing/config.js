import master from '@components/master'
import Services from '@components/Services'
import Neural from '@components/Neural'
import Experties from '@components/Experties'
import Home from '@components/Home'
import AboutUs from '@components/AboutUs'
import Contacts from '@components/Contacts'
import Careers from '@components/Careers'


import ExpertiesCarousel from '@components/ExpertiesCarousel'

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
          }
        ]
      },
      {
        path: '/neural',
        name: 'Neural',
        title: '',
        component: Neural
      },
      {
        path: '/experties',
        name: 'Experties',
        title: '',
        component: Experties
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
        path: '/careers',
        name: 'Сareers',
        title: '',
        component: Careers
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
