import React from 'react';
import PublicationCard from '../PublicationCard/PublicationCard';

function PublicationsList({ publications, onShowMore }) {
  return (
    <div className="publications-list">
      <h2>Публикации</h2>
      {publications.map(pub => (
        <PublicationCard key={pub.id} publication={pub} />
      ))}
      {onShowMore && (
        <button onClick={onShowMore} className="show-more-btn">
          Показать больше
        </button>
      )}
    </div>
  );
}

export default PublicationsList;
