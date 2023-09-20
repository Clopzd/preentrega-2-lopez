// Definimos las clases de cada articulo.

class articulo {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

// Articulos en venta.

const jaggermeifter = new articulo("Jaggermeifter", 15000, "Jagger-black.png");
const pampero = new articulo("Pampero", 20000, "Ron.png");
const blueLabel = new articulo("blueLabel", 250000, "JWPlatinum.png");

// Array de Stock.

const stock = [];

// Dinero disponible en cuenta

let dinero = 1000000;

//DOM

const dineroDisponible = document.querySelector("#dinero span");
dineroDisponible.innerText = dinero;
const stockDisponible = document.getElementById("stock");

// Function comprar articulos

function comprar(bebidas) {
  if (dinero - bebidas.precio >= 0) {
    stock.push(bebidas);
    dinero -= bebidas.precio;
    actualizarHTML();
  } else {
    alert(`No tienes dinero suficiente para comprar ${bebidas.nombre}.`);
  }
}

// Quitar Articulo

function quitar(nombreDelArticulo) {
  const articuloEncontrado = stock.find(
    (articulo) => articulo.nombre == nombreDelArticulo
  );

  if (articuloEncontrado) {
    // Actualizamos el dinero
    dinero += articuloEncontrado.precio;
    // Lo sacamos del stock
    const indice = stock.indexOf(articuloEncontrado);
    stock.splice(indice, 1);
    actualizarHTML();
  }
}

//Actualizar HTML, dinero y stock

function actualizarHTML() {
  stockDisponible.innerHTML = "";
  for (const bebidas of stock) {
    const indice = stock.indexOf(bebidas);
    const li = `<li onclick="quitar('${bebidas.nombre}')">
    <img src="images/${bebidas.imagen}" alt="${bebidas.imagen}"/>
    </li>`;

    stockDisponible.innerHTML += li;
  }
  dineroDisponible.innerText = dinero;
}
