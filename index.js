
function comprobar() {
    // Obtener valores
    var anterior = parseInt(document.getElementsByName("anterior")[0].value);
    var numero = parseInt(document.getElementsByName("numero")[0].value);
    var posterior = parseInt(document.getElementsByName("posterior")[0].value);

    // comprobar la corrección
    var correcto = ((anterior+1) == numero) && ((numero+1) == posterior);

    // reflejar el resultado en el aspecto
    document.body.classList.add(correcto ? "bien" : "mal");
    document.body.classList.remove(!correcto ? "bien" : "mal");
    efectosResultado(correcto);
}

function efectosResultado(correcto) {
    var sufijoId = correcto ? "ok" : "ko";

    document.getElementById('audio-'+sufijoId).play();
    document.getElementById('image-'+sufijoId).classList.add('visible');
    setTimeout(function() { 
        document.getElementById('image-'+sufijoId).classList.remove('visible');
    } , 3000);
}
