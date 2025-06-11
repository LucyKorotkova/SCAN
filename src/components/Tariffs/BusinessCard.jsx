import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';

function BusinessCard() {
  return (
    <div className="tariff-card business">
      <div className="tariff-card__top">
        <div className="tariff-card__top-left">
          <div className="tariff-card__title">Business</div>
          <div className="tariff-card__subtitle">Для корпоративных клиентов</div>
        </div>
        <div className="tariff-card__top-right">
          <FaLaptop size={48} color="#fff" />
        </div>
      </div>
      <div className="tariff-card__bottom">
        <div className="tariff-card__bottom-row">
          <div className="tariff-card__price">
            <span className="tariff-card__price-current">2 379 ₽</span>
            <span className="tariff-card__price-old">3 700 ₽</span>
          </div>
        </div>
        <div className="tariff-card__includes-title">В тариф входит:</div>
        <ul className="tariff-card__includes-list">
          <li><FaCheckCircle color="#00B533" /> Безлимитная история запросов</li>
          <li><FaCheckCircle color="#00B533" /> Безопасная сделка</li>
          <li><FaCheckCircle color="#00B533" /> Поддержка 24/7</li>
          <li><FaCheckCircle color="#00B533" /> Экспорт истории</li>
          <li><FaCheckCircle color="#00B533" /> Рекомендации по приоритетам</li>
          <li><FaCheckCircle color="#00B533" /> Безлимитное количество запросов</li>
          <li><FaCheckCircle color="#00B533" /> Приоритетная поддержка</li>
        </ul>
        <button className="tariff-btn">Подробнее</button>
      </div>
    </div>
  );
}

export default BusinessCard;
