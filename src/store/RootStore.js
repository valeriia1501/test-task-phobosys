import EventEmitter from 'events'

const STATE_CHANGED = 'STATE_CHANGED'

export class RootStore extends EventEmitter {
    constructor(args) {
        super(args)
        this._state = {
            isOpen: false,
            isShowMobMenu: false
        }
        this.setMaxListeners(100)
    }

    on = (func) => {
        this.addListener(STATE_CHANGED, func)
    }

    off = (func) => {
        this.removeListener(STATE_CHANGED, func)
    }

    togglePopUp = (isOpen = !this._state.isOpen) => {
        this._state.isOpen = isOpen
        this.emit(STATE_CHANGED, { ...this._state })
    }

    toggleMobMenu = (isShowMobMenu = !this._state.isShowMobMenu) => {
        this._state.isShowMobMenu = isShowMobMenu
        this.emit(STATE_CHANGED, {...this._state })
    }
}

const instance = new RootStore()
export default instance