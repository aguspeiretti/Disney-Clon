import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './Components/Detail/Detail';
import Login from './Components/Login/Login';
import MoviesProvider from './context/Context';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      
      <MoviesProvider >
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>    
          <Route path='/Detail/:id' element={<Detail />}/>    
          <Route path='Login' element={<Login />}/>    
        </Routes>
      </BrowserRouter>
      </MoviesProvider>
     
    </div>
  )
}

export default App
