import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { GiCupidonArrow } from 'react-icons/gi'; 

function ProCard() {
  return (
    <div className="tariff-card pro">
      <div className="tariff-card__top">
        <div className="tariff-card__top-left">
          <div className="tariff-card__title">PRO</div>
          <div className="tariff-card__subtitle">Для HR и фрилансеров</div>
        </div>
        <div className="tariff-card__top-right">
          <GiCupidonArrow size={48} color="#fff" />
        </div>
      </div>
      <div className="tariff-card__bottom">
        <div className="tariff-card__bottom-row">
          <div className="tariff-card__price">
            <span className="tariff-card__price-current">1 299 ₽</span>
            <span className="tariff-card__price-old">2 600 ₽</span>
          </div>
        </div>
        <div className="tariff-card__installment">
          или 279 ₽/мес. при рассрочке на 24 мес.
        </div>
        <div className="tariff-card__includes-title">В тариф входит:</div>
        <ul className="tariff-card__includes-list">
          <li><FaCheckCircle color="#00B533" /> Безлимитная история запросов</li>
          <li><FaCheckCircle color="#00B533" /> Безопасная сделка</li>
          <li><FaCheckCircle color="#00B533" /> Поддержка 24/7</li>
          <li><FaCheckCircle color="#00B533" /> Экспорт истории</li>
          <li><FaCheckCircle color="#00B533" /> Рекомендации по приоритетам</li>
        </ul>
        <button className="tariff-btn">Подробнее</button>
      </div>
    </div>
  );
}

export default ProCard;
