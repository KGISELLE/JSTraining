//La distancia de frenado d1 es la distancia que recorre un vehículo desde el momento en que frena hasta que se detiene por completo. Depende de la velocidad original vy del coeficiente de fricción muentre los neumáticos y la superficie de la carretera.

//La distancia de frenado es uno de los dos componentes principales de la distancia total de frenado. El otro componente es la distancia de reacción, que es el producto de la velocidad y el tiempo de percepción-reacción del conductor.

//La energía cinética E es 0.5*m*v**2, el trabajo W dado por el frenado es mu*m*g*d1. Igualar E y W da la distancia de frenado: d1 = v*v / 2*mu*gdonde gestá la gravedad de la Tierra y mla masa del vehículo.

//Tenemos ven km por hora, gcomo 9.81 m/s/sy en lo que sigue suponemos que el tiempo de reacción es constante e igual a 1 s. El coeficiente mues adimensional.

//**Tareas.
//El primero es calcular la distancia total de parada en metros dados v( mu y el tiempo de reacción t = 1).

//dist(v, mu) -> d = total stopping distance

//La segunda tarea es calcular ven km por hora sabiendo den metros y mu suponiendo que el tiempo de reacción es todavía t = 1.

//speed(d, mu) -> v such that dist(v, mu) = d.

//**Examples:
//ist(100, 0.7) -> 83.9598760937531

//speed(83.9598760937531, 0.7) -> 100.0

//**Notes:
//Recuerda convertir la velocidad de km/h a m/s o de m/s en km/h cuando sea necesario.

//No olvides el tiempo de reacción t:t = 1

//No trunque ni redondee sus resultados. Consulte en "EJECUTAR PRUEBAS DE MUESTRA" la función assertFuzzyEqualso dotest or ....

//Shell: solo distse prueba.


function dist(v, mu) {								// suppose reaction time is 1
    // your code
}

function speed(d, mu) {								// suppose reaction time is 1
    // your code
}