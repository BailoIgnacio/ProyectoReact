import React from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import NavBar from "./assets/componentes/NavBar";
import ItemListContainer from "./assets/componentes/ItemListContainer";
import ProductDetail from "./assets/componentes/ProductDetail";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<div>Esta pagina no existe (ERROR 404)</div>}/>
        <Route path="products/category/:id" element={<ItemListContainer/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
