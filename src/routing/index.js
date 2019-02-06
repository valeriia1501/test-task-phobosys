import router from 'react-page-router'

import routes from '@/routing/config'

export default {
  init: (renderer) => {
    router.init(routes, [], renderer, { click: false, hashbang: true })
  }
}
