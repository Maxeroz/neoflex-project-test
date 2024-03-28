import Lang from "../icons/lang.svg";
import { Link } from "react-router-dom";

import VK from "../icons/VK.svg";
import Telegram from "../icons/Telegram.svg";
import Whatsapp from "../icons/Whatsapp.svg";

import { langMap } from "../constants";

function Footer({ language, dispatch }) {
  return (
    <section className="container">
      <footer className="footer">
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

              {Object.entries(langMap).map(([key, value]) => (
                <button
                  className={`btn btn-lang ${
                    language === key ? "active-lang" : ""
                  }`}
                  onClick={() =>
                    dispatch({ type: "changeLanguage", payload: key })
                  }
                  key={key}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="networks">
          <a href="https://vk.com/ozerskiy_maxim" target="_blank">
            <img className="network-icon" src={VK} />
          </a>
          <a href="/">
            <img className="network-icon" src={Telegram} />
          </a>
          <a href="tel:+70001234567">
            <img className="network-icon" src={Whatsapp} />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
