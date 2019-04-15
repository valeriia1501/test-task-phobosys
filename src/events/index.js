import EventEmitter from 'events'

class Events extends EventEmitter {
    addEventListener(event, callback) {
        this.addListener(event, callback)
    }

    removeEventListener(event, callback) {
        this.removeListener(event, callback)
    }

    emitEvent(event, eventData) {
        this.emit(event, eventData)
    }
}

const events = new Events()
export default events