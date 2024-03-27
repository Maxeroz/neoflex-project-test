import Lang from "../icons/lang.svg";

import VK from "../icons/VK.svg";
import Telegram from "../icons/Telegram.svg";
import Whatsapp from "../icons/Whatsapp.svg";
function Footer() {
  return (
    <div className="container">
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
          <img className="network-icon" src={VK} />
          <img className="network-icon" src={Telegram} />
          <img className="network-icon" src={Whatsapp} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
