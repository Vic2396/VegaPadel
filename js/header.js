const menuHamburguesa = document.querySelector('.menuHamburguesa');
const nav = document.querySelector('.navegador');
const listaSeccion = document.querySelector('.lista-seccion');

let menu = false;
menuHamburguesa.onclick = () => {
    if (menu) {
        listaSeccion.style.display = 'none';
        nav.style.display = 'none';
        menu = false;
    } else {
        listaSeccion.style.display = 'grid';
        nav.style.display = 'grid';
        menu = true;
    }
};
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