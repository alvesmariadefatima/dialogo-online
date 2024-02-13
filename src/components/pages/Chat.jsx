import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Chat.module.css';
import Navbar from '../Navbar/Navbar';
import { FaUser } from 'react-icons/fa'; // Importando o ícone de usuário

const Chat = () => {
  const location = useLocation();
  const { nomeSala, descricao } = location.state || {};
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() === '') {
      alert('Digite uma mensagem.');
      return;
    }
    const newMessageObj = { id: messages.length + 1, text: newMessage };
    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  const navigate = useNavigate();

  const handleChat = () => {
    if (!nomeSala.trim() || !descricao.trim()) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      navigate('/Chat');
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles['header']}>
        <h1>Diálogo Online | Chat 💬</h1>
        <h3>Conecte-se com pessoas incríveis e faça amizades 💗</h3>
      </div>

      {showAlert && (
        <div className={styles['alert-message']}>
          ⚠️ Preencha todos os campos antes de continuar.
        </div>
      )}

      <div className={styles['containerButton']}>
        <Link className={styles.btnEntrar} to="/SalaEscolherChat">
          <button type="submit" className={styles['send-back']}>
            Voltar
          </button>
        </Link>
      </div>

      <div className={styles['chat-container']}>
        <div>
          <h1 className={styles.txtbatepapo}>Bate-papo 🗣️</h1>
        </div>
        <div className={styles['chat-messages']}>
          {messages.map((message) => (
            <div key={message.id} className={styles['chat-message']}>
              <FaUser className={styles['user-icon']} /> {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit} className={styles['chat-input-form']}>
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="Digite sua mensagem..."
            className={styles['chat-input']}
          />
          <button type="submit" className={styles['send-button']}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;