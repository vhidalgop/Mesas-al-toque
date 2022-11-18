var boton = document.querySelector(".button")

function registrate (){
    var usuario, contraseña;

    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    if (usuario == "Leopoldo" && contraseña == "1234" ){
        location.assign("")
    }
    else if (usuario == "Luca" && contraseña == "1234" ){
        location.assign("")
    }
    else if (usuario == "Valen" && contraseña == "1234" ){
        location.assign("")
    }
    else if (usuario == "Pechu" && contraseña == "1234" ){
        location.assign("")
    }
    else if (usuario == "Gaston" && contraseña == "1234" ){
        location.assign("")
    }

}
boton.addEventListener("click", (e) =>{
    e.preventDefault();
    registrate();
})