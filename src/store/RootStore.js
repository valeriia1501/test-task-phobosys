import EventEmitter from 'events'

const STATE_CHANGED = 'STATE_CHANGED'

let  _state = {
    isOpen: false,
    isShowMobMenu: false,
    isVisibleWebGl: false,
    showWebGl: false
}

export class RootStore extends EventEmitter {
    constructor(args) {
        super(args)
        this.setMaxListeners(100)
    }

    on = (func) => {
        this.addListener(STATE_CHANGED, func)
    }

    off = (func) => {
        this.removeListener(STATE_CHANGED, func)
    }

    getState = () => {
        return { ..._state }
    }

    _setState = (update) => {
        _state = { ..._state, ...update }
        this.emit(STATE_CHANGED, { ..._state })
    }

    togglePopUp = (isPopUpOpen = !_state.PopUpOpen) => {
        this._setState({ isPopUpOpen })
    }

    toggleMobMenu = (isShowMobileMenu = !_state.isShowMobileMenu) => {
        this._setState({ isShowMobileMenu })
    }

    toggleWebGlVisibility = (isVisibleWebGl) => {
        this._setState({ isVisibleWebGl: isVisibleWebGl })
    }

}

const instance = new RootStore()
export default instance
