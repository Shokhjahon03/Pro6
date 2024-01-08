import React from "react";
import 'react-router-dom'
import './App.css'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Tuth from './components/Tuth'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  const showToastMessage = () => {
    toast.success("Lokal storejga saqlanmagan", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "toast-message", 
    });
  };

  return (
    <BrowserRouter>
    
      <header>
        <nav className=' w-full flex justify-center items-center fixed top-0 left-0 bg-white z-10'>
            <div className="container">
              <div className="navbar w-full flex justify-between items-center pr-[10px] pl-[10px]">
             <Link to='/'> <i className='bx bxs-contact text-[80px]'></i></Link>
              <ul className='w-[200px] flex justify-between items-center'>
                <Link to="/">Home</Link>
                <Link to="/auth">Search</Link>
              </ul>
              </div>
            </div>
        </nav>
      </header>
      <div className=" absolute top-[600px] left-[150px] inline-block">
      {/* <button className="" onClick={showToastMessage}>Formdagi kamchiliklar</button> */}
      <button onClick={showToastMessage} className="continue-application">
    <div>
        <div className="pencil"></div>
        <div className="folder">
            <div className="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div className="paper"></div>
            </div>
            </div>
          Formdagi kamchiliklar
                </button>

      <ToastContainer />
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Tuth />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
