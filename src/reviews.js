import { supabase } from './supabase.js'
import { errorModal, loadingModal, succesModal } from './templates.js'

const form = document.querySelector('#contact-form')
const modal = document.querySelector('#result-modal')
const controls = Array.from(form.elements)
const modalBox = modal.children[0]
const escapeIsBlocked = false

form.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
  e.preventDefault()

  modalBox.innerHTML = loadingModal
  toggleEscape()
  toggleScroll()
  modal.showModal()
  
  const values = controls.reduce((values, control) => {
    if (control.value) {
      values[control.name] = control.value
    }

    return values
  }, {})

  const { error } = await supabase.from('reviews').insert(values)
  
  if (error) {
    console.log(error)
    return renderResult('error')
  }

  renderResult('success')
}

function renderResult(type) {
  const results = {
    error: {
      template: errorModal,
      buttonId: '#retry',
    },
    success: {
      template: succesModal,
      buttonId: '#accept',
    }
  }

  const { template, buttonId } = results[type]

  modalBox.innerHTML = template
  const button = document.querySelector(buttonId)

  button.addEventListener('click', async () => {
    modal.close()
    await Promise.resolve()

    toggleEscape()
    toggleScroll()
    modalBox.innerHTML = ''

    if (type === 'success') {
      controls.forEach(element => element.value = '')
    }
  })
}

function toggleEscape() {
  const keyboardEvents = ['keydown', 'keyup', 'keypress']

  function prevent(event) {
    if (event.code !== 'Escape') return
    event.preventDefault()
  }

  if (escapeIsBlocked) {
    keyboardEvents.forEach(eventName => window[`on${eventName}`] = null)
    return
  }
  
  keyboardEvents.forEach(eventName => window[`on${eventName}`] = prevent)
}

function toggleScroll() {
  document.body.classList.toggle('overflow-y-hidden')
}
