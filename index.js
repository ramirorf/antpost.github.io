

function comprobar() {
    var anterior = parseInt(document.getElementsByName("anterior")[0].value);
    var numero = parseInt(document.getElementsByName("numero")[0].value);
    var posterior = parseInt(document.getElementsByName("posterior")[0].value);

    var check = ((anterior+1) == numero) && ((numero+1) == posterior);

    document.body.classList.add(check ? "bien" : "mal");
    document.body.classList.remove(!check ? "bien" : "mal");
}