import React from "react";
import CartWidget from './CartWidget' 
import './NavBar.css'
function Navbar() {
    return (
      <div className="Navbar">

        <div className="navbar-container">

          <h1 className="title">Loop</h1>

          <div className="nav-buttons">
            <ul>
              <button><li>Zapatos</li></button>
              <button><li>Zapatillas</li></button>
              <button><li>Botas</li></button>
              <button><li>Medias</li></button>
            </ul>
            
          </div>

          <div className="cart-widget">
          <CartWidget />
          </div>

        </div>

      </div>
    );
  }
  

  

export default Navbar;