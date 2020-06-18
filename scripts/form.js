function enviar() {
 
    var nome = document.getElementById("nome");
    var email = document.getElementById("email")
    var msg = document.getElementById("msg");

    console.log(nome.value+email.value+msg.value)
 
    if (nome.value != "") {
        alert('Obrigado ' + nome.value + ' a sua mesnagem foi enviada com sucesso.');
    }
 
}