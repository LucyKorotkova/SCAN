import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/api';

function AuthForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login: doLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const isValid = login.trim() && password.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    setError('');
    try {
      const data = await loginUser(login, password);
      doLogin(data.accessToken, data.expire);
      navigate('/');
    } catch (err) {
      setError('Неверный логин или пароль');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!isValid || loading}>
        {loading ? 'Вход...' : 'Войти'}
      </button>
      {error && <div className="error">{error}</div>}
      <div className="auth-form__extra">
        <span className="tab">Зарегистрироваться</span>
        <span className="link">Восстановить пароль</span>
        <div className="open">
          <span className='open_page'>Войти через:</span>
        </div>
        <div className="socials">
          <button type="button" disabled>Google</button>
          <button type="button" disabled>Facebook</button>
          <button type="button" disabled>Яндекс</button>
        </div>
      </div>
    </form>
  );
}

export default AuthForm;
