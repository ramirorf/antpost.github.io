

function comprobar() {
    var anterior = parseInt(document.getElementsByName("anterior")[0].value);
    var numero = parseInt(document.getElementsByName("numero")[0].value);
    var posterior = parseInt(document.getElementsByName("posterior")[0].value);

    var check = ((anterior+1) == numero) && ((numero+1) == posterior);

    document.body.classList.add(check ? "bien" : "mal");
    document.body.classList.remove(!check ? "bien" : "mal");

    if (check) {
        document.getElementById('audio-ok').play();
        document.getElementById('image-ok').classList.add('visible');
        setTimeout(function() { 
            document.getElementById('image-ok').classList.remove('visible');
        } , 3000);
    } else {
        document.getElementById('audio-ko').play();
        document.getElementById('image-ko').classList.add('visible');
        setTimeout(function() { 
            document.getElementById('image-ko').classList.remove('visible');
        } , 3000);
    }
}

