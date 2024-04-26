const heart = document.querySelectorAll('.heart, .heart-two, .heart-three')

const heartFill = document.querySelectorAll(
  '.heart-fill, .heart-fill-two, .heart-fill-three'
)

heart.forEach(function (elemento) {
  elemento.addEventListener('click', function () {
    this.style.color = '#ff0000'
  })
})
