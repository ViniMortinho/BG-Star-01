// JavaScript
document.addEventListener('DOMContentLoaded', (event) => {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
      cursor.style.top = e.pageY + 'px';
      cursor.style.left = e.pageX + 'px';
  });

  document.addEventListener('click', () => {
      cursor.classList.add('expand');

      setTimeout(() => {
          cursor.classList.remove('expand');
      }, 500);
  });
});
//
//
