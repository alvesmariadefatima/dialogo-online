import React from 'react';
import styles from './SalasExistentes.module.css';
import { Link, useLocation } from 'react-router-dom'; // Importando useLocation para acessar os dados passados via navegação
import Navbar from '../Navbar/Navbar';

function SalasExistentes() {
    const location = useLocation();
    const { nomeSala, descricao } = location.state || {};

    return (
        <div>
            <Navbar />
            <h1 className={styles.txtsalasexistentes}>Salas Existentes</h1>
            <p className={styles.txtsalasexistentes}>Junte-se as salas existentes e conheça novas pessoas 🚪</p>
            <div className={styles.containerButton}>
                <Link to="/SalaEscolherChat">
                    <button type="submit" className={styles["send-back"]}>
                        Voltar
                    </button>
                </Link>
            </div>

            <div className={styles.containerSalasExistentes}>
                {nomeSala && descricao && ( // Renderizar apenas se as informações da sala existirem
                    <section>
                        <p className={styles.txtsala}>Nome da Sala: {nomeSala}</p>
                        <p className={styles.txtdescricao}>Descrição: {descricao}</p>
                        <Link to="/Chat" className={styles.linkEntrar} style={{textDecoration: 'none'}}>
                            <button className={styles.btnEntrarSala}>Entrar</button>
                        </Link>
                    </section>
                )}
            </div>
        </div>
    );
}

export default SalasExistentes;