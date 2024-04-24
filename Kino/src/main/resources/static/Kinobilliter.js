// function til kigpBillett

function kjøpBillett(){
    let feil = true;
    const billett = {
        velgFilm : $("#velgFilm").val(),
        fornavnet : $("#fornavn").val(),
        etternavnet : $("#etternavn").val(),
        telefonmeret : $("#telefonnr").val(),
        epost : $("#epost").val(),
        antall : $("#antall").val(),
    };

    if (billett.velgFilm === null) {
        $("#velgFeil").html("Du må velge minst et film");
        feil = false;
    }
    else {
        $("#velgFeil").html("");
    }

    if (billett.antall === "") {
        $("#antallFeil").html("Du må skrinet inn noe riktig antall");
        feil = false;
    } else {
        $("#antallFeil").html("");
    }

    if (billett.fornavn === "") {
        $("#fornavnFeil").html("Du må skrivet inn navnet");
        feil = false;
    } else {
        $("#fornavnFeil").html("");
    }

    if (billett.etternavn === "") {
        $("#etternavnFeil").html("Du må skrivet inn etternavnet");
        feil = false;
    } else {
        $("#etternavnFeil").html("");
    }

    if (billett.telefonnr === "" || isNaN(billett.telefonnr)){
        $("#telefonnrFeil").html("Du må skrivet inn telefonnummeret");
        feil = false;
    } else {
        $("#telefonnrFeil").html("");
    }

    if (billett.epost === "") {
        $("#epostFeil").html("Du må skrivet inn eposten");
        feil = false;
    } else {
        $("#epostFeil").text("");
    }

    if(feil){
        $.post("/lagre",billett, function() {
            hentAlle()
        });

        $("#etternavn").val(" ");
        $("#fornavn").val(" ");
        $("#velgFilm").val(" ");
        $("#antall").val(" ");
        $("#epost").val(" ");
        $("#telefonnr").val(" ");
    }
}

function hentAlle(){
    $.get("/hentAlle", function(billettene){
        skriveut(billettene);
    });
}

function skriveut(billettene) {
    let ut = "<table class='table table-striped'><tr> <th>Film </th><th> Antall  </th> <th>Fornavn </th>  <th>EtterNavn</th> " +
        " <th> TelefonNummer </th>  <th> E-posten </th> " + "</tr>";
    for (const k of billettene) {
        ut += "<tr> <td>" + k.velgFilm+ "</td>" +
            " <td> " + k.antall + "</td> " +
            "<td> " + k.fornavn + " </td>" +
            " <td> " + k.etternavn + " </td>" +
            "<td> " + k.telefonnr + " </td>" +
            "<td> " + k.epost + " </td></tr>"
    }
    ut +="</table>"

    if (billettene.length === 0){
        ut = " "
    }
    $("#skriveut").html(ut);
}

//for å slette biletter

function slettBillettene (){
    $.get("/slettAlle", function(){
        hentAlle();
    });

    //slett av feilMalding

    $("#velgFeil").html(" ");
    $("#antallFail").html(" ");
    $("#fornavnFeil").html(" ");
    $("#etternavnFeil").html(" ");
    $("#epostFeil").html(" ");
    $("#telefonnrFeil").html(" ");


}




















