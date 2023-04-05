let precios = [1045.0,234,456.98,238.98,3455,234,1045.0,234]

// SUMA TOTAL PRECIOS

let precioTotal = precios.reduce((a, b) => a + b, 0);
console.log(`El precio total es: ${precioTotal}`);

// PROMEDIO

let promedio = precioTotal / precios.length
console.log(`El promedio es: ${promedio}`)

// VALOR MAXIMO

let valorMaximo = Math.max(...precios)
console.log(`El valor maximo es: ${valorMaximo}`)

// MODA

    function calcularModa(datos) {

        datos.sort((a, b) => a - b);

                let frecuencias = {};
        for (let i = 0; i < datos.length; i++) {
          let valor = datos[i];
          frecuencias[valor] = (frecuencias[valor] || 0) + 1;
        }

        let moda;
        let frecuenciaMaxima = 0;
        for (let valor in frecuencias) {
          let frecuencia = frecuencias[valor];
          if (frecuencia > frecuenciaMaxima) {
            moda = [valor];
            frecuenciaMaxima = frecuencia;
          } else if (frecuencia === frecuenciaMaxima) {
            moda.push(valor);
          }
        }

        console.log(`El numero que se repite es: ${moda} y las veces: ${frecuenciaMaxima}`)
      }

calcularModa(precios)

//SUMA PRECIOS MENORES A 1500

let menores_a_1500 = []

for(i=0; i < precios.length; i++){
    if(precios[i] <= 1500){
       menores_a_1500.push(precios[i])
    }
}

let suma_menores_a_1500 = menores_a_1500.reduce((a, b) => a + b, 0);
console.log(`La suma de precios menores a 1500 es :${suma_menores_a_1500}`)
