window.onload = init

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
}

function init(){
    let sectTabella = document.getElementById("sectTabella");
    sectTabella.className = "section"

    let tb = document.createElement("table");

    let tr = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.innerHTML = "TITOLO";
    th1.className = "table"
    tr.appendChild(th1);

    let th2 = document.createElement("th");
    th2.innerHTML = "GENERE";
    th2.className = "table"
    tr.appendChild(th2);

    let th3 = document.createElement("th");
    th3.innerHTML = "DATA";
    th3.className = "table"
    tr.appendChild(th3);

    tb.appendChild(tr);

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
}

function aggiungi(){
    let titolo = document.getElementById("inputTitolo").value
    let genere = document.getElementById("inputGenere").value
    let data = document.getElementById("inputData").value

    Elenco[titolo] = {
        genere: genere,
        data: data
    }

    let sectTabella = document.getElementById("sectTabella");
    sectTabella = ""

    console.log(Elenco)
    init()

}