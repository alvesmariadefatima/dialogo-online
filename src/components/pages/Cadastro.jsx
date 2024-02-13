import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importando useNavigate para redirecionamento programático
import styles from './Cadastro.module.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numeroComplemento, setNumeroComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState(''); // Adicionando estado para confirmar a senha
    const [showAlert, setShowAlert] = useState(false); // Estado para controlar se o alerta deve ser mostrado
    const navigate = useNavigate(); // Inicialize o hook useNavigate

    // Função para lidar com o clique no botão de cadastro
    const handleCadastro = () => {
        if (!nome.trim() || !email.trim() || !endereco.trim() || !numeroComplemento.trim() || !cidade.trim() || !estado.trim() || !telefone.trim() || !senha.trim() || !confirmarSenha.trim()) {
            setShowAlert(true);
        } else if (senha !== confirmarSenha) { // Verificar se as senhas são iguais
            alert('As senhas não coincidem. Por favor, verifique.');
        } else {
            setShowAlert(false);
            alert('Cadastro realizado com sucesso!');
            navigate("/Home");
        }        
    };

    const estados = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR',
        'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];

    return (
        <div>
            <h1 className={styles.titulosite}>Diálogo Online 💬</h1>
            <h1 className={styles.titulocadastro}>Cadastro</h1>
            <p className={styles.subtitulocadastro}>Por favor, preencha seus dados para dar prosseguimento ao seu cadastro.</p>

            <main className={styles.mainCadastro}>
                <div className={styles.inputGroupCadastro}>
                    <label className={styles.labelCadastro}>Nome Completo: </label>
                    <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className={styles.inputField} />

                    <label className={styles.labelCadastro}>Email: </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.inputField} />

                    <label className={styles.labelCadastro}>Endereço: </label>
                    <input type="text" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} className={styles.inputField} />

                    <label className={styles.labelCadastro}>Número/Complemento: </label>
                    <input type="text" id="numerocomplemento" value={numeroComplemento} onChange={(e) => setNumeroComplemento(e.target.value)} className={styles.inputField} />

                    <label className={styles.labelCadastro}>Cidade: </label>
                    <input type="text" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} className={styles.inputField} />

                    <label className={styles.labelCadastro}>Estado/UF: </label>
                    <select id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} className={styles.inputField}>
                        <option value="">Selecione o estado</option>
                        {estados.map((estado, index) => (
                            <option key={index} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>

                    <label className={styles.labelCadastro}>Telefone: </label>
                    <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} className={styles.inputField} />

                    <label className={styles.labelCadastro}>Digite sua senha: </label>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.inputField} maxLength={8} />

                    <label className={styles.labelCadastro}>Confirme sua senha: </label>
                    <input type="password" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} className={styles.inputField} maxLength={8} />

                    <div className={styles.containerButtons}>
                        <Link to="/Home">
                            <button className={styles.btnvoltar}>
                                Voltar
                            </button>
                        </Link>

                        <button className={styles.btncadastrar} onClick={handleCadastro}>
                            Cadastrar
                        </button>
                    </div>
                    {showAlert && (
                        <div className={styles.message}>
                            ⚠️ Preencha todos os campos antes de fazer cadastro!
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Cadastro;
