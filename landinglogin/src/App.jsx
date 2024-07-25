import './App.css'
import { FormLogin } from './components/FormLogin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
function App() {
  return (
    <Router>

      <Routes>
        <Route path='/iniciarsesion' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App
