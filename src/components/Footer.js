import Lang from "../icons/lang.svg";
import { Link } from "react-router-dom";

import VK from "../icons/VK.svg";
import Telegram from "../icons/Telegram.svg";
import Whatsapp from "../icons/Whatsapp.svg";

const languages = [
  {
    id: 1,
    lang: "Каз",
  },
  {
    id: 2,
    lang: "Рус",
  },
  {
    id: 3,
    lang: "Eng",
  },
];

function Footer({ language, dispatch }) {
  return (
    <div className="footer">
      <div className="logo-footer">
        <h1>QPICK</h1>
      </div>
      <div className="pages">
        <div>
          <ul className="list">
            <li>Избранное</li>
            <Link to="/cart" className="links">
              <li>Корзина</li>
            </Link>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="lang-container">
          Условия сервиса
          <div className="language">
            <img src={Lang} />

            {languages.map((lang) => (
              <button
                className={`btn btn-lang ${
                  language === lang.lang ? "active-lang" : ""
                }`}
                onClick={() =>
                  dispatch({ type: "changeLanguage", payload: lang.lang })
                }
              >
                {lang.lang}
              </button>
            ))}
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
