
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.mainBody');
const buttons = document.querySelectorAll('.ripple')


menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
})

// Ripple on mouse click
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

// Submission form
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Inquiry submitted! Will respond as soon as possible!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)