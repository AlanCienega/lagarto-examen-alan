/**
 * Se encuentra a 6 metros en un pozo
 * Escala 3 metros durante el día y cae 1 metro
 * Factor fatiga: 0.3m menos que en el día anterior
 * H = 0 es fin de la entrada, los números pueden ser del 0 al 100
 * U = distancia en metros que el lagarto puede escalar por día
 * D = el declive o cuánto resbala por la noche
 * F = fatiga del 10%
 * 
 * IMPORTANTE: Si el lagarto intentara avanzar una distancia negativa, quiere decir
 * que está muy fatigado o es una entrada incorrecta, y se movería en reversa
 */


// Función que acepta las 4 entradas


const gator = (H, U, D, F) => {
  if (H === 0) {
    return `Success on day 0`
  }
  // iniciar en el dia 0
  let day = 0;
  // inicializar la altura en cero (el fondo del pozo)
  let currentHeigth = 0;
  // definir el factor fatiga constante
  const FATIGUE_FACTOR = U * (F / 100)
  /**
   * Repetir hasta que encuentre la solución, exitosa o fallida.
   * Después, detener la ejecución cuando encuentre alguna respuesta y retornarla inmediatamente.
   */

  while (true) {
    // avanzar un día
    day++;
    // Escalar U (Up direction) distancia
    currentHeigth += U;
    // Verificar si sale; entonces se determina como exitoso (si mi altura actual es mayor a H (altura))
    // Imprimimos un mensaje y concatenamos el día

    if (currentHeigth > H) {
      return `Success on day ${day}`
    }

    // Caer D (Down direction) distancia
    currentHeigth -= D
    // Verificar si ha vuelto al fondo; en ese caso, se retorna fallido
    if (currentHeigth < 0) {
      return `Failure on day ${day}`
    }

    // Aplicar fatiga después de un ciclo completo
    U -= FATIGUE_FACTOR;

  }
}

console.log(gator(6, 3, 1, 10));
console.log(gator(10, 2, 1, 50));
console.log(gator(50, 5, 3, 14));
console.log(gator(50, 6, 4, 1));
console.log(gator(50, 6, 3, 1));
console.log(gator(1, 1, 1, 1));
console.log(gator(0, 0, 0, 0));
