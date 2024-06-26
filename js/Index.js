var Nome
var Mail

var vettoreMail = []

function Login(){
    Nome = document.getElementById("inputNome").value
    Mail = document.getElementById("inputMail").value

    if(Nome == "" || Mail.includes("@") == false)
        alert("inserire tutti i dati necessari!")
    else{
        let welcome = document.getElementById("datiUtente")

    welcome.innerHTML = "BENVENUTO " + Nome + "!"
    vettoreMail.push(Mail)
    console.log(vettoreMail)
    console.log(Nome)
    }
}