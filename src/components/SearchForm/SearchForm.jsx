import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateINN } from '../../utils/innValidator';
import { formatDateForApi } from '../../utils/dateUtils';
import { fetchHistograms, fetchPublicationIds, fetchDocuments } from '../../api/api';
import Loader from '../Loader/Loader';
import SummaryCarousel from '../SummaryCarousel/SummaryCarousel';
import PublicationsList from '../PublicationsList/PublicationsList';

const initialState = {
  inn: '',
  maxFullness: false,
  inBusinessNews: false,
  onlyMainRole: false,
  tonality: 'any',
  onlyWithRiskFactors: false,
  excludeTechNews: false,
  excludeAnnouncements: false,
  excludeDigests: false,
  limit: 10,
  startDate: '',
  endDate: ''
};

function SearchForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [pubIds, setPubIds] = useState([]);
  const [publications, setPublications] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  // Валидация формы
  const validate = () => {
    const errs = {};
    if (!form.inn) errs.inn = 'ИНН обязателен';
    else if (!validateINN(form.inn)) errs.inn = 'Некорректный ИНН';
    if (!form.tonality) errs.tonality = 'Тональность обязательна';
    if (!form.limit || form.limit < 1 || form.limit > 1000) errs.limit = 'От 1 до 1000';
    if (!form.startDate || !form.endDate) errs.dates = 'Укажите диапазон дат';
    else {
      const now = new Date();
      const start = new Date(form.startDate);
      const end = new Date(form.endDate);
      if (start > end) errs.dates = 'Дата начала позже даты конца';
      if (start > now || end > now) errs.dates = 'Даты не могут быть в будущем';
    }
    return errs;
  };

  const isValid = Object.keys(validate()).length === 0;

  // Формирование тела запроса
  const makeRequestBody = () => ({
    issueDateInterval: {
      startDate: formatDateForApi(form.startDate),
      endDate: formatDateForApi(form.endDate)
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: 'company',
            inn: form.inn,
            sparkId: null,
            entityId: null,
            maxFullness: form.maxFullness,
            inBusinessNews: form.inBusinessNews
          }
        ],
        onlyMainRole: form.onlyMainRole,
        onlyWithRiskFactors: form.onlyWithRiskFactors,
        tonality: form.tonality
      },
      themesFilter: { and: [], or: [], not: [] }
    },
    attributeFilters: {
      excludeTechNews: form.excludeTechNews,
      excludeAnnouncements: form.excludeAnnouncements,
      excludeDigests: form.excludeDigests
    },
    similarMode: 'none',
    limit: form.limit,
    sortType: 'issueDate',
    sortDirectionType: 'desc',
    intervalType: 'month',
    histogramTypes: ['totalDocuments', 'riskFactors']
  });

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setSummary(null);
    setPublications([]);
    setPubIds([]);
    try {
      // 1. Получаем сводку
      const summaryData = await fetchHistograms(makeRequestBody());
      setSummary(summaryData.data);

      // 2. Получаем ID публикаций
      const pubData = await fetchPublicationIds(makeRequestBody());
      setPubIds(pubData.items.map(item => item.encodedId));

      // 3. Загружаем первые 10 публикаций
      if (pubData.items.length > 0) {
        const docs = await fetchDocuments(pubData.items.slice(0, 10));
        setPublications(docs.filter(d => d.ok).map(d => d.ok));
        setShowMore(pubData.items.length > 10);
      }
    } catch (err) {
      setErrors({ api: 'Ошибка поиска' });
    } finally {
      setLoading(false);
      navigate('/results'); // Переход всегда, даже при ошибке
    }
  };

  // Загрузка следующих 10 публикаций
  const handleShowMore = async () => {
    const nextIds = pubIds.slice(publications.length, publications.length + 10);
    const docs = await fetchDocuments(nextIds);
    setPublications([...publications, ...docs.filter(d => d.ok).map(d => d.ok)]);
    setShowMore(pubIds.length > publications.length + 10);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div>
        <label>
          ИНН*:
          <input
            type="text"
            value={form.inn}
            onChange={e => setForm({ ...form, inn: e.target.value })}
          />
        </label>
        {errors.inn && <span className="error">{errors.inn}</span>}
      </div>
      <div>
        <label>
          Признак максимальной полноты:
          <input
            type="checkbox"
            checked={form.maxFullness}
            onChange={e => setForm({ ...form, maxFullness: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <label>
          Упоминания в бизнес-контексте:
          <input
            type="checkbox"
            checked={form.inBusinessNews}
            onChange={e => setForm({ ...form, inBusinessNews: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <label>
          Главная роль в публикации:
          <input
            type="checkbox"
            checked={form.onlyMainRole}
            onChange={e => setForm({ ...form, onlyMainRole: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <label>
          Тональность*:
          <select
            value={form.tonality}
            onChange={e => setForm({ ...form, tonality: e.target.value })}
          >
            <option value="any">Любая</option>
            <option value="positive">Позитивная</option>
            <option value="negative">Негативная</option>
          </select>
        </label>
        {errors.tonality && <span className="error">{errors.tonality}</span>}
      </div>
      <div>
        <label>
          Публикации только с риск-факторами:
          <input
            type="checkbox"
            checked={form.onlyWithRiskFactors}
            onChange={e => setForm({ ...form, onlyWithRiskFactors: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <label>
          Включать технические новости рынков:
          <input
            type="checkbox"
            checked={form.excludeTechNews}
            onChange={e => setForm({ ...form, excludeTechNews: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <label>
          Включать анонсы и календари:
          <input
            type="checkbox"
            checked={form.excludeAnnouncements}
            onChange={e => setForm({ ...form, excludeAnnouncements: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <label>
          Включать сводки новостей:
          <input
            type="checkbox"
            checked={form.excludeDigests}
            onChange={e => setForm({ ...form, excludeDigests: e.target.checked })}
          />
        </label>
      </div>
      <div>
        <label>
          Количество документов в выдаче*:
          <input
            type="number"
            min="1"
            max="1000"
            value={form.limit}
            onChange={e => setForm({ ...form, limit: Number(e.target.value) })}
          />
        </label>
        {errors.limit && <span className="error">{errors.limit}</span>}
      </div>
      <div>
        <label>
          Дата начала*:
          <input
            type="date"
            value={form.startDate}
            onChange={e => setForm({ ...form, startDate: e.target.value })}
          />
        </label>
        <label>
          Дата конца*:
          <input
            type="date"
            value={form.endDate}
            onChange={e => setForm({ ...form, endDate: e.target.value })}
          />
        </label>
        {errors.dates && <span className="error">{errors.dates}</span>}
      </div>
      <button type="submit" disabled={!isValid || loading}>
        {loading ? 'Поиск...' : 'Поиск'}
      </button>
      {errors.api && <div className="error">{errors.api}</div>}

      {loading && <Loader />}
      {summary && <SummaryCarousel data={summary} />}
      {publications.length > 0 && (
        <PublicationsList
          publications={publications}
          onShowMore={showMore ? handleShowMore : null}
        />
      )}
    </form>
  );
}

export default SearchForm;