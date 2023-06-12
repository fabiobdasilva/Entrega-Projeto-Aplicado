function getData(formulario) {
    var formData = new FormData(formulario);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    console.log(Object.fromEntries(formData));

    var valores = Object.fromEntries(formData);
    console.log(valores.nome);
    window.alert('Prezado(a) '+valores.nome+', obrigado pelo sua mensagem: '+valores.mensagem+'.Em até 48hs nossa equipe comercial entrará em contato com você.');
    formulario.reset();

  }
  

  function load(){
    window.alert('Boas vindas à página da FBS Software!')
    document.getElementById("formulario").addEventListener("submit", function (e) {
        e.preventDefault();
        getData(e.target);
      });
  }