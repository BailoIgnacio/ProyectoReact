import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/componentes/NavBar.jsx'
import ItemListContainer from './assets/componentes/ItemListContainer.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavBar/>
    </div>

     <div>
      <ItemListContainer/>
     </div>
    </>
  )
}

export default App
