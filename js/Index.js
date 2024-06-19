var Nome
var Mail

function Login(){
    Nome = document.getElementById("inputNome").value
    Mail = document.getElementById("inputMail").value

    if(Nome == "")
        alert("Inserire il NOME!")
    if(Mail == "")
        alert("Inserire la MAIL!")

    if(Mail.includes("@") == false)
        alert("MAIL non valida!")

    let welcome = document.getElementById("datiUtente")

    welcome.innerHTML = "BENVENUTO " + Nome + "!"
}