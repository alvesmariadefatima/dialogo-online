import React, { useState, useEffect } from 'react';
import styles from './SalasExistentes.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function SalasExistentes() {
    const [salas, setSalas] = useState([]);

    useEffect(() => {
        const carregarSalas = () => {
            try {
                const savedSalas = localStorage.getItem('salasExistentes');
                if (savedSalas) {
                    setSalas(JSON.parse(savedSalas));
                }
            } catch (error) {
                console.error('Erro ao carregar salas:', error.message);
            }
        };

        carregarSalas();
    }, []);

    return (
        <div>
            <Navbar />
            <h1 className={styles.txtsalasexistentes}>Salas Existentes</h1>
            <p className={styles.txtsalasexistentes}>Junte-se às salas de bate-papo existentes e conheça novas pessoas 🚪</p>
            <div className={styles.containerButton}>
                <Link to="/SalaEscolherChat">
                    <button type="submit" className={styles["send-back"]}>
                        Voltar
                    </button>
                </Link>
            </div>

            <div className={styles.containerSalasExistentes}>
                {salas.map((sala, index) => (
                    <section key={index}>
                        <p className={styles.txtsala}>Nome da Sala: {sala.nome}</p>
                        <p className={styles.txtdescricao}>Descrição: {sala.descricao}</p>
                        <Link to="/Chat" className={styles.linkEntrar} style={{textDecoration: 'none'}}>
                            <button className={styles.btnEntrarSala}>Entrar</button>
                        </Link>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default SalasExistentes;