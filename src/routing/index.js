import router from 'react-page-router'

import routes from '@/routing/config'
import currentRoute from '@/routing/currentRoute' 

export default {
  init: (renderer) => {
    router.init(routes, currentRoute.middleware(), renderer, { click: false, hashbang: true })
  }
}

