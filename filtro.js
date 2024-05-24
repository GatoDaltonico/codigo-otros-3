// Lista de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const listaDeProductos = document.getElementById("lista-de-productos");
const input = document.querySelector('.input');

// Función para mostrar los productos
const displayProductos = (productos) => {
  // Limpia la lista de productos antes de mostrar los nuevos
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }
  // Añade los productos a la lista
  productos.forEach(producto => {
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    listaDeProductos.appendChild(d);
  });
}

// Mostrar todos los productos inicialmente
displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = input.value.toLowerCase();  // Convertir el texto a minúsculas para comparación
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
}

// Función de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}
