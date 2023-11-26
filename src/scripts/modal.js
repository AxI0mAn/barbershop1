export default function modal() {
  const modal = document.querySelector('.modal');
  const gallery = document.querySelector('.gallery_img');
  const btns = document.querySelectorAll('.learn_more');
  const close = document.querySelector('.btn_close');
  for (let btn of btns) {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      gallery.style.display = 'none';
      history.pushState({}, '', '#modal');
    });
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      gallery.style.display = 'block';
    }
  };
  close.addEventListener('click', () => {
    modal.style.display = 'none';
    gallery.style.display = 'block';
  });
  window.onpopstate = function () {
    modal.style.display = 'none';
    gallery.style.display = 'block';
  };
}
