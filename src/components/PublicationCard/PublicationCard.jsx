import React from 'react';

// Вспомогательная функция для безопасного вывода HTML
function createMarkup(html) {
  return { __html: html };
}

function PublicationCard({ publication }) {
  const {
    issueDate,
    url,
    source,
    title,
    content,
    attributes
  } = publication;

  // Теги
  const tags = [];
  if (attributes.isTechNews) tags.push('Технические новости');
  if (attributes.isAnnouncement) tags.push('Анонсы и события');
  if (attributes.isDigest) tags.push('Сводки новостей');

  return (
    <div className="publication-card">
      <div className="publication-card__header">
        <span>{new Date(issueDate).toLocaleDateString()}</span>
        <a href={url} target="_blank" rel="noopener noreferrer">{source.name}</a>
      </div>
      <h3>{title.text}</h3>
      <div className="publication-card__tags">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <div
        className="publication-card__content"
        dangerouslySetInnerHTML={createMarkup(content.markup)}
      />
      <div className="publication-card__footer">
        <a href={url} target="_blank" rel="noopener noreferrer" className="read-btn">
          Читать в источнике
        </a>
        <span>{attributes.wordCount} слов</span>
      </div>
    </div>
  );
}

export default PublicationCard;
