import { btnPressAudio } from "./sounds.js"
import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
  btnPressAudio.play()
}

export function reset() {
  document.documentElement.classList.remove('running')
  state.isRunning = false
  timer.updateDisplay()
  btnPressAudio.play()
}

export function addMinutes() {
  timer.add()
  btnPressAudio.play()
}

export function subMinutes() {
  timer.sub()
  btnPressAudio.play()
}