import master from '@components/master'
import Services from '@components/Services'
import Neural from '@components/Neural'
import Home from '@components/Home'

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
        component: Home
      },
      {
        path: '/index.html',
        name: 'Home',
        tile: '',
        component: Home
      },
      {
        path: '/services',
        name: 'Services',
        tile: '',
        component: Services
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
