import React, { useState } from 'react';
import styles from './SalaEscolherChat.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function SalaEscolherChat() {
    const [salas, setSalas] = useState([]);

    const adicionarSala = (novaSala) => {
        if (!novaSala.nome || !novaSala.descricao) {
            alert('Por favor, preencha todos os campos.'); // Alerta JavaScript
            return;
        }
        setSalas([...salas, novaSala]);
    };

    return (
        <div>
            <Navbar />
            <h1 className={styles.entrarcomunidade}>Junte-se à Comunidade da Diálogo Online 💬</h1>
            <p className={styles.txtlegenda}>Junte-se à diversão agora mesmo e mergulhe em uma experiência de conversação enriquecedora. Seja bem-vindo ao lugar onde as palavras se transformam em conexões genuínas!</p>

            <div>
            <div className={styles.buttonsContainer}>
                <Link to="/CriarSala">
                    <button type="submit" className={styles.btnCriarSala}>
                        Criar Sala 🗣️
                    </button>
                </Link>

                <Link to="/SalasExistentes">
                <button type="submit" className={styles.btnEntrarSalaExistente}>
                    Entrar em uma sala 🚪
                </button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default SalaEscolherChat;