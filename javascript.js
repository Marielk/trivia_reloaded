//pregunta para inciar
var start = onclick;
if (start= true) {
     alert("Quieres comenzar el juego?");
      
   } else { 
     prompt("Para jugar ingresa tu nombre");
    
   }


if (start= true) {
     alert("Empecemos!");
     
   } else { 
     alert("Laboratoria trivia", "Sera para la otra!"); 
    
    }

//preguntas cuestionario 
var answerOne = prompt("Cuanto dura el bootcamp?");
var counter = 0

switch (answerOne) {
  case '6 meses':
    alert('Muy bien!');
    counter++;
    break;

  case '3 meses':
    alert('Ojala! pero no, dura 6 meses');
    break;

  default:
    alert('Respuesta incorrecta');

}

var answerTwo = prompt("Cuantas egresadas tiene Laboratoria?");

switch (answerTwo) {
  case '+580':
    alert('Muy bien!');
    counter++;
    break;

  case '580':
    alert('Bien, pero son "+ de 580" inclusive');
    break;

  default:
    alert('Ups, te equivocaste');

}

var answerTree = prompt("Quien es Mariana Costa Checa?");

switch (answerTree) {
  case 'co-founder y CEO':
    alert('Eres seca!');
    counter++;
    break;

  case 'fundadora':
    alert('Tienes razon, pero ademas es nuestra CEO');
    break;

  default:
    alert('Mejor suerte la proxima :c');

}
if (counter=== 3){
  document.write("Perfecto! Sacaste el puntaje mas alto");
} else{ 
  document.write("Sigue estudiando, la proxima te ira mejor");
}
