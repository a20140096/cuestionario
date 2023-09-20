var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:")
var c = 0;
var i = 0;
var p1 = prompt("Como se llama al primer dia de la Primavera?\nA: Primer dia de la primavera\nB: Equinoccio de primavera\nC:  Equinocio de invierno");
if (p1 =="B"){
    c = c + 1;
}else{
i = i + 1;
}
var p1 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Septiembre\nB: Junio\nC: Marzo");
if (p1 =="B"){
    c = c + 1;
}else{
i = i + 1;
}
var p1 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA: La navidad \nB: El año nuevo\nC:  Fiestas patrias en china");
if (p1 =="B"){
    c = c + 1;
}else{
i = i + 1;
}
var p1 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC:   6 meses de alternancia de luz y oscuridad");
if (p1 =="B"){
    c = c + 1;
}else{
i = i + 1;
}

if(c > i){
    document.write(nombre +", has superado con exito la trivia: <br>")
    document.write("Respuestas correctas: "+c+" <br>");
    document.write("Respuestas incorrectas: "+i);
}else{
    document.write(nombre +", Puedes hacerlo mejor <br>")
    document.write("Respuestas incorrectas: "+c+" <br>");
    document.write("Respuestas incorrectas: "+i);
}
