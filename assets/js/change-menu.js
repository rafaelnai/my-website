const sectionSkills = document.querySelector('.home__content--btn')
const changePoint = sectionSkills.getBoundingClientRect().top
const menu = document.querySelector('.menu')
const toggleMenu = document.querySelector('.toggle-menu')

if(window.innerWidth > 780) {
  
  window.addEventListener('scroll', () => {
    setInterval(() => {
      window.scrollY > changePoint ? menu.classList.add('menu-active') : menu.classList.remove('menu-active');
    }, 500)
  })
} else {

  toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
  })
}


