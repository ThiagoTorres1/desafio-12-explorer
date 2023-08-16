import * as el from "../FocusTimer/elements.js"
import state from "../FocusTimer/state.js"

export function checkedButton() {
  el.btnCheck.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active')
      state.isMute = !state.isMute
      console.log(state.isMute)
      if(state.isMute) {
        el.btnCheck.forEach(button => button.classList.remove('active'))
      }
      })
  })
}