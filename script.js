const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuText = document.querySelector('.menuText');
const body = document.body;

burgerMenu.addEventListener('click', () => {
    burgerMenu.style.right = burgerMenu.style.right === '80%' ? '10px' : '80%';
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    menuText.style.display = menuText.style.display === 'block' ? 'none' : 'block';
    // Adicione ou remova a classe 'menu-open' do elemento body
    if (body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
    } else {
        body.classList.add('menu-open');
        }
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Muda a cada 5 segundos (5000 ms)
}
