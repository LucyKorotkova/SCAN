import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const summaryData = [
  { period: '21.09.2023', total: 5, risks: 2 },
  { period: '28.09.2023', total: 8, risks: 1 },
  { period: '05.10.2023', total: 3, risks: 0 },
  { period: '12.10.2023', total: 7, risks: 4 },
  { period: '19.10.2023', total: 2, risks: 1 },
  { period: '26.10.2023', total: 6, risks: 3 },
  { period: '02.11.2023', total: 4, risks: 2 },
  { period: '09.11.2023', total: 1, risks: 0 },
];

const COLUMNS_ON_PAGE = 5;

function ResultsSummaryTable() {
  const [start, setStart] = useState(0);

  const canPrev = start > 0;
  const canNext = start + COLUMNS_ON_PAGE < summaryData.length;

  const visibleData = summaryData.slice(start, start + COLUMNS_ON_PAGE);

  const handlePrev = () => {
    if (canPrev) setStart(start - COLUMNS_ON_PAGE);
  };

  const handleNext = () => {
    if (canNext) setStart(start + COLUMNS_ON_PAGE);
  };

  return (
    <div className="results-summary-table-wrapper">
      <button
        className="results-arrow-thin"
        onClick={handlePrev}
        disabled={!canPrev}
        aria-label="Назад"
      >
        <FaArrowLeft size={24} />
      </button>
      <div className="results-summary-table-scroll">
        <table className="results-summary-table-transposed">
          <tbody>
            <tr>
              <th>Период</th>
              {visibleData.map((row, i) => (
                <td key={i}>{row.period}</td>
              ))}
            </tr>
            <tr>
              <th>Всего</th>
              {visibleData.map((row, i) => (
                <td key={i}>{row.total}</td>
              ))}
            </tr>
            <tr>
              <th>Риски</th>
              {visibleData.map((row, i) => (
                <td key={i}>{row.risks}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="results-arrow-thin"
        onClick={handleNext}
        disabled={!canNext}
        aria-label="Вперёд"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
}

export default ResultsSummaryTable;