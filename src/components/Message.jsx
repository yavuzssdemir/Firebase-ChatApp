const Message = ({ msg, user }) => {
    //* mesajı gönderen hesap eşitse
    //* oturumu açık olan hesaba bunu ekran bas
    if (user === msg.user) {
      return <p className="msg-user">{msg.text}</p>;
    }
  
    //* mesajı farklı kullanıcı gönderdiyse ekrana basar
    return (
      <p className="msg-other">
        <span>{msg.user}:</span> <span>{msg.text}</span>
      </p>
    );
  };
  
  export default Message;