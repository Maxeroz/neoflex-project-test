import { Link } from "react-router-dom";

import Heart_Icon from "../icons/heart_icon.svg";
import Cart_Icon from "../icons/cart_icon.svg";

import Icon from "./Icon";

function Header({ amountOfGoods }) {
  return (
    <div className="navbar container">
      <h1>QPICK</h1>
      <div className="links">
        <Link to="/">
          <Icon imageUrl={Heart_Icon} styling="cart_icon" amount="2" />
        </Link>
        <Link to="/cart">
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
