import React, { useState } from 'react';
import Productos from './productos.js';
import './Accesorios.css'

function Accesorios({cantidadProductos}) {
  const [carrito, setCarrito] = useState([]);

  const accesorios = Productos.filter(producto => producto.categoria === 'Accesorios');

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const restarProducto = (producto) => {
    const productoIndex = carrito.findIndex(item => item.idx === producto.idx);
    if (productoIndex !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(productoIndex, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <div>
      <h1>Accesorios</h1>
      {accesorios.map(producto => (
        <div key={producto.idx}>
          <img src={producto.imagen1} alt={producto.titulo} width={600} />
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <div className="contenedor-botones">
            <button onClick={() => agregarProducto(producto)}>+</button>
            <button onClick={() => restarProducto(producto)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accesorios;
