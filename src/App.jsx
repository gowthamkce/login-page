import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/log';
import Register from './component/reg';
import Land from './component/land';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <Routes>


    <Route path='/' element={<Login></Login>}></Route>
    <Route path='/reg' element={<Register></Register>}> </Route>
    <Route path='/land' element={<Land></Land>}> </Route>

    </Routes>
  
  
 
    </BrowserRouter>
 
    </>
  )
}

export default App
