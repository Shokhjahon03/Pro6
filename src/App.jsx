import {} from 'react'
import 'react-router-dom'
import './App.css'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth'
function App() {
  

  return (
    <BrowserRouter>
      <header>
        <nav className=' w-full flex justify-center items-center fixed top-0 left-0 bg-white z-10'>
            <div className="container">
              <div className="navbar w-full flex justify-between items-center pr-[10px] pl-[10px]">
             <Link> <i className='bx bxs-contact text-[80px]'></i></Link>
              <ul className='w-[200px] flex justify-between items-center'>
                <Link to="/">Home</Link>
                <Link to="/aauth">Autorethed</Link>
              </ul>
              </div>
            </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
