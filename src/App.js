
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import Orders from './container/orders';
import Logout from './container/Logout';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
    
}

export default App;
