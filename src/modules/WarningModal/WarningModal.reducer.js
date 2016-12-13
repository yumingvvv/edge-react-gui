import * as ACTION from './WarningModal.action'

export const visible = (state = false, action) => {
  switch (action.type) {
    case ACTION.WARNING_MODAL_OPEN :
      return true

    case ACTION.WARNING_MODAL_CLOSE :
      return false

    default:
      return state
  }
}

export const message = (state = '', action) => {
  switch (action.type) {
    case ACTION.WARNING_MODAL_OPEN :
      return action.message

    case ACTION.WARNING_MODAL_CLOSE :
      return ''

    default:
      return state
  }
}
