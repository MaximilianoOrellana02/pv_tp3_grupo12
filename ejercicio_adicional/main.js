let productos = [
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Webcam", precio: 20000 }
  ];
  
  const salida = document.getElementById("salida");

  function mostrarProductos() {
    mostrarProductosLista(productos);
  }
  function mostrarProductosLista(arr) {
    salida.textContent = arr.map(p =>
      `Producto: ${p.descripcion} - Precio: $${p.precio}`
    ).join("\n");
  }
  
  function filtrarMayorA20() {
  const filtrados = productos.filter(p => p.precio > 20);
  mostrarProductosLista(filtrados);
}
  
function calcularIVA() {
    const conIVA = productos.map(p => ({
      descripcion: p.descripcion,
      precio: (p.precio * 1.21).toFixed(2)
    }));
    mostrarProductosLista(conIVA);
  }
  
  function ordenarPorPrecio() {
    productos.sort((a, b) => a.precio - b.precio);
    mostrarProductosLista(productos);
  }
  
  function agregarProducto() {
    productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
    mostrarProductosLista(productos);
  }
  
  function eliminarMasBarato() {
    const index = productos.reduce((minIndex, p, i, arr) =>
      p.precio < arr[minIndex].precio ? i : minIndex, 0
    );
    productos.splice(index, 1);
    mostrarProductosLista(productos);
  }