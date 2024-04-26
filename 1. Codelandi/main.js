const heart = document.querySelector('.bi-heart')
const heartFill = document.querySelector('.bi-heart-fill')

heart.addEventListener('click', hearting)
heartFill.addEventListener('click', noHearting)

function hearting() {
  heart.style.display = 'none'
  heartFill.style.display = 'block'
}

function noHearting() {
  heart.style.display = 'block'
  heartFill.style.display = 'none'
}
