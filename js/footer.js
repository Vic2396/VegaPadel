const details = document.querySelectorAll('details');

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1008) {
      listaSeccion.style.display = 'grid';
      nav.style.display = 'grid';
      menu = true;
    } else {
      listaSeccion.style.display = 'none';
      nav.style.display = 'none';
      menu = false;
    }
});
window.onload = () => {
    if (window.innerWidth >= 1008) {
        listaSeccion.style.display = 'grid';
        nav.style.display = 'grid';
        menu = true;
    } else {
        listaSeccion.style.display = 'none';
        nav.style.display = 'none';
        menu = false;
    }
};