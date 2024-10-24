
  // Efecto hover en los enlaces para cambiar de color
  const enlaces = document.querySelectorAll('.presentacion__enlaces__link');
  enlaces.forEach(enlace => {
    enlace.addEventListener('mouseenter', () => {
      enlace.style.backgroundColor = '#272727'; // Cambia el color al pasar el mouse
    });
    
    enlace.addEventListener('mouseleave', () => {
      enlace.style.backgroundColor = ''; // Vuelve al color original al quitar el mouse
    });
  });
  
  // Agregar animación al hacer scroll
window.addEventListener('scroll', () => {
  const elementos = document.querySelectorAll('.presentacion__contenido__texto, .presentacion__imagen, .header__menu__link');
  elementos.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    
    if (position < screenHeight) {
      el.style.animationPlayState = 'running';
    }
  });
});

// Efecto hover en los enlaces para cambiar de color
const enlaces = document.querySelectorAll('.presentacion__enlaces__link');
enlaces.forEach(enlace => {
  enlace.addEventListener('mouseenter', () => {
    enlace.style.backgroundColor = '#272727'; // Cambia el color al pasar el mouse
  });
  
  enlace.addEventListener('mouseleave', () => {
    enlace.style.backgroundColor = ''; // Vuelve al color original al quitar el mouse
  });
});
