let nome = window.document.getElementById("nome") //aqui nao usamos o # no nome pq o getEelemtById já declarou o ID

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')

let nomeOk = false

let emailOk = false

let assuntoOk = false

nome.style.width = '13%'
email.style.width = '13%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){

    txtNome.innerHTML = "Nome é invalido"
    txtNome.style.color = "red"

    }else{

    txtNome.innerHTML = "Nome Válido"
    txtNome.style.color = "green"
    nomeOk = true

    }
}

function validaEmail(){

    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email Invalido"
        txtEmail.style.color = "red"
        emailOk = false

}else{
    txtEmail.innerHTML = "Email Válido"
    txtEmail.style.color = "green"
    emailOk = true

}
}

function validaAssunto(){

    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "texto é muito grande, digite no maximo 100 caracteres"
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk= false

    }else{
        
        txtAssunto.style.display = 'none'
        assuntoOk= true
    }


}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulario foi enviado com sucesso")


    }else{
        alert("prencha o formulario corretamente para enviar")
    }
}
