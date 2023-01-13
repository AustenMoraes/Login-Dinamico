const background = document.querySelector('.background')
const passwordInput = document.getElementById('password')



passwordInput.addEventListener('input', lessBlur )

function lessBlur() {
  const length = passwordInput.value.length
  background.style.filter = `blur(${20 - length * 2}px)`
}