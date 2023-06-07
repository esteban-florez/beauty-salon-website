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
  <svg class="w-28 h-28 animate-spin" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
    <g fill="#000000" fill-rule="evenodd" clip-rule="evenodd">
      <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"/>
      <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"/>
    </g>
  </svg>
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