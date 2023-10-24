import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import fonte from './Fontes/JockeyOne-Regular.ttf';
import Home from './pages/home/home';
import Conta from './pages/conta/conta';
import Conta2 from './pages/abrirConta/abrirConta'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/abrirConta" element={<Conta2 />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
