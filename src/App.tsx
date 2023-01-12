import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import FreeFincances from './Pages/FreeFinances'
import Metodo503020 from './Pages/503020'

export default function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/503020' element={<Metodo503020/>}/>
          <Route path='/freefinances' element={<FreeFincances/>}/>
        </Routes>
      </Router>
    </div>
  )
}