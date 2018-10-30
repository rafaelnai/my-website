const sectionSkills = document.querySelector('.home__content--btn')
const changePoint = sectionSkills.getBoundingClientRect().top;
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  setInterval(() => {
    window.scrollY > changePoint
    ? menu.classList.add('menu-active')
    : menu.classList.remove('menu-active');
  }, 500)
})