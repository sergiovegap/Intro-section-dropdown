/* ---  --- */
const features = document.getElementById('features'),
      subMenuFeat = document.getElementById('submenu-features'),
      company = document.getElementById('company'),
      subMenuComp = document.getElementById('submenu-company'),
      btnOpen = document.getElementById('btn-open'),
      btnClose = document.getElementById('btn-close'),
      links = document.getElementById('links'),
      submenus = document.querySelectorAll('.submenus'),
      options = document.querySelectorAll('.option'),
      arrow = document.querySelector('.arrow-down'),
      arrow2 = document.querySelector('.arrow-down-2'),
      movilDevice = () => window.innerWidth <= 480;


features.addEventListener('mouseover', () => {
    if (!movilDevice()) {
        subMenuFeat.classList.add('features-active');
        arrow.classList.add('rotate');
    }
});

subMenuFeat.addEventListener('mouseout', () => {
    if (!movilDevice()) {
        subMenuFeat.classList.remove('features-active');
        arrow.classList.remove('rotate');
    }
});

company.addEventListener('mouseover', () => {
    if (!movilDevice()) {
        subMenuComp.classList.add('company-active');
        arrow2.classList.add('rotate');
    }
});

subMenuComp.addEventListener('mouseout', () => {
    if (!movilDevice()) {
        subMenuComp.classList.remove('company-active');
        arrow2.classList.remove('rotate');
    }
});



/* --- Responsive Mobile --- */
/** Botones de abrir y cerrar **/
btnOpen.addEventListener('click', (e) => {
    e.preventDefault();    
    if (links.classList.contains('links-active')) {
        links.classList.remove('links-active');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        links.classList.add('links-active');
        btnClose.classList.add('btn-close-active');
        btnOpen.classList.add('btn-open-inactive');
        document.querySelector('body').style.overflow = 'hidden';
    }
});
    
btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    if (links.classList.contains('links-active')) {
        btnClose.classList.remove('btn-close-active');
        links.classList.remove('links-active');
        btnOpen.classList.remove('btn-open-inactive');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        document.querySelector('body').style.overflow = 'hidden';
    }
});


/** Colapsar contenido **/
features.addEventListener('click', () => {
    if (movilDevice()) {
        subMenuFeat.classList.toggle('features-active');
        arrow.classList.toggle('rotate');
    }
});

company.addEventListener('click', () => {
    if (movilDevice()) {
        subMenuComp.classList.toggle('company-active');
        arrow2.classList.toggle('rotate');
    }
});