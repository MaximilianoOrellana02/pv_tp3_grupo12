import React, { useState } from "react";

function App () {

  const [productos, setProductos] = useState([
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Mouse", precio: 25000 },
    { descripcion: "Monitor", precio: 100000 },
    { descripcion: "Parlantes", precio: 60000 },
  ]);


  const mostrarProductos = () => {
    productos.forEach((producto) => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
  };

  const productosFiltrados = productos.filter((producto) => producto.precio > 20);


  const productosConIva = productos.map((producto) => ({
    ...producto,
    precio: producto.precio * 1.21,
  }));

  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);

  const agregarProducto = () => {
    setProductos([...productos, { descripcion: "Parlante Bluetooth", precio: 59000.90 }]);
  };

  const eliminarProductoMasBarato = () => {
    const productosOrdenadosPorPrecio = [...productos].sort((a, b) => a.precio - b.precio);
    productosOrdenadosPorPrecio.shift();
    setProductos(productosOrdenadosPorPrecio);
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <button onClick={mostrarProductos}>Mostrar en Consola</button>
      <button onClick={agregarProducto}>Agregar Producto</button>
      <button onClick={eliminarProductoMasBarato}>Eliminar Más Barato</button>

      <h2>Productos Ordenados por Precio</h2>
      <ul>
        {productosOrdenados.map((producto, index) => (
          <li key={index}>
            {producto.descripcion} - ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Productos con IVA</h2>
      <ul>
        {productosConIva.map((producto, index) => (
          <li key={index}>
            {producto.descripcion} - ${producto.precio.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;