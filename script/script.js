
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.mainBody');
const contactBtn = document.querySelector('.button-contact');
const buttons = document.querySelectorAll('.ripple')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
})

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

contactBtn.addEventListener('click', ()=>{
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  const handleSubmit = () => {
    Toast.fire({
      icon: 'success',
      title: 'Inquiry Sent',
      text: 'will respond to you asap'
    })
  }
  handleSubmit()
})



