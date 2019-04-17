import EventEmitter from 'events'

const ROUTE_CHANGED = 'ROUTE_CHANGED'
class CurrentRoute extends EventEmitter {
    constructor(args) {
        super(args)
        this.routepath = null
        this.context = null
    }

    on = (func) => {
        this.addListener(ROUTE_CHANGED, func)
    }

    off = (func) => {
        this.removeListener(ROUTE_CHANGED, func)
    }

    middleware = () => {
        return (context, next) => {
            this.routepath = context.routepath
            this.context = context
            this.emit(ROUTE_CHANGED, this)
            next()
        }
    }
}

const currentRoute = new CurrentRoute()
export default currentRoute