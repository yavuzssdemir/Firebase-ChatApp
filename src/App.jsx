import { useEffect, useState } from 'react';
import { auth } from './firebase/firebaseConfig';
import Auth from './pages/Auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Chat from './pages/Chat';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [room, setRoom] = useState(null);

  // kullanıcnın oturumundaki değişimi izler
  // eğer kullanıcı varsa çalıştırdığı fonksiyyona parametre olrak gönderiri
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  // çıkış yapma fonksiyonu
  const handleLogout = () => {
    // kullanınıcının oturumunu kapatır
    signOut(auth).catch((err) => console.log('HATA', err));
  };

  // form gödnderilidğinde çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // kullanıcını giriş yapıcağı odayı belirleme
    setRoom(e.target[0].value);
  };

  /* kullanıcı yoksa giriş ekranını  gösterir */
  if (!isAuth) {
    return (
      <div className="container">
        <Auth />
      </div>
    );
  }

  // kullanıcı varsa gösterir
  return (
    <div className="container">
      {room ? (
        <Chat room={room} setRoom={setRoom} />
      ) : (
        <form onSubmit={handleSubmit} className="room-container">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Giriceksiniz</p>
          <input type="text" />

          <button type="submit">Odaya Gir</button>

          <button
            onClick={handleLogout}
            className="logout"
            type="button"
          >
            Çıkış Yap
          </button>
        </form>
      )}
    </div>
  );
}

export default App;