let menuClose = document.querySelector('.bi-list')
let menuOpen = document.querySelector('.bi-x')

menuClose.addEventListener('click', function () {
  menuClose.style.display = 'none'
  menuOpen.style.display = 'block'
})

menuOpen.addEventListener('click', function () {
  menuClose.style.display = 'block'
  menuOpen.style.display = 'none'
})
