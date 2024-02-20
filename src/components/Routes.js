import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import SalaEscolherChat from './pages/SalaEscolherChat';
import Chat from './pages/Chat';
import SalasExistentes from './pages/SalasExistentes';
import CriarSala from './pages/CriarSala';
import Loading from './Loading/Loading';
import Navbar from './Navbar/Navbar';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/Home" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/SalaEscolherChat" element={<SalaEscolherChat />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/SalasExistentes" element={<SalasExistentes />} />
                <Route path="/CriarSala" element={<CriarSala />} />
                <Route path="/Loading" element={<Loading />} />
                <Route path="/Navbar" element={<Navbar />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
