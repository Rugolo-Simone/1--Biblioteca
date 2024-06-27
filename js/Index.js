var Nome
var Mail

var vettoreMail = []

function Login(){
    Nome = document.getElementById("inputNome").value
    Mail = document.getElementById("inputMail").value

    let verifica = verificaMail(Mail)

    if(Nome == "" || !verifica)
        alert(`inserire tutti i dati necessari! 
               ATTENZIONE! la Mail deve contenere la seguente formula: 
               esempio@esempio.esempio`)
    else{
        let welcome = document.getElementById("datiUtente")

    welcome.innerHTML = "BENVENUTO " + Nome + "!"
    vettoreMail.push(Mail)
    console.log(vettoreMail)
    console.log(Nome)
    }
}

function verificaMail(Mail){

    if(Mail.includes("@") == false || Mail.includes(".") == false)
        return false
    else{

    let indiceCh = Mail.indexOf("@")
    let stringa1 = Mail.substring(0, indiceCh)

    let indicePu = Mail.indexOf(".")
    let stringa2 = Mail.substring(indiceCh+1, indicePu)
    
    let stringa3 = Mail.substring(indicePu+1)

    if(stringaValida(stringa1) && stringaValida(stringa2) && stringaValida(stringa3))
        return true
    else
        return false
    }
}

function carattereValido(char) {

    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')
}

function stringaValida(str) {
    for (let i = 0; i < str.length; i++) {
      if (carattereValido(str[i]) == false) {
        return false;
      }
    }
    return true;
}