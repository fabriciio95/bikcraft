if(window.SimpleSlide) {
  /* https://github.com/origamid/simple-anime */
  new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5500, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });

  new SimpleSlide({
    slide: 'portfolio',
    nav: true,
    auto: true,
    time: 5000,
    pauseOnHover: true
  });
}