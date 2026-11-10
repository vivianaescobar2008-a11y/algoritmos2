    function saludaraprendices () {


  let aprendices = [ "juan cedeño, jhonatan gaitan, julian vargas, yen montoya, evelyn quiñones, juan alayon, davis rojas, andres martinez, juan tinoco, kevin pulgar, mariana virgues, danny robles, juan luna, cesar sierra, juan amarillo, david murillo, felipe leon, esteban barbosa, david benavides, erika escobar, erith gomez, paula triana, jose galindez, andres guillen, angely gonzalez, yojan tribiño" ];
  for (let i = 0; i < aprendices.length; i++) {
      console.log("Hola "+ aprendices[i]);
  }
  console.log("Primer aprendiz del arreglo:");
  console.log(aprendices[1]);
  console.log("Tercer aprendiz del arreglo:");
  console.log(aprendices[3]);
  console.log("Ultimo estudiante con length:")
  console.log(aprendices[aprendices.length - 1]);
  console.log("Cantidad de estudiantes en el arreglo");
  console.log(aprendices.length);
  console.log("Recorre el arreglo con for y muestra a los aprendices junto a su posción:")
  for (let i = 0; i < aprendices.length; i++) {
      console.log(`Posición [${i}]: ${aprendices[i]}`);
  }
  
  // Solicitar el nombre de un nuevo aprendiz al usuario mediante una ventana emergente
      let nuevoAprendiz = prompt("Por favor, ingresa el nombre del nuevo aprendiz:");
      
  // Agregar el aprendiz solicitado al final del arreglo con push()
      aprendices.push(nuevoAprendiz);

      // Mostrar nuevamente la cantidad de aprendices
      console.log("Cantidad de aprendices en el arreglo (después de agregar uno):");
      console.log(aprendices.length);
      
      // Consultar si un aprendiz específico se encuentra registrado
      let aprendizBuscado = "Erika";
      console.log(`¿El aprendiz "${aprendizBuscado}" se encuentra registrado?:`);
      console.log(aprendices.includes(aprendizBuscado));
      
      // Mostrar el listado actualizado
      console.log("Listado actualizado de aprendices:");
      console.log(aprendices);
  }


function AdministracionDeProductos(){


  console.log("Crear un arreglo con cinco nombres de productos");
  let productos = ["Camiseta", "Pantalon", "Zapatos", "Gorra", "Chaqueta"];

  console.log("Mostrar los productos registrados");
  console.log("Productos registrados:");
  console.log(productos);

  console.log("Modificar el segundo producto");
  productos[1] = "Pantalon Jean";
  console.log("Segundo producto modificado:");
  console.log(productos);

  console.log("Agregar un producto al final utilizando push");
  productos.push("Medias");
  console.log("Producto agregado al final (push):");
  console.log(productos);

  console.log("Agregar un producto al inicio utilizando unshift");
  productos.unshift("Bufanda");
  console.log("Producto agregado al inicio (unshift):");
  console.log(productos);

  console.log("Mostrar el arreglo actualizado");
  console.log("Arreglo actualizado:");
  console.log(productos);

  console.log("Solicitar al usuario el nombre de un producto y verificar si está registrado");
  let productoBuscado = prompt("Ingrese el nombre de un producto para buscar:");
  let existe = productos.includes(productoBuscado);

  console.log("Búsqueda de producto:");
  if (existe) {
      console.log(`El producto "${productoBuscado}" SÍ está registrado.`);
  } else {
      console.log(`El producto "${productoBuscado}" NO está registrado.`);
  }

  console.log("Mostrar la posición del producto encontrado");
  let posicion = productos.indexOf(productoBuscado);
  if (posicion !== -1) {
      console.log(`Se encuentra en la posición (índice): ${posicion}`);
  } else {
      console.log("No se puede mostrar la posición porque no existe.");
  }

  console.log("Modificar el nombre de otro producto indicando su posición");
  productos[3] = "Zapatos Deportivos";
  console.log("Producto modificado por posición (índice 3):");
  console.log(productos);

  console.log("Eliminar el último producto utilizando pop");
  let productoEliminado = productos.pop();
  console.log("Último producto eliminado (pop):");
  console.log(`Se eliminó: ${productoEliminado}`);
  console.log(productos);

  console.log("Mostrar la cantidad de productos disponibles y el listado final");
  console.log("=== RESULTADO FINAL ===");
  console.log(`Cantidad de productos disponibles: ${productos.length}`);
  console.log("Listado final de productos:");
  console.log(productos);
}
function EliminacionDeElementos(){

        // Arreglo con seis ciudades de Colombia
    let ciudades = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Bucaramanga"];
    console.log("Arreglo inicial:", ciudades);

    // 1. Eliminar la última ciudad con pop()
    let ultima = ciudades.pop();
    console.log("Ciudad eliminada con pop():", ultima);

    // 2. Mostrar el arreglo actualizado
    console.log("Después de pop():", ciudades);

    // 3. Eliminar la primera ciudad con shift()
    let primera = ciudades.shift();
    console.log("Ciudad eliminada con shift():", primera);

    // 4. Mostrar nuevamente el arreglo
    console.log("Después de shift():", ciudades);

    // 5. Eliminar el elemento del tercer índice con splice()
    //    splice(posición, cantidad de elementos a eliminar)
    let removidas = ciudades.splice(3, 1);
    console.log("Ciudad eliminada con splice():", removidas);

    // 6. Mostrar el resultado final
    console.log("Después de splice():", ciudades);

    // 7. Agregar dos ciudades nuevas
    ciudades.push("Pereira", "Manizales");
    console.log("Después de agregar dos ciudades:", ciudades);

    // 8. Consultar cuántas ciudades quedaron con length
    console.log("Cantidad de ciudades registradas:", ciudades.length);

    // 9. Recorrer con for y enumerar desde la posición 1
    for (let i = 0; i < ciudades.length; i++) {
    console.log((i + 1) + ". " + ciudades[i]);
    }

    // 10. Verificar si una ciudad específica está en el arreglo
    let buscada = prompt("¿Qué ciudad desea buscar?");
    if (ciudades.includes(buscada)) {
    console.log(`La ciudad "${buscada}" SÍ se encuentra en el arreglo.`);
    } else {
    console.log(`La ciudad "${buscada}" NO se encuentra en el arreglo.`);
    }

}

function BusquedaDeEstudinates(){

    // Arreglo con ocho estudiantes
let estudiantes = ["Ana", "Luis", "Carlos", "María", "Juan", "Andrea", "Pedro", "Laura"];

// Función que busca un estudiante y muestra el resultado
function buscarEstudiante(nombre) {
  // 2. Verificar si existe con includes()
  if (estudiantes.includes(nombre)) {
    // 3. Obtener la posición con indexOf()
    let posicion = estudiantes.indexOf(nombre);

    // 4 y 5. Mensaje de encontrado y su posición
    console.log(`El estudiante "${nombre}" fue encontrado en la posición ${posicion}.`);
    return true;
  } else {
    // 4. Mensaje de no encontrado
    console.log(`El estudiante "${nombre}" NO fue encontrado.`);
    return false;
  }
}

  // 1. Solicitar el nombre de un estudiante y buscarlo
  let nombre1 = prompt("Ingrese el nombre del estudiante a buscar:");
  let encontrado1 = buscarEstudiante(nombre1);

  // 6. Solicitar un segundo nombre y hacer una nueva búsqueda
  let nombre2 = prompt("Ingrese otro nombre para buscar:");
  let encontrado2 = buscarEstudiante(nombre2);

  // 7. Contar cuántos nombres comienzan por una letra determinada
  let letra = prompt("Ingrese una letra para contar los nombres que empiezan por ella:");
  let contador = 0;
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i][0].toLowerCase() === letra.toLowerCase()) {
      contador++;
    }
  }
  console.log(`Estudiantes cuyo nombre empieza por "${letra}": ${contador}`);

  // 8. Mostrar todos los nombres con un recorrido for
  console.log("Listado de estudiantes:");
  for (let i = 0; i < estudiantes.length; i++) {
    console.log(i + ": " + estudiantes[i]);
  }

  // 9. Permitir agregar un estudiante nuevo si no está registrado
  let nuevo = prompt("Ingrese el nombre de un estudiante nuevo para agregar:");
  if (estudiantes.includes(nuevo)) {
    console.log(`"${nuevo}" ya está registrado, no se agrega.`);
  } else {
    estudiantes.push(nuevo);
    console.log(`"${nuevo}" fue agregado correctamente.`);
  }

  // 10. Mostrar el listado actualizado y la cantidad total
  console.log("Listado actualizado:", estudiantes);
  console.log("Cantidad total de estudiantes:", estudiantes.length);

}

function AnalisisDeNumeros(){

    // Arreglo con diez números enteros
let numeros = [12, -5, 8, 0, 23, -14, 7, 0, 30, -2];

// 1 y 2. Recorrer con for y mostrar todos los números
console.log("Números del arreglo:");
for (let i = 0; i < numeros.length; i++) {
  console.log(`Posición ${i}: ${numeros[i]}`);
}

// 3. Suma de los elementos
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("Suma:", suma);

// 4. Promedio
let promedio = suma / numeros.length;
console.log("Promedio:", promedio);

// 5. Contar pares e impares
let pares = 0;
let impares = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log("Pares:", pares, "| Impares:", impares);

// 6. Número mayor y menor
let mayor = numeros[0];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) mayor = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
}
console.log("Mayor:", mayor, "| Menor:", menor);

// 7. Contar positivos, negativos y ceros
let positivos = 0;
let negativos = 0;
let ceros = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) {
    positivos++;
  } else if (numeros[i] < 0) {
    negativos++;
  } else {
    ceros++;
  }
}
console.log("Positivos:", positivos, "| Negativos:", negativos, "| Ceros:", ceros);

// 8. Mostrar solo los números mayores que el promedio
console.log("Números mayores que el promedio (" + promedio + "):");
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > promedio) {
    console.log(numeros[i]);
  }
}

// 9. Solicitar un número y verificar si está en el arreglo
let buscado = parseInt(prompt("Ingrese un número para buscar:"));
if (numeros.includes(buscado)) {
  console.log(`El número ${buscado} SÍ está en el arreglo (posición ${numeros.indexOf(buscado)}).`);
} else {
  console.log(`El número ${buscado} NO está en el arreglo.`);
}

// 10. Orden inverso con reverse()
// Se usa una copia ([...numeros]) porque reverse() modifica el arreglo original
let inverso = [...numeros].reverse();
console.log("Orden inverso:", inverso);

// 11. Orden de menor a mayor con sort() y función de comparación
let ordenado = [...numeros].sort(function (a, b) {
  return a - b;
});
console.log("Ordenado de menor a mayor:", ordenado);

// 12. Mostrar el arreglo original y el resumen de resultados
console.log("Arreglo original:", numeros);
console.log("Resumen:", {
  suma: suma,
  promedio: promedio,
  pares: pares,
  impares: impares,
  mayor: mayor,
  menor: menor,
  positivos: positivos,
  negativos: negativos,
  ceros: ceros
});
}

function gestionMaterias() {
    
    //arreglo que almacene al menos ocho elementos relacionados con el contexto
    let materiasEduTrace = ["Matemáticas","Física","Español","Biología","Inglés","Sociales","Química","Informática"];
    console.log("Arreglo inicial de materias");

    console.log("MOSTRAR ELEMENTOS Y CONSULTAR POR ÍNDICE");
    // 2. Mostrar todos los elementos registrados y consultar elementos mediante su índice
    console.log("Primera materia (Índice 0):");
    console.log(materiasEduTrace[0]);
    
    console.log("Tercera materia (Índice 2):");
    console.log(materiasEduTrace[2]);

    console.log("CANTIDAD DE ELEMENTOS CON length");
    // 3. Mostrar la cantidad de elementos almacenados utilizando length
    console.log("Total de materias registradas en el plan de estudios:");
    console.log(materiasEduTrace.length);

    console.log("RECORRIDO DEL ARREGLO CON BUCLE FOR");
    // 4. Recorrer el arreglo utilizando un bucle y presentar la información de cada elemento
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posición [${i}]: ${materiasEduTrace[i]}`);
    }
    }


  function gestionMterias() {
    
    //arreglo que almacene al menos ocho elementos relacionados con el contexto
    let materiasEduTrace = ["Matemáticas","Física","Español","Biología","Inglés","Sociales","Química","Informática"];
    console.log("Arreglo inicial de materias");

    console.log("MOSTRAR ELEMENTOS Y CONSULTAR POR ÍNDICE");
    // 2. Mostrar todos los elementos registrados y consultar elementos mediante su índice
    console.log("Primera materia (Índice 0):");
    console.log(materiasEduTrace[0]);
    
    console.log("Tercera materia (Índice 2):");
    console.log(materiasEduTrace[2]);

    console.log("CANTIDAD DE ELEMENTOS CON length");
    // 3. Mostrar la cantidad de elementos almacenados utilizando length
    console.log("Total de materias registradas en el plan de estudios:");
    console.log(materiasEduTrace.length);

    console.log("RECORRIDO DEL ARREGLO CON BUCLE FOR");
    // 4. Recorrer el arreglo utilizando un bucle y presentar la información de cada elemento
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posición [${i}]: ${materiasEduTrace[i]}`);
    }

    console.log("AGREGAR NUEVOS ELEMENTOS (push / unshift)");
    // 5. Permitir agregar nuevos elementos al arreglo utilizando push() o unshift()
    materiasEduTrace.push("Ética y Valores");
    materiasEduTrace.unshift("Filosofía");
    console.log("Materias actualizadas tras agregar elementos al inicio y al final:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posición [${i}]: ${materiasEduTrace[i]}`);
    }

    console.log("MODIFICAR UN ELEMENTO EXISTENTE");
    // 6. Modificar un elemento existente indicando su posición
    console.log("Antes de modificar en el índice 3:");
    console.log(materiasEduTrace[3]);
    
    materiasEduTrace[3] = "Biología Avanzada";
    
    console.log("Después de modificar en el índice 3:");
    console.log(materiasEduTrace[3]);

    // 7. Eliminar elementos utilizando pop(), shift() o splice()
    let eliminadoPop = materiasEduTrace.pop();
    console.log("Materia eliminada del final con pop():");
    console.log(eliminadoPop);

    let eliminadoShift = materiasEduTrace.shift();
    console.log("Materia eliminada del inicio con shift():");
    console.log(eliminadoShift);

    let eliminadoSplice = materiasEduTrace.splice(2, 1);
    console.log("Materia eliminada en el índice 2 con splice():");
    console.log(eliminadoSplice[0]);

    // 8. Implementar una búsqueda utilizando includes() o indexOf()
    let materiaBuscada = "Física";
    let existeMateria = materiasEduTrace.includes(materiaBuscada);
    
    console.log(`¿La materia "${materiaBuscada}" se encuentra registrada?:`);
    console.log(existeMateria);
    
    if (existeMateria) {
        let posicionEncontrada = materiasEduTrace.indexOf(materiaBuscada);
        console.log("Su posición exacta (índice) es:");
        console.log(posicionEncontrada);
    }

    // 9. Mostrar un listado actualizado después de realizar las operaciones
    console.log("Listado final de materias activas:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`${i + 1}. ${materiasEduTrace[i]}`);
    }

    // 10. Incorporar al menos dos funcionalidades adicionales que aporten valor
    console.log("Funcionalidad 1 - Cantidad total de materias vigentes:");
    console.log(materiasEduTrace.length);

    console.log("Funcionalidad 2 - Listado ordenado alfabéticamente (sort):");
    let materiasOrdenadas = [...materiasEduTrace].sort();
    for (let i = 0; i < materiasOrdenadas.length; i++) {
        console.log(`- ${materiasOrdenadas[i]}`);
    }
 }

// De arreglos a objetos 

function InventarioProductos(){

const producto = {

  nombre: "hp",
  marca: "portatil hp",
  precio: 2000000,
  cantidad: 50,
  }

  console.log(producto.nombre)
  console.log(producto.marca)
  console.log(producto.precio)
  console.log(producto.cantidad)

  console.log(producto)

}

function RegistroDeUnEstudiante (){

  let estudiante = {
  nombre: "erith",
  apellido: "gomez",
  edad:17,
  programaDeFormacion: " analisis y desarrollo de software ",
  numeroDeficha: 3593362,
  correoElectronico: "erithsantigo2009@gmail.com"
  }

  console.log(estudiante.nombre)
  console.log(estudiante.apellido)
  console.log(estudiante.edad)
  console.log(estudiante.programaDeFormacion)
  console.log(estudiante.correoElectronico)

  console.log(estudiante)
  
}

function RegistroDeUnProducto (){

  let producto={
  codigo: "123456789",
  nombre: " crema de peinar ",
  categoria: "productos de cuidado capilar",
  precio: 15000,
  cantidadDisponible: 10

 }

 console.log(producto)
 let informacion;
 informacion=producto.precio*producto.cantidadDisponible,
 console.log("se modifico el precio del producto");
 console.log("se actualiza la cantidad disponible");
 producto.precio=20000;
 console.log(producto.precio);
 producto.marca == "nutribela";
 mostrarInformacion: producto.codigo,producto.nombre,producto.categoria,producto.precio,producto.cantidadDisponible;



}

function GestionarPersona(){

  const persona = {
    nombre: "erika",
    edad: "18",
    genero: " femenino",
    saludar: function(){
      console.log (" hola,soy "+ this.nombre + " y tengo " + this.edad );

    }
  }

  persona.saludar();
}
 
function GestionarProductos(){

  const producto={
    nombre:" teclado ",
    precio: 320000,
    cantidad: 26,

      mostrarInfo: function(){
      console.log( " el nombre del producto: " + this.nombre);
      console.log( " el precio del producto: " + this.precio);
      console.log( " cantidad disponibles: " + this.cantidad);
      console.log( " el valor total de inventario es:" + this.precio*this.cantidad);    
    
    }
  }

  producto.mostrarInfo();
}

function GestionarEmpleado2 (){

  const empleado={
    nombre: prompt(" Ingrese su nombre "),
    cargo: prompt(" Ingrese su cargo"),
    diasTrabajados: parseFloat(prompt(" Ingrese los dias trabajados")),
    salarioMensual: parseFloat(prompt(" Ingrese su salario mensual")),
    porcentajeDescuento: 0.04,

    calcularSalario: function (){
    let salarioDia;
    let salarioSD; 
    
    salarioDia=this.salarioMensual/30;
    salarioSD=this.diasTrabajados*salarioDia;
    return parseInt(salarioSD);
    
  },
    
    calcularDescuento: function(){

    let descuento = ( this.calcularSalario() * this.porcentajeDescuento)/100;
    return parseInt(descuento);

  },

  calcularTotalapagar: function () {

    let total = this.calcularSalario() - this.calcularDescuento();

    alert(" El total a pagar sin descuento es de: " + this.calcularSalario());
    alert(" El total del descuento es de: " +  this.calcularDescuento());
    alert(" El total a pagar es de: " + total);

    }

  }
 empleado.calcularTotalapagar();

}

    function GestionarEmpleado (){

  const empleado={
    nombre: " Erika ",
    cargo: " estudiante ",
    diasTrabajados: 10 ,
    salarioMensual: 2500000,
    porcentajeDescuento: 0.04,

    calcularSalario: function (){
    let salarioDia;
    let salarioSD; 
    
    salarioDia=this.salarioMensual/30;
    salarioSD=this.diasTrabajados*salarioDia;
    return parseInt(salarioSD);
    
  },
    
    calcularDescuento: function(){

    let descuento = ( this.calcularSalario() * this.porcentajeDescuento)/100;
    return parseInt(descuento);

  },

  calcularTotalapagar: function () {

    let total = this.calcularSalario() - this.calcularDescuento();

    console.log(" El total a pagar sin descuento es de: " + this.calcularSalario());
    console.log(" El total del descuento es de: " +  this.calcularDescuento());
    console.log(" El total a pagar es de: " + total);

    }

  }
 empleado.calcularTotalapagar();

}

    
    
    