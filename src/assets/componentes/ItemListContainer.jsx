import React from "react";
import './ItemListContainer.css'

function ItemListContainer(props){
    return(
        <div className="itemlistcontainer">
            <p className="itemlistcontainer-h1">Hola {props.nombre}, te damos la bienvenida a nuestro sitio oficial</p>
        </div>
    )
}

export default ItemListContainer;