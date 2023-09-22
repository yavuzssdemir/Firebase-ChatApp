import {
    addDoc,
    collection,
    onSnapshot,
    serverTimestamp,
    query,
    where,
    orderBy,
  } from 'firebase/firestore';
  import { db, auth } from '../firebase/firebaseConfig';
  import { useEffect, useState } from 'react';
  import Message from '../components/Message';
  
  const Chat = ({ room, setRoom }) => {
    const [messages, setMessages] = useState([]);
    //* kolleksiyonun referansını alma
    const messagesCol = collection(db, 'messages');
  
    // mesaj gönderme
    const handleSubmit = (e) => {
      e.preventDefault();
      // mesajı kontrol etme
      if (e.target[0].value === '') return;
  
      //* belirttiğimiz kolleksiyona yeni eleman ekler
      addDoc(messagesCol, {
        text: e.target[0].value,
        user: auth.currentUser.displayName,
        room,
        createdAt: serverTimestamp(),
      });
  
      // inputu sıfırlama
      e.target[0].value = '';
    };
  
    //* gönderilen mesajları alma
    useEffect(() => {
      //* filtreleme ayarlarını yapma
      const queryOptions = query(
        messagesCol,
        where('room', '==', room),
        orderBy('createdAt', 'asc')
      );
  
      //* kolleksiyonun değişimini izler
      //* değişimi algıladığında fonksiyonu çalıştırır
      onSnapshot(queryOptions, (snapshot) => {
        let comingMessages = [];
  
        //* kolleksiyonu dönüp document'ın verilerine erişme
        snapshot.forEach((doc) => {
          comingMessages.push(doc.data());
        });
  
        setMessages(comingMessages);
      });
    }, []);
  
    return (
      <div className="chat">
        <header>
          <p className="user">{auth.currentUser.displayName}</p>
          <p>{room}</p>
          <a onClick={() => setRoom(null)}>Farklı Oda</a>
        </header>
        <main>
          {messages.map((msg) => (
            <Message msg={msg} user={auth.currentUser.displayName} />
          ))}
        </main>
        <form onSubmit={handleSubmit}>
          <input placeholder="mesajınızı yazınız..." type="text" />
          <button>Gönder</button>
        </form>
      </div>
    );
  };
  
  export default Chat;