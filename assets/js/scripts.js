const slider = document.querySelector('.form__control-range');
const sliderValue = document.querySelector('.rangevalue');

slider.addEventListener('input', function() {
  sliderValue.textContent = `${slider.value}%`;
});


const element = document.querySelector('.circles-one');

window.addEventListener('scroll', () => {
  const elementPosition = element.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 2;

  if (elementPosition < screenPosition) {
    element.classList.add('show');
  }
});


const headerBurger = document.querySelector('.header__burger');
const headerNavbar = document.querySelector('.header__navbar');

headerBurger.addEventListener('click', function() {
  headerBurger.classList.toggle('active'); /* добавить класс active, чтобы повернуть иконки */
  headerNavbar.classList.toggle('active'); /* показать или скрыть меню */
});