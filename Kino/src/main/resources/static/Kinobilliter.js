// function til kigpBillett

function kjøpBillett(){
    let feil = true;
    const billett = {
        velgFilm : $("#velgFilm").val(),
        fornavnet : $("#fornavn").val(),
        etternavnet : $("#etternavn").val(),
        telefonnr : $("#telefonnr").val(),
        epost : $("#epost").val(),
        antall : $("#antall").val(),
    }
     $.post('/lagre', billett, function () {
        hentAlle();
    });
    const Fornavn = document.getElementById("fornavn").value;
    const Etternavn = document.getElementById("etternavn").value;
    const Telefonnr = document.getElementById("telefonnr").value;
    const Epost = document.getElementById("epost").value;
    /*  const Velgfilm = document.getElementById("velgFilm").value; */
    const Antall = document.getElementById("antall").value;

   if (Fornavn === "") {
        document.getElementById("Fornavnet").innerHTML = "Skriv inn Fornavn"
    } else {
        document.getElementById("Fornavnet").innerHTML = ""
    }
    if (Etternavn === "") {
        document.getElementById("Etternavnet").innerHTML = "Skriv inn Etternavn"
    } else {
        document.getElementById("Etternavnet").innerHTML = ""
    } 
    if (Antall === "") {
        document.getElementById("Antallet").innerHTML = "Skriv inn Antall"
    } else {
        document.getElementById("Antallet").innerHTML = ""
    }
    if (Telefonnr === "") {
        document.getElementById("Telefonnret").innerHTML = "Skriv inn Telefonnr"
    } else {
        document.getElementById("Telefonnret").innerHTML = ""
    }
    if (Epost === "") {
        document.getElementById("Epostet").innerHTML = "Skriv inn E-post"
    } else {
        document.getElementById("Epostet").innerHTML = ""
    }
   
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("antall").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";

function hentAlle(){
    $.get("/hentAlle", function(billettene){
        skriveut(billettene);
    });
}

function skriveut(billettene) {
     let print = '';
    for (billett of liste) {
        print += "<tr>" +
            "<td>" +billett.fornavn+ "</td>" +
            "<td>" +billett.etternavn+ "</td>" +
            "<td>" +billett.telefonnr+ "</td>" +
            "<td>" +billett.epost+ "</td>" +
            "<td>" +billett.film+ "</td>" +
            "<td>" +billett.antall+ "</td>" +
            "</tr>";
    
    }
    let ut = "<table class='table table-bordered table-striped'><tr>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefon</th>" +
        "<th>Epost</th>" +
        "<th>Film</th>" +
        "<th>Antall billetter</th>" +
        "</tr>" +print+ "</table>";

    $("#tabell").html(ut);
}

//for å slette biletter

function slettBillettene (){
    $.get("/slettAlle", function(){
        hentAlle();
    });
}




















