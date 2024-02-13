import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

function Home() {
    const [emailTelefone, setEmailTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [senhaError, setSenhaError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!emailTelefone.trim() || !senha.trim() || senha.length !== 8) {
            setShowAlert(true);
            setSenhaError('A senha deve ter exatamente 8 caracteres.');
        } else {
            setShowAlert(false);
            setSenhaError('');
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                navigate('/SalaEscolherChat');
            }, 2000);
        }        
    };

    return (
        <div>
            {isLoading && <Loading />}
            <h1 className={styles.titulosite}>Diálogo Online 💬</h1>
            <p className={styles.slogan}>"Diálogo Online: Onde Palavras se Transformam em Conexões!"</p>

            <main className={styles.main}>
                <h2 className={styles.txtlogin}>Login</h2>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email ou Telefone:</label>
                    <input 
                        type="text" 
                        id="email/telefone" 
                        name="email/telefone" 
                        value={emailTelefone} 
                        onChange={(e) => setEmailTelefone(e.target.value)} 
                        className={styles.inputField} 
                        aria-label="Email ou Telefone"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password" 
                        id="senha" 
                        name="senha" 
                        value={senha} 
                        onChange={handleSenhaChange} 
                        className={styles.inputField} 
                        aria-label="Senha"
                        maxLength={8}
                    />
                    {senhaError && (
                        <div className={styles.error}>
                            {senhaError}
                        </div>
                    )}
                </div>

                <div className={styles.inputGroup}>
                    <button 
                        className={styles.btnlogin} 
                        onClick={handleLogin}
                        aria-label="Login"
                    >
                        Login
                    </button>

                    {showAlert && (
                        <div className={styles.message}>
                            <span role="img" aria-label="Aviso">⚠️</span> Preencha todos os campos antes de fazer login!
                        </div>
                    )}
                </div>

                <div className={styles.center}>
                    <Link 
                        className={styles.linkcriarconta} 
                        to="/Cadastro"
                    >
                        Criar uma conta
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
