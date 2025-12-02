var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("ocupacion");

var esMasculino = true

perfilCard.onclick = function() {
    if (esMasculino) 
    nombre.textcontent = "Omarcita";
    ocupacion.textcontent = "Estudiante Universitaria y jugadora de basketball";
} else {
    nombre.textcontent = "Omar";
    ocupacion.textcontent = "Estudiante Universitario y jugador de basketball";
}
