import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './Chat.module.css';
import Navbar from '../Navbar/Navbar';

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem('chatMessages');
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? storedUser : 'user1';
  });

  useEffect(() => {
    // Salvando as mensagens no localStorage sempre que houver alterações
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    // Salvando o usuário atual no localStorage
    localStorage.setItem('currentUser', currentUser);
  }, [messages, currentUser]);

  useEffect(() => {
    // Simulação de uma conversa prévia
    const initialConversation = [
      { id: 1, user: 'user1', text: 'Olá, tudo bem?' },
      { id: 2, user: 'user2', text: 'Oi! Sim, e você?' },
      { id: 3, user: 'user1', text: 'Estou bem também, obrigado por perguntar.' },
      { id: 4, user: 'user2', text: 'Que bom!' },
      { id: 5, user: 'user1', text: 'Você fez alguma coisa interessante hoje?' },
      { id: 6, user: 'user2', text: 'Sim, fui ao parque com alguns amigos. Foi bem divertido.' },
      { id: 7, user: 'user1', text: 'Legal! Eu fiquei em casa assistindo filmes.' },
      { id: 8, user: 'user2', text: 'Também é uma ótima forma de passar o tempo.' },
    ];
  
    setMessages(initialConversation);
  }, []);
  

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() === '') {
      alert('Digite uma mensagem.');
      return;
    }
    
    const newMessageObj = { id: messages.length + 1, user: currentUser, text: newMessage };
    setMessages([...messages, newMessageObj]);
    setNewMessage('');

    // Alternando entre os usuários após enviar a mensagem
    setCurrentUser(currentUser === 'user1' ? 'user2' : 'user1');
  };

  return (
    <div>
      <Navbar />
      <div className={styles['header']}>
        <h1>Diálogo Online | Chat 💬</h1>
        <h3>Conecte-se com pessoas incríveis e faça amizades 💗</h3>
      </div>

      <div className={styles['chat-container']}>
        <div>
          <h1 className={styles.txtbatepapo}>Bate-papo 🗣️</h1>
        </div>
        <div className={styles['chat-messages']}>
          {messages.map((message) => (
            <div key={message.id} className={`${styles['chat-message']} ${message.user === currentUser ? styles['current-user'] : ''}`}>
              {message.user === 'user1' && <FaUser className={styles['user-icon']} />}
              {message.text}
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