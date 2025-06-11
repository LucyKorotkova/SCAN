import React from 'react';
import { FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';

function BeginnerCard() {
  return (
    <div className="tariff-card beginner">
      <div className="tariff-card__top">
        <div className="tariff-card__top-left">
          <div className="tariff-card__title">Beginner</div>
          <div className="tariff-card__subtitle">Для небольшого исследования</div>
        </div>
        <div className="tariff-card__top-right">
          <FaRegLightbulb size={48} color="#fff" />
        </div>
      </div>
      <div className="tariff-card__bottom">
        <div className="tariff-card__bottom-row">
          <div className="tariff-card__price">
            <span className="tariff-card__price-current">799 ₽</span>
            <span className="tariff-card__price-old">1 200 ₽</span>
          </div>
          <div className="tariff-card__badge">Текущий тариф</div>
        </div>
        <div className="tariff-card__installment">
          или 150 ₽/мес. при рассрочке на 24 мес.
        </div>
        <div className="tariff-card__includes-title">В тариф входит:</div>
        <ul className="tariff-card__includes-list">
          <li><FaCheckCircle color="#00B533" /> Безлимитная история запросов</li>
          <li><FaCheckCircle color="#00B533" /> Безопасная сделка</li>
          <li><FaCheckCircle color="#00B533" /> Поддержка 24/7</li>
        </ul>
        <button className="tariff-btn current" disabled>Переход в личный кабинет</button>
      </div>
    </div>
  );
}

export default BeginnerCard;
