import React, { useState } from 'react';

function SummaryCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const totalDocs = data.find(d => d.histogramType === 'totalDocuments')?.data || [];
  const riskFactors = data.find(d => d.histogramType === 'riskFactors')?.data || [];

  const periods = totalDocs.length;

  const handlePrev = () => setIndex(i => (i > 0 ? i - 1 : periods - 1));
  const handleNext = () => setIndex(i => (i < periods - 1 ? i + 1 : 0));

  if (periods === 0) return <div>Нет данных для отображения</div>;

  return (
    <div className="summary-carousel">
      <button onClick={handlePrev}>&lt;</button>
      <div className="summary-carousel__item">
        <div>
          <b>Период:</b> {new Date(totalDocs[index].date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' })}
        </div>
        <div>
          <b>Публикаций:</b> {totalDocs[index].value}
        </div>
        <div>
          <b>Публикаций с рисками:</b> {riskFactors[index]?.value ?? 0}
        </div>
      </div>
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
}

export default SummaryCarousel;
