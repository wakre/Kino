// function til kigpBillett

function regBillett() {

    const billett = {
        film: $("#velgFilm").val(),
        antall: $("#antallet").val(),
        fornavn: $("#fornavnet").val(),
        etternavn: $("#etternavnet").val(),
        telefon: $("#telefonnr").val(),
        epost: $("#epost").val()
    }

    $.post('/lagre', billett, function () {
        hentAlle();
    });

        const Fornavn = document.getElementById("fornavnet").value;
        const Etternavn = document.getElementById("etternavnet").value;
        const Telefonnr = document.getElementById("telefonnr").value;
        const Epost = document.getElementById("epost").value;
        const Antall = document.getElementById("antallet").value;

        if (Fornavn === "") {
            document.getElementById("fornavnetFeil").innerHTML = "Skriv inn Fornavn";
            return;
        } else {
            document.getElementById("fornavnetFeil").innerHTML = "";
        }
        if (Etternavn === "") {
            document.getElementById("etternavnetFeil").innerHTML = "Skriv inn Etternavn";
            return;
        } else {
            document.getElementById("etternavnetFeil").innerHTML = "";
        }
        if (Antall === "") {
            document.getElementById("antalletFeil").innerHTML = "Skriv inn Antall";
            return;
        } else {
            document.getElementById("antalletFeil").innerHTML = "";
        }
    if (Telefonnr === "") {
        document.getElementById("telefonnrFeil").innerHTML = "Skriv inn Telefonnr";
        return;
    } else {
        document.getElementById("telefonnrFeil").innerHTML = "";
    }
    if (Epost === "") {
        document.getElementById("epostFeil").innerHTML = "Skriv inn Epost";
        return;
    } else {
        document.getElementById("epostFeil").innerHTML = "";
    }

            // Clear input fields after successful submission
            document.getElementById("fornavnet").value = "";
            document.getElementById("etternavnet").value = "";
            document.getElementById("antallet").value = "";
            document.getElementById("telefonnr").value = "";
            document.getElementById("epost").value = "";


}
function hentAlle() {
    $.get("/hentAlle", function (billettene) {
        skriveut(billettene);
    });
}

function skriveut(liste) {
    let print = '';
    for (billett of liste) {
        print += "<tr>" +
            "<td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefon + "</td>" +
            "<td>" + billett.epost + "</td>" +
            "<td>" + billett.film + "</td>" +
            "<td>" + billett.antall + "</td>" +
            "</tr>";
    }
    let ut = "<table class='table table-bordered table-striped'><tr>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "</tr>" + print + "</table>";

    $("#skriveut").html(ut); // Update the HTML content of #skriveut
}
// To delete tickets
function slettBillettene() {
    $.get("/slettAlle", function () {
        hentAlle(); // Fetch all tickets again after deleting
    })
}
