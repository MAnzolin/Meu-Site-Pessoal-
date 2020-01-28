function erro(){
    alert("Ops, eu ainda não terminei essa parte :/");
}

//VALIDAR-------------------------------------------------
function validar(){
    var nome = formulario.nome.value;
    var tel = formulario.tel.value;
    var email = formulario.email.value;
    var mensagem = formulario.mensagem.value;
    var v = 0;
  
    if(nome == "" || nome == "*DIGITE O SEU NOME*"){
        formulario.nome.value = "*DIGITE O SEU NOME CORRETAMENTE*";
        formulario.nome.focus();
        v = 1;
    }
  
    if(tel == "" || tel == "*DIGITE O SEU TELEFONE*" ){
        formulario.tel.value = "*DIGITE O SEU TELEFONE CORRETAMENTE*";
        formulario.tel.focus();
        v = 1;
    }
  
    if(email == "" || email == "*DIGITE O SEU E-MAIL*" || email.indexOf('@') == -1){
        formulario.email.value = "*DIGITE O SEU E-MAIL CORRETAMENTE*";
        formulario.email.focus();
        v = 1;
    }
  
    if(mensagem == "" || mensagem == "*DIGITE A SUA MENSAGEM*"){
        formulario.mensagem.value = "*DIGITE A SUA MENSAGEM*";
        formulario.mensagem.focus();
        v = 1;
    }
  
    if(v == 1) return false;
  }