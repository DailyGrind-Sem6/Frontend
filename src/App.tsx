import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

import Template from './pages/Template'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path='/bzbz' element={<Template />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
