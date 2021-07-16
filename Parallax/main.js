const parallax = event => {
  const textSlices = document.querySelectorAll('h1');
  const box = document.querySelector('.box')

  const roll = window.pageYOffset;
  const rate = roll * 0.5;

  box.style.transform = `translate3d(${rate * 5}px, 0px, 0px)`;
  textSlices[0].style.transform = `translate3d(${rate * 2.1}px, 0px, 0px)`;
  textSlices[1].style.transform = `translate3d(0px, -${rate * 2}px, 0px)`;
  textSlices[2].style.transform = `translate3d(${-rate * 3.4}px, 0px, 0px)`;
}

window.addEventListener('scroll', parallax)