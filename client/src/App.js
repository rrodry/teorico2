import './App.css';
import Landing from './componentes/landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router className="bg-black">
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </Router>
  )
}

export default App;
