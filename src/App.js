import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  //Crear listado de productos
  //Nos va extraer 2  valores
  //Que es lo que es 
  //2 una funcion que ayuda a rescribir state setProductos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReacJS', precio: 50},
    { id: 2, nombre: 'Camisa VueJS', precio: 40},
    { id: 3, nombre: 'Camisa Node.js', precio: 30},
    { id: 4, nombre: 'Camisa Angular', precio: 20},
  ]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
     <Fragment>
       <Header
           titulo= 'Tienda virtual'
       />     

       <h1>Lista de productos</h1>
       {productos.map(producto => (
         <Producto 
           key={producto.id}
           producto={producto}
         />
       ))

       }
       <Footer
         fecha={fecha}
       />
     </Fragment>
  );
}

export default App;
