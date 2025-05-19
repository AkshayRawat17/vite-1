import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import ContactUsPage from './Components/ContactUsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
