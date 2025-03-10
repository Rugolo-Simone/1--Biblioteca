window.onload = init

var clickData = 0 //Al primo click ordina in ordine decrescente la data, al secondo in ordine crescente
var clickNome = 0 //Al primo click ordina in ordine decrescente il nome, al secondo in ordine crescente
var clickGenere = 0 //Al primo click ordina in ordine decrescente il genere, al secondo in ordine crescente

var sectTabella, cancellaTable, tb, tr, th1, th2, th3

var Elenco = {
    "Il Signore degli Anelli": {
        genere: "Fantasy",
        data: 1949,
    },
    "Il buio oltre la siepe": {
        genere: "Romanzo",
        data: 1960,
    },
    "Divina Commedia": {
        genere: "Epica",
        data: 1427,
    },
    "L'ombra del vento": {
        genere: "Romanzo",
        data: 2001,
    },
    "Il deserto dei Tartari": {
        genere: "Romanzo",
        data: 1940,
    },
    "Il conte di Montecristo": {
        genere: "Romanzo d'Avventura",
        data: 1954,
    },
    "Il nome della rosa": {
        genere: "Romanzo storico",
        data: 1980,
    },
    "Dracula": {
        genere: "Romanzo Horror",
        data: 1897,
    },
    "Piccolo principe": {
        genere: "Romanzo",
        data: 1943,
    },
    "Amleto": {
        genere: "Tragedia",
        data: 1600,
    },
    "Don Chisciotte della Mancia": {
        genere: "Romanzo",
        data: 1605,
    },
    "Orgoglio e pregiudizio": {
        genere: "Romanzo",
        data: 1813,
    },
    "Guerra e pace": {
        genere: "Romanzo storico",
        data: 1869,
    },
    "I fratelli Karamazov": {
        genere: "Romanzo filosofico",
        data: 1880,
    },
    "Madame Bovary": {
        genere: "Romanzo",
        data: 1857,
    },
    "L'Ulisse": {
        genere: "Romanzo modernista",
        data: 1922,
    },
    "Il processo": {
        genere: "Romanzo",
        data: 1925,
    },
    "Uno, nessuno e centomila": {
        genere: "Romanzo",
        data: 1926,
    },
    "Harry Potter e la pietra filosofale": {
        genere: "Fantasy",
        data: 1997,
    },
    "Cento anni di solitudine": {
        genere: "Romanzo",
        data: 1967,
    },
}

function init(){
    creaTabella()

    for(let libro in Elenco){

        let trF = document.createElement("tr")

        let td1F = document.createElement("td")
        td1F.innerHTML = libro
        td1F.className = "table"
        trF.appendChild(td1F)

        let td2F = document.createElement("td")
        td2F.innerHTML = Elenco[libro].genere
        td2F.className = "table"
        trF.appendChild(td2F)

        let td3F = document.createElement("td")
        td3F.innerHTML = Elenco[libro].data
        td3F.className = "table"
        trF.appendChild(td3F)

        tb.appendChild(trF)
    }

    console.log(tb)
    tb.className = "tb"
    sectTabella.appendChild(tb);

    let selectLibri = document.getElementById("selectLibro")

    let opt = document.createElement("option")
    selectLibri.appendChild(opt)

    for(let libro in Elenco){
        let opt2 = document.createElement("option")
        opt2.innerHTML = libro
        selectLibri.appendChild(opt2)
    }
}

function creaTabella(){
    sectTabella = document.getElementById("sectTabella");
    sectTabella.className = "section"

    cancellaTable = document.querySelector("table");
    if (cancellaTable) {
        sectTabella.removeChild(cancellaTable);
    }

    tb = document.createElement("table");

    tr = document.createElement("tr");

    th1 = document.createElement("th");
    th1.innerHTML = "TITOLO";
    th1.className = "table"
    tr.appendChild(th1);

    th2 = document.createElement("th");
    th2.innerHTML = "GENERE";
    th2.className = "table"
    tr.appendChild(th2);

    th3 = document.createElement("th");
    th3.innerHTML = "DATA";
    th3.className = "table"
    tr.appendChild(th3);

    tb.appendChild(tr);
}

function aggiungi(){

    let verifica = false

    let titolo = document.getElementById("inputTitolo").value
    let genere = document.getElementById("inputGenere").value
    let data = document.getElementById("inputData").value

    if(titolo == ""){
        alert("INSERIRE IL TITOLO!")
        verifica = true
    }
    if(!verifica){
        if(genere == ""){
            alert("INSERIRE IL GENERE!")
            verifica = true
        }
    }
    if(!verifica){
        if(data == ""){
            alert("INSERIRE LA DATA!")
            verifica = true
        }
    }

    if(!verifica){
        let dataAnno = new Date()

        Elenco[titolo] = {
            genere: genere,
            data: dataAnno.getFullYear()
        }

        let cancellaTable = document.querySelector("table")
        cancellaTable.innerHTML = ""

        console.log(Elenco)
        alert("✅LIBRO AGGIUNTO CON SUCCESSO!")
        init()
    }
}

function ordinaData() {

    let elencoArray = [];
    for (let titolo in Elenco) {
        elencoArray.push({ titolo: titolo, genere: Elenco[titolo].genere, data: Elenco[titolo].data });
    }

    if(clickData == 0){
        for (let i = 0; i < elencoArray.length - 1; i++) {
            for (let j = 0; j < elencoArray.length - 1 - i; j++) {
                if (elencoArray[j].data < elencoArray[j + 1].data) {
                    let temp = elencoArray[j];
                    elencoArray[j] = elencoArray[j + 1];
                    elencoArray[j + 1] = temp;
                }
            }
        }
    }
    else if(clickData == 1){
        for (let i = 0; i < elencoArray.length - 1; i++) {
            for (let j = 0; j < elencoArray.length - 1 - i; j++) {
                if (elencoArray[j].data > elencoArray[j + 1].data) {
                    let temp = elencoArray[j];
                    elencoArray[j] = elencoArray[j + 1];
                    elencoArray[j + 1] = temp;
                }
            }
        }
    }

    creaTabella()

    for (let i = 0; i < elencoArray.length; i++) {
        let trF = document.createElement("tr");

        let td1F = document.createElement("td");
        td1F.innerHTML = elencoArray[i].titolo;
        td1F.className = "table";
        trF.appendChild(td1F);

        let td2F = document.createElement("td");
        td2F.innerHTML = elencoArray[i].genere;
        td2F.className = "table";
        trF.appendChild(td2F);

        let td3F = document.createElement("td");
        td3F.innerHTML = elencoArray[i].data;
        td3F.className = "table";
        trF.appendChild(td3F);

        tb.appendChild(trF);
    }

    tb.className = "tb";
    sectTabella.appendChild(tb);

    if(clickData == 0){
        clickData = 1
    }
    else if(clickData == 1){
        clickData = 0
    }
}

function ordinaNome(){
    let elencoArray = [];
    for (let titolo in Elenco) {
        elencoArray.push({ titolo: titolo, genere: Elenco[titolo].genere, data: Elenco[titolo].data });
    }

    if(clickNome == 0){
        for (let i = 0; i < elencoArray.length - 1; i++) {
            for (let j = 0; j < elencoArray.length - 1 - i; j++) {
                if (elencoArray[j].titolo < elencoArray[j + 1].titolo) {
                    let temp = elencoArray[j];
                    elencoArray[j] = elencoArray[j + 1];
                    elencoArray[j + 1] = temp;
                }
            }
        }
    }
    else if(clickNome == 1){
        for (let i = 0; i < elencoArray.length - 1; i++) {
            for (let j = 0; j < elencoArray.length - 1 - i; j++) {
                if (elencoArray[j].titolo > elencoArray[j + 1].titolo) {
                    let temp = elencoArray[j];
                    elencoArray[j] = elencoArray[j + 1];
                    elencoArray[j + 1] = temp;
                }
            }
        }
    }

    creaTabella()

    for (let i = 0; i < elencoArray.length; i++) {
        let trF = document.createElement("tr");

        let td1F = document.createElement("td");
        td1F.innerHTML = elencoArray[i].titolo;
        td1F.className = "table";
        trF.appendChild(td1F);

        let td2F = document.createElement("td");
        td2F.innerHTML = elencoArray[i].genere;
        td2F.className = "table";
        trF.appendChild(td2F);

        let td3F = document.createElement("td");
        td3F.innerHTML = elencoArray[i].data;
        td3F.className = "table";
        trF.appendChild(td3F);

        tb.appendChild(trF);
    }

    tb.className = "tb";
    sectTabella.appendChild(tb);

    if(clickNome == 0){
        clickNome = 1
    }
    else if(clickNome == 1){
        clickNome = 0
    }
}

function ordinaGenere(){
    let elencoArray = [];
    for (let titolo in Elenco) {
        elencoArray.push({ titolo: titolo, genere: Elenco[titolo].genere, data: Elenco[titolo].data });
    }

    if(clickGenere == 0){
        for (let i = 0; i < elencoArray.length - 1; i++) {
            for (let j = 0; j < elencoArray.length - 1 - i; j++) {
                if (elencoArray[j].genere < elencoArray[j + 1].genere) {
                    let temp = elencoArray[j];
                    elencoArray[j] = elencoArray[j + 1];
                    elencoArray[j + 1] = temp;
                }
            }
        }
    }
    else if(clickGenere == 1){
        for (let i = 0; i < elencoArray.length - 1; i++) {
            for (let j = 0; j < elencoArray.length - 1 - i; j++) {
                if (elencoArray[j].genere > elencoArray[j + 1].genere) {
                    let temp = elencoArray[j];
                    elencoArray[j] = elencoArray[j + 1];
                    elencoArray[j + 1] = temp;
                }
            }
        }
    }

    creaTabella()

    for (let i = 0; i < elencoArray.length; i++) {
        let trF = document.createElement("tr");

        let td1F = document.createElement("td");
        td1F.innerHTML = elencoArray[i].titolo;
        td1F.className = "table";
        trF.appendChild(td1F);

        let td2F = document.createElement("td");
        td2F.innerHTML = elencoArray[i].genere;
        td2F.className = "table";
        trF.appendChild(td2F);

        let td3F = document.createElement("td");
        td3F.innerHTML = elencoArray[i].data;
        td3F.className = "table";
        trF.appendChild(td3F);

        tb.appendChild(trF);
    }

    tb.className = "tb";
    sectTabella.appendChild(tb);

    if(clickGenere == 0){
        clickGenere = 1
    }
    else if(clickGenere == 1){
        clickGenere = 0
    }
}

var vettoreMail = []
var vettorePrestiti = {}

function aggiungiPrestito(){
    let mail = document.getElementById("inputUtente").value
    let libro = document.getElementById("selectLibro").value
    let durata = document.getElementById("selectDurata").value

    let verifica = verificaMail(mail)

    if(!verifica || libro == "" || durata == "")
        alert(`inserire tutti i dati necessari! 
            ATTENZIONE! la Mail deve contenere la seguente formula: 
            esempio@esempio.esempio`)
    else{
        vettoreMail.push(mail)
        console.log(vettoreMail)

        let dt = new Date()
        let data = dt.getDate() + "/" + (dt.getMonth()+1) + "/" + dt.getFullYear()
        console.log(data)
        let finePrestito
        if(durata == "1 mese")
            finePrestito =  dt.getDate() + "/" + (dt.getMonth()+2) + "/" + dt.getFullYear()
        if(durata == "3 mesi")
            finePrestito =  dt.getDate() + "/" + (dt.getMonth()+4) + "/" + dt.getFullYear()
        if(durata == "6 mesi")
            finePrestito =  dt.getDate() + "/" + (dt.getMonth()+7) + "/" + dt.getFullYear()
        if(durata == "12 mesi")
            finePrestito =  dt.getDate() + "/" + (dt.getMonth()+1) + "/" + (dt.getFullYear()+1)

        vettorePrestiti[mail] = {
            prestito: libro,
            inizio: data,
            fine: finePrestito
        }
        console.log(vettorePrestiti)

        let ulPrestiti = document.getElementById("elencoPrestiti")

        let ul = document.createElement("ul")

        for(let key in vettorePrestiti){
            let li = document.createElement("li")

            li.innerHTML = key + " - " + vettorePrestiti[key].prestito + " - inizio prestito: " + vettorePrestiti[key].inizio + " - fine prestito: " + vettorePrestiti[key].fine
            ul.appendChild(li)
        }

        ulPrestiti.appendChild(ul)
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