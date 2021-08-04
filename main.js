/* Abre e fecha o menu quando clicar no icone: hamburguer e x */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
  console.log(element)
  element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  console.log(link)
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
} 

/* Mudar o header da página quando der scroll */

const header = document.querySelector('header')
const navHeigth = header.offsetHeight

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeigth){
    // scrooll é  maior que a altura do height
    header.classList.add('scroll')
  }
  else{
    // menor que a altura do height
    header.classList.remove('scroll')
  }
}) 

/* Testimonials carousel slider swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView:2,
      setWrapperSize: true
    }
  }
});

/* ScrollReview: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,  {interval: 100} ) 




/* Botão voltar para o topo  */

const backToTopButton = document.querySelector('.back-to-top')

console.log(backToTopButton)

window.addEventListener('scroll', function () {
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
    console.log('SHOW')
  }
  else{
    backToTopButton.classList.remove('show')
    console.log('SEM SHOW')
  }
})