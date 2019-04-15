import router from 'react-page-router'

import routes from '@/routing/config'
import events from '@/events'

import { CHANGE_ROUTE } from '@/constants'

function createRouteDispatchMiddleware() {
  return (context, next) => {
    events.emitEvent(CHANGE_ROUTE, context)
    next()
  }
}

export default {
  init: (renderer) => {
    const middleware = createRouteDispatchMiddleware()
    router.init(routes, middleware, renderer, { click: false, hashbang: true })
  }
}

