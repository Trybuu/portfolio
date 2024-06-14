document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry) // Logowanie do konsoli w celu debugowania
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
        entry.target.classList.remove('hidden')
      } else {
        entry.target.classList.remove('show')
        entry.target.classList.add('hidden') // Możliwe, że chcesz to dodać do debugowania
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el))
})
