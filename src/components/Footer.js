import Lang from "../icons/lang.svg";

import VK from "../icons/VK.svg";
import Telegram from "../icons/Telegram.svg";
import Whatsapp from "../icons/Whatsapp.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="logo-footer">
        <h1>QPICK</h1>
      </div>
      <div className="pages">
        <div>
          <ul className="list">
            <li>Избранное</li>
            <li>Корзина</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="lang-container">
          Условия сервиса
          <div className="language">
            <img src={Lang} />
            <button className="btn btn-lang active-lang">Рус</button>
            <button className="btn btn-lang ">Eng</button>
          </div>
        </div>
      </div>

      <div className="networks">
        <a href="https://vk.com/ozerskiy_maxim" target="_blank">
          <img className="network-icon" src={VK} />
        </a>
        <a href="tel:+70001234567">
          <img className="network-icon" src={Telegram} />
        </a>
        <a href="tel:+70001234567">
          <img className="network-icon" src={Whatsapp} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
