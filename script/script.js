const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.mainBody')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
})

const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const xInside = e.clientX
        const yInside = e.clientY

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)
    })
})



