import './index.css'
import Home from './pages/home'
import About from './pages/about'
import { Routes, Route  } from 'react-router-dom'
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
      

    
  )
}

export default App
