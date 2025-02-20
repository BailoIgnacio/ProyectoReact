import React from "react";
import CartWidget from './CartWidget' 
import './NavBar.css'
import ItemListContainer from "./ItemListContainer";
import { Link } from "react-router-dom";
function Navbar() {


    return (
      <div className="Navbar">

        <div className="navbar-container">

          <Link to ={`/`} ><h1 className="title">Loop</h1></Link>

          <div className="nav-buttons">
            <ul>
              <Link to="products/category/beauty"><button>beauty</button></Link>
              <Link to="products/category/fragrances"><button>fragances</button></Link>
              <Link to="products/category/furniture"><button>furniture</button></Link>
              {/* <Link to="products/category/Medias"><button>Medias</button></Link> */}
            </ul>              
            
          </div>
          <div className="cart-widget">
          <CartWidget/>
          </div>

          </div>

        </div>

   
    );
  }
  

  

export default Navbar;