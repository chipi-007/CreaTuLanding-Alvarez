import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/components/Button/Botton'
import NavBar from './assets/components/NavBar/NavBar' 
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer'

function App() {

  const [count, setCount] = useState (0)


  return (
    <>
      <NavBar count = {count} />
      <ItemListContainer texto ="Catalogo de modelos 3D" setCount = {setCount} count = {count}/>
    </>
  )
}

export default App
