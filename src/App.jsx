import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './Components/menu'
import Rodape from './Components/Rodape'
export default function App() {

  return(
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )

}


