import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../Loader/Loader';
import { getAccountInfo } from '../../api/api';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const [accountInfo, setAccountInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoading(true);
      getAccountInfo(user.token)
        .then(data => setAccountInfo(data.eventFiltersInfo))
        .catch(() => setAccountInfo(null))
        .finally(() => setLoading(false));
    }
  }, [user]);

  return (
    <header>
      <div className="logo">
        <Link to="/">СКАН</Link>
      </div>
      <nav>
        <Link to="/">Главная</Link>
        <button type="button" className="fake-link" tabIndex={0}>Тарифы</button>
        <button type="button" className="fake-link" tabIndex={0}>FAQ</button>
      </nav>
      <div className="user-panel">
        {!user ? (
          <>
            <Link to="/login">Войти</Link>
            <button type="button" className="fake-link" tabIndex={0}>Зарегистрироваться</button>
          </>
        ) : (
          <>
            {loading ? (
              <Loader />
            ) : (
              <div className="account-info">
                <span>Компаний: {accountInfo?.usedCompanyCount ?? '-'} / {accountInfo?.companyLimit ?? '-'}</span>
              </div>
            )}
            <span className="avatar">👤</span>
            <button onClick={() => { logout(); navigate('/'); }}>Выйти</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;