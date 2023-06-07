export const errorModal = `
  <svg class="w-28 h-28 stroke-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
  <p class="font-semibold text-red-500 text-xl">Hubo un error al enviar su opinión...</p>
  <button class="btn btn-error mt-4" id="retry">
    Intentar de nuevo
  </button>
`

export const loadingModal = `
  <img class="w-28 h-28 animate-spin" src="/icons/loading.svg">
  <p class="font-semibold text-2xl mt-4">Se está enviando su opinión...</p>
`

export const succesModal = `
  <svg  class="w-28 h-28 strok-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <p class="font-semibold text-green-500 text-xl">¡Gracias por su opinión!</p>
  <button class="btn btn-success mt-4" id="accept">
    Aceptar
  </button>
`