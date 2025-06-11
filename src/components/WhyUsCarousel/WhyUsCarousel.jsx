import React, { useState } from 'react';
import { FaClock, FaSearch, FaMedal } from 'react-icons/fa';

const cards = [
  {
    icon: <FaClock size={48} color="rgba(2, 148, 145, 1)" />,
    text: 'Высокая и оперативная скорость обработки заявки',
  },
  {
    icon: <FaSearch size={48} color="rgba(2, 148, 145, 1)" />,
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
  },
  {
    icon: <FaMedal size={48} color="rgba(2, 148, 145, 1)" />,
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
  },
];

function WhyUsCarousel() {
  const [index, setIndex] = useState(0);

  const isMobile = window.innerWidth < 900;

  const handlePrev = () => setIndex(i => (i > 0 ? i - 1 : cards.length - 1));
  const handleNext = () => setIndex(i => (i < cards.length - 1 ? i + 1 : 0));

  if (isMobile) {
    return (
      <div className="whyus-carousel">
        <button onClick={handlePrev} className="whyus-arrow">&lt;</button>
        <div className="whyus-card">
          <div className="whyus-icon">{cards[index].icon}</div>
          <h4>{cards[index].title}</h4>
          <p>{cards[index].text}</p>
        </div>
        <button onClick={handleNext} className="whyus-arrow">&gt;</button>
      </div>
    );
  }

  return (
    <div className="whyus-carousel whyus-carousel--row">
      {cards.map((card, i) => (
        <div className="whyus-card" key={i}>
          <div className="whyus-icon">{card.icon}</div>
          <h4>{card.title}</h4>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default WhyUsCarousel;