import React, { useEffect, useState } from "react";
import ItemListContainer from "./ItemListContainer"

function CartWidget({carrito}){

    const CarroCompras = () => <button>🛒{carrito}</button>


    return CarroCompras()

}

        
export default CartWidget