const productos = [
    { nombre: 'fideo', precio: 30 },
    { nombre: 'Arroz', precio: 60 },
    { nombre: 'Aceite', precio: 80 },
    { nombre: 'Harina', precio: 25 }
  ];
  const productosCaros = productos.filter(producto => producto.precio > 25);
  const preciosProductosCaros = productosCaros.map(producto => producto.precio);
  const precioTotal = preciosProductosCaros.reduce((acumulador, precio) => acumulador + precio, 0);
  
  console.log(productosCaros); 
  console.log("Precio total de los productos caros: $" + precioTotal); 

