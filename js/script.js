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

if(window.SimpleAnime) {
  new SimpleAnime();
}

//envio do formulário https://github.com/origamid/simple-form

if(window.SimpleForm){
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><h2>Erro novo envio!<h2/><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}