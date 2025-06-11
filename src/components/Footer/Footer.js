import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__logo">СКАН</span>
      </div>
      <div className="footer__right">
        <div>г. Москва, Цветной б-р, 40</div>
        <div>+7 495 771 21 11</div>
        <div>info@skan.ru</div>
        <div className="footer__copyright">
          Copyright. 2022.
        </div>
      </div>
    </footer>
  );
}

export default Footer;