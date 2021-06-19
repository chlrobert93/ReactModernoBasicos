import React from 'react';

//props se paso a destructuring titulo
function Header({titulo}){
    console.log(titulo);
    //Return es lo que se ve en pantalla
    return(
        <h1 className= 'encabezado'>{titulo}</h1>
    )
}

export  default Header;