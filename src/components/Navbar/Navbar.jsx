import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {

    const handleLogout = () => {
        const confirmLogout = window.confirm("Tem certeza de que deseja sair?");
        if (confirmLogout) {
            window.location.href = "/Home";
        }
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.iconesairContainer}>
                <img
                    className={styles.iconesair}
                    src="./icone-sair.png"
                    alt="Ícone Sair"
                    onClick={handleLogout}
                />
            </div>
        </div>
    );
}

export default Navbar;
