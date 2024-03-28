import { Link } from "react-router-dom";

import Heart_Icon from "../icons/heart_icon.svg";
import Cart_Icon from "../icons/cart_icon.svg";

import Icon from "./Icon";

function Header({ amountOfGoods }) {
  return (
    <div className="navbar container">
      <Link to="/" className="links">
        <h1>QPICK</h1>
      </Link>
      <div className="links-icons">
        <Link className="cart_icon">
          <Icon imageUrl={Heart_Icon} styling="cart_icon" amount="0" />
        </Link>
        <Link to="/cart" className="cart_icon">
          <Icon
            imageUrl={Cart_Icon}
            styling="cart_icon"
            amount={amountOfGoods}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
