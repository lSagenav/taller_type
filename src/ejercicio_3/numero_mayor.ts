

function obtenerMayor(...args: number[]) {
  let mayor = args[0];
  for (let i = 1; i < args.length; i++) {
    if (args[i] > mayor) {
      mayor = args[i];
    }
  }
  return mayor;
}
console.log(obtenerMayor(3,7,8,45,67,1,345,90))