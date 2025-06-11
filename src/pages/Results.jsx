import React from 'react';
import ResultsSummaryTable from '../components/ResultsSummaryTable';

function Results() {
  return (
    <main className="results-main">
      <section className="results-top">
        <div className="results-top__left">
          <h2>Ищем. Скоро будут результаты</h2>
          <p className="results-wait">
            Поиск может занять некоторое время, просим сохранять терпение.
          </p>
        </div>
      </section>

      <section className="results-summary">
        <h3>Общая сводка</h3>
        <div className="results-found">Найдено 4 221 вариантов</div>
        <ResultsSummaryTable />
      </section>

      <section className="results-docs">
        <h3>СПИСОК ДОКУМЕНТОВ</h3>
        <div className="results-cards">
          <div className="results-card">
            <div className="results-card__header">
              <span className="results-card__date">13.09.2021</span>
              <span className="results-card__source">Комсомольская правда KP.RU</span>
            </div>
            <div className="results-card__title">
              Скиллфэктори - лучшая онлайн-школа для будущих айтишников
            </div>
            <div className="results-card__tag" style={{ background: 'rgba(255, 182, 79, 1)' }}>
              Технические новости
            </div>
            <div className="results-card__text">
              SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
              <br /><br />
              Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
            </div>
            <div className="results-card__footer">
              <a
                href="https://kp.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="results-card__btn"
              >
                Читать в источнике
              </a>
              <span className="results-card__words">2 543 слова</span>
            </div>
          </div>
          <div className="results-card">
            <div className="results-card__header">
              <span className="results-card__date">15.10.2021</span>
              <span className="results-card__source">VC.RU</span>
            </div>
            <div className="results-card__title">
              Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций
            </div>
            <div className="results-card__tag" style={{ background: 'rgba(255, 182, 79, 1)' }}>
              Технические новости
            </div>
            <div className="results-card__text">
              Кто такой Data Scientist и чем он занимается?
              Data Scientist — это специалист, который работает с большими массивами данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования больших данных и искусственного интеллекта — умные ленты в социальных сетях. На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, который может быть вам интересен. Эту модель создал и обучил дата-сайентист, и скорее всего, не один.

              В небольших компаниях и стартапах дата-сайентист делает все: собирает и очищает данные, создает математическую модель для их анализа, тестирует ее и презентует готовое решение бизнесу.
            </div>
            <div className="results-card__footer">
              <a
                href="https://kp.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="results-card__btn"
              >
                Читать в источнике
              </a>
              <span className="results-card__words">3 233 слова</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Results;