import master from '@components/master'
import Services from '@components/Services'
import Neural from '@components/Neural'
import Home from '@components/Home'

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
            name: 'Experties',
            tile: '',
            component: ExpertiesCarousel
          },
          {
            path: '/services',
            name: 'Services',
            tile: '',
            component: Services
          }
        ]
      },
      {
        path: '/neural',
        name: 'Neural',
        tile: '',
        component: Neural
      },
      {
        path: '*',
        name: 'Not Found',
        tile: '',
        component: Home
      }
    ]
  }
]
