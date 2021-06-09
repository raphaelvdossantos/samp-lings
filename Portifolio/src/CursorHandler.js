function cursorHandler() {
  const cursor = document.querySelector('.mouse-cursor');
  const nav = document.querySelectorAll('li a');
  const movement = 15;

  function animate(event) {
    const { clientX: x, clientY: y } = event;
    cursor.style.left = `${x - 12.5}px`
    cursor.style.top = `${y - 12.5}px`
  }

  function hover() {
    cursor.style.transform = 'scale(1.5)';
    setTimeout(() => cursor.style.transform = 'scale(1)', 500)
  }

  function start() {
    window.addEventListener('mousemove', animate);
    for (let linkIndex = 0; linkIndex < nav.length; linkIndex++) {
      nav[linkIndex].addEventListener('mouseover', hover);
    }
  }

  return {
    start
  }
}

export default cursorHandler;