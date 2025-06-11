import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import WhyUsCarousel from '../components/WhyUsCarousel/WhyUsCarousel';
import Tariffs from '../components/Tariffs/Tariffs';
import mainImage from '../assets/main-image.png'; 

function Home() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <main>
      <section className="home-hero-row">
        <div className="home-hero-left">
          <h1>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН</h1>
          <p>
            Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
          </p>
          {user && (
            <button
              className="main-btn"
              onClick={() => navigate('/search')}
            >
              Запросить данные
            </button>
          )}
        </div>
        <div className="home-hero-right">
          <img src={mainImage} alt="Главная иллюстрация" className="home-hero-img" />
        </div>
      </section>

      <section className="home-whyus">
        <h2>Почему именно мы?</h2>
        <WhyUsCarousel />
      </section>

      <section className="home-tariffs">
        <Tariffs />
      </section>
    </main>
  );
}

export default Home;