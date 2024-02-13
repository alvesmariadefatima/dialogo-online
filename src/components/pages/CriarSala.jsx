import React, { useState } from 'react';
import styles from './CriarSala.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function CriarSala() {
    const [nomeSala, setNomeSala] = useState('');
    const [descricao, setDescricao] = useState('');
    const [convites, setConvites] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleChat = () => {
        if (!nomeSala.trim() || !descricao.trim() || !convites.trim()) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
            // Passando as informações da sala como estado para o componente SalasExistentes
            navigate('/SalasExistentes', { state: { nomeSala, descricao } });
        }        
    }; 

    return (
        <div className={styles.titulosite}>
            <Navbar /> 
            <h1>Diálogo Online 💬</h1>
            <h2 className={styles.txtcriarnovasala}>Criar Nova Sala</h2>
            <main className={styles.mainCriarSalaChat}>
                <form onSubmit={handleChat}>
                    <div className={styles.containerInput}>
                        <label htmlFor="nomeSala">Nome da Sala:</label>
                        <input
                            type="text"
                            id="nomeSala"
                            value={nomeSala}
                            onChange={(e) => setNomeSala(e.target.value)}
                            required
                            className={styles.inputField}
                        />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                            className={styles.inputField}
                        />
                    </div>

                    <div className={styles.containerInput}>
                        <label htmlFor="convites">Convites (separados por vírgula):</label>
                        <input
                            type="text"
                            id="convites"
                            value={convites}
                            onChange={(e) => setConvites(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>

                    <div className={styles.containerButton}>
                        <button className={styles.btnCriarSala} onClick={handleChat} type="submit">Criar Sala</button>
                    </div>
                </form>
            </main>
            <div className={styles.containerButton}>
                <Link to="/SalaEscolherChat">
                    <button type="submit" className={styles["send-back"]}>
                        Voltar
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CriarSala;