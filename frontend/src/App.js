import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import ImageGallery from './ImageGallery';
import ImageDetails from './ImageDetails';
import  './App.css'
const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageGallery />}/>
        <Route path='/:id' element={<ImageDetails />}/>
   
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
