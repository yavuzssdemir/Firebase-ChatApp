import { signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

const Auth = () => {
  const handleClick = () => {
    /*
     * kullanıcının sağlayıcı hesabını seçmesi için bir prencere açar
     * hesabı seçtikten sonra daha önce varsa giriş yapar
     * yoksa yeni bir hesap oluşturur ve ona giriş yapar
     * promise döndürür kullanıcı girerse kullancı bilgilerini döndürür
     * hata olursda hatayı yakalamak gerekir
     */
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="auth">
      <h1>Chat Odası</h1>
      <p>Devam Etmek İçin Giriş Yapın</p>

      <button onClick={handleClick}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
        <span>Google ile gir</span>
      </button>
    </div>
  );
};

export default Auth;